import { useRef, useMemo, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, useGLTF, Center } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

useGLTF.preload('/sculpture.glb')

/* ============================================================
   Device Detection Helper Hook
   ============================================================ */
function useDeviceProfile() {
  const [profile, setProfile] = useState(() => {
    if (typeof window === 'undefined') {
      return { isMobile: false, isTouch: false, dpr: 1 }
    }
    const isTouch = 'ontouchstart' in window || (navigator.maxTouchPoints > 0)
    const isSmall = window.innerWidth < 768
    const isMobile = isSmall || (isTouch && window.innerWidth < 1024)
    const rawDpr = window.devicePixelRatio || 1
    // High-performance DPR clamp: mobile strictly capped to 1.25, desktop to 1.5
    // Prevents mobile Retina GPUs from rendering 9x-16x fragment fill
    const dpr = isMobile ? Math.min(rawDpr, 1.25) : Math.min(rawDpr, 1.5)
    return { isMobile, isTouch, dpr }
  })

  useEffect(() => {
    const update = () => {
      const isTouch = 'ontouchstart' in window || (navigator.maxTouchPoints > 0)
      const isSmall = window.innerWidth < 768
      const isMobile = isSmall || (isTouch && window.innerWidth < 1024)
      const rawDpr = window.devicePixelRatio || 1
      const dpr = isMobile ? Math.min(rawDpr, 1.25) : Math.min(rawDpr, 1.5)
      setProfile({ isMobile, isTouch, dpr })
    }

    window.addEventListener('resize', update, { passive: true })
    window.addEventListener('orientationchange', update, { passive: true })
    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('orientationchange', update)
    }
  }, [])

  return profile
}

/* ============================================================
   Sculpture Model & Motion Logic (Mobile Optimized)
   ============================================================ */
function SculptureExperience({ isMobile, isTouch, onModelLoaded }) {
  const { scene } = useGLTF('/sculpture.glb')
  const groupRef = useRef()

  // Mouse & Parallax tracking
  const mouse = useRef({ x: 0, y: 0 })
  const smoothMouse = useRef({ x: 0, y: 0 })
  const cameraTargetLookY = useRef(0)

  // Scroll tracking
  const scrollProgress = useRef(0)
  const sectionMilestones = useRef([0, 0.16, 0.34, 0.52, 0.68, 0.84, 1.0])

  // Material setup:
  // Mobile: Lightweight MeshStandardMaterial without costly clearcoat/iridescence passes
  // Desktop: Ultra-reflective studio MeshPhysicalMaterial
  const chromeMaterial = useMemo(() => {
    if (isMobile) {
      return new THREE.MeshStandardMaterial({
        color: new THREE.Color('#f0f4f8'),
        metalness: 0.95,
        roughness: 0.08,
        envMapIntensity: 2.2,
      })
    }
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#f0f4f8'),
      emissive: new THREE.Color('#020202'),
      metalness: 1.0,
      roughness: 0.03,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      ior: 2.6,
      reflectivity: 1.0,
      iridescence: 0.35,
      iridescenceIOR: 1.45,
      envMapIntensity: 3.8,
    })
  }, [isMobile])

  // Deep clone scene and apply mirror chrome finish
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true)
    clone.traverse((child) => {
      if (child.isMesh) {
        child.material = chromeMaterial
        child.castShadow = !isMobile // disable shadows on mobile to maximize FPS
        child.receiveShadow = !isMobile
        if (child.geometry) {
          child.geometry.computeVertexNormals()
        }
      }
    })
    return clone
  }, [scene, chromeMaterial, isMobile])

  // Notify parent on mount/load
  useEffect(() => {
    if (onModelLoaded) {
      onModelLoaded()
    }
  }, [onModelLoaded])

  // Pointer tracking across the entire viewport (decoupled on mobile touch to preserve native scroll)
  useEffect(() => {
    const handlePointerMove = (e) => {
      // Ignore touch moves to avoid scroll thread competition on mobile
      if (e.pointerType === 'touch') return
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  // Section-by-section target poses for sculpture and camera
  // Specifically scaled and pushed into z-depth on mobile so text remains 100% readable
  const sectionPoses = useMemo(() => [
    {
      id: 'hero',
      // Sculpture Pose
      posX: isMobile ? 0 : 0.85,
      posY: isMobile ? -0.22 : -0.05,
      posZ: isMobile ? -0.6 : 0,
      rotX: 0.1,
      rotY: 0,
      rotZ: 0,
      scale: isMobile ? 0.70 : 1.35,
      // Camera
      camX: 0,
      camY: 0,
      camZ: isMobile ? 5.2 : 5.0,
      lookY: 0,
    },
    {
      id: 'about',
      posX: isMobile ? 0.12 : -0.95,
      posY: isMobile ? -0.14 : 0.08,
      posZ: isMobile ? -0.8 : 0.3,
      rotX: isMobile ? 0.25 : 0.35,
      rotY: 1.8,
      rotZ: isMobile ? -0.1 : -0.2,
      scale: isMobile ? 0.62 : 1.2,
      camX: isMobile ? 0 : 0.2,
      camY: isMobile ? -0.05 : -0.1,
      camZ: isMobile ? 5.0 : 4.7,
      lookY: 0,
    },
    {
      id: 'work',
      posX: isMobile ? -0.12 : 1.15,
      posY: isMobile ? -0.16 : -0.25,
      posZ: isMobile ? -0.9 : -0.5,
      rotX: -0.2,
      rotY: 3.6,
      rotZ: isMobile ? 0.1 : 0.15,
      scale: isMobile ? 0.60 : 1.1,
      camX: isMobile ? 0 : -0.3,
      camY: isMobile ? -0.1 : -0.3,
      camZ: 5.2,
      lookY: isMobile ? 0 : -0.1,
    },
    {
      id: 'capabilities',
      posX: isMobile ? 0.12 : -1.1,
      posY: isMobile ? -0.12 : 0.2,
      posZ: isMobile ? -0.8 : 0.2,
      rotX: isMobile ? 0.3 : 0.4,
      rotY: 5.4,
      rotZ: isMobile ? 0.15 : 0.3,
      scale: isMobile ? 0.62 : 1.25,
      camX: isMobile ? 0 : 0.3,
      camY: isMobile ? 0 : 0.1,
      camZ: isMobile ? 5.0 : 4.8,
      lookY: 0,
    },
    {
      id: 'toolkit',
      posX: isMobile ? -0.12 : 1.0,
      posY: isMobile ? -0.14 : -0.15,
      posZ: isMobile ? -0.85 : -0.3,
      rotX: 0.15,
      rotY: 7.2,
      rotZ: isMobile ? -0.1 : -0.25,
      scale: isMobile ? 0.60 : 1.2,
      camX: isMobile ? 0 : -0.2,
      camY: isMobile ? -0.05 : -0.2,
      camZ: 4.9,
      lookY: 0,
    },
    {
      id: 'experiments',
      posX: isMobile ? 0.1 : -0.85,
      posY: isMobile ? -0.12 : 0.15,
      posZ: isMobile ? -0.8 : 0.4,
      rotX: isMobile ? -0.25 : -0.35,
      rotY: 8.9,
      rotZ: isMobile ? 0.2 : 0.4,
      scale: isMobile ? 0.62 : 1.3,
      camX: isMobile ? 0 : 0.3,
      camY: isMobile ? 0 : 0.2,
      camZ: isMobile ? 5.0 : 4.6,
      lookY: 0.05,
    },
    {
      id: 'contact',
      posX: isMobile ? 0 : 0.8,
      posY: isMobile ? -0.18 : 0,
      posZ: isMobile ? -0.6 : 0.5,
      rotX: 0.2,
      rotY: 10.6,
      rotZ: 0.1,
      scale: isMobile ? 0.70 : 1.4,
      camX: 0,
      camY: isMobile ? -0.05 : -0.1,
      camZ: 4.7,
      lookY: 0,
    },
  ], [isMobile])

  // Synchronize GSAP ScrollTrigger with section positions
  useEffect(() => {
    // Crucial for mobile: prevent address-bar height toggling from triggering constant recalculations
    ScrollTrigger.config({ ignoreMobileResize: true })

    const calculateMilestones = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll <= 0) return

      const computed = sectionPoses.map((sec, idx) => {
        if (idx === 0) return 0
        if (idx === sectionPoses.length - 1) return 1.0
        const el = document.getElementById(sec.id)
        if (!el) return idx / (sectionPoses.length - 1)
        const top = el.getBoundingClientRect().top + window.scrollY
        const anchor = top - window.innerHeight * (isMobile ? 0.15 : 0.25)
        return Math.min(Math.max(anchor / totalScroll, 0), 1)
      })

      // Ensure monotonically increasing milestones
      for (let i = 1; i < computed.length; i++) {
        if (computed[i] <= computed[i - 1]) {
          computed[i] = computed[i - 1] + 0.01
        }
      }
      computed[computed.length - 1] = 1.0
      sectionMilestones.current = computed
    }

    const timer = setTimeout(calculateMilestones, 150)

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        // Faster scrub on mobile for immediate direct finger responsiveness
        scrub: isMobile ? 0.8 : 1.2,
        onUpdate: (self) => {
          scrollProgress.current = self.progress
        },
      })

      ScrollTrigger.addEventListener('refresh', calculateMilestones)
    })

    window.addEventListener('resize', calculateMilestones, { passive: true })
    window.addEventListener('orientationchange', calculateMilestones, { passive: true })

    return () => {
      clearTimeout(timer)
      ctx.revert()
      ScrollTrigger.removeEventListener('refresh', calculateMilestones)
      window.removeEventListener('resize', calculateMilestones)
      window.removeEventListener('orientationchange', calculateMilestones)
    }
  }, [sectionPoses, isMobile])

  // Smooth frame loop: continuous scroll-driven interpolation + mouse parallax + dampening
  useFrame((state, delta) => {
    if (!groupRef.current) return

    // 1. Mouse pointer lerping (skip/mute on touch devices)
    if (!isTouch) {
      const mouseLerp = Math.min(delta * 4.0, 0.1)
      smoothMouse.current.x += (mouse.current.x - smoothMouse.current.x) * mouseLerp
      smoothMouse.current.y += (mouse.current.y - smoothMouse.current.y) * mouseLerp
    }

    // 2. Determine current segment between sections
    const p = Math.min(Math.max(scrollProgress.current, 0), 1)
    const milestones = sectionMilestones.current
    let segIndex = 0

    for (let i = 0; i < milestones.length - 1; i++) {
      if (p >= milestones[i] && p <= milestones[i + 1]) {
        segIndex = i
        break
      }
      if (p > milestones[milestones.length - 1]) {
        segIndex = milestones.length - 2
      }
    }

    const p0 = milestones[segIndex]
    const p1 = milestones[segIndex + 1] || 1
    const span = Math.max(p1 - p0, 0.0001)
    const rawRatio = Math.min(Math.max((p - p0) / span, 0), 1)
    const t = rawRatio * rawRatio * (3 - 2 * rawRatio)

    const poseA = sectionPoses[segIndex]
    const poseB = sectionPoses[segIndex + 1] || poseA

    // Interpolated targets from scroll
    const scrollPosX = THREE.MathUtils.lerp(poseA.posX, poseB.posX, t)
    const scrollPosY = THREE.MathUtils.lerp(poseA.posY, poseB.posY, t)
    const scrollPosZ = THREE.MathUtils.lerp(poseA.posZ, poseB.posZ, t)

    const scrollRotX = THREE.MathUtils.lerp(poseA.rotX, poseB.rotX, t)
    const scrollRotY = THREE.MathUtils.lerp(poseA.rotY, poseB.rotY, t)
    const scrollRotZ = THREE.MathUtils.lerp(poseA.rotZ, poseB.rotZ, t)

    const scrollScale = THREE.MathUtils.lerp(poseA.scale, poseB.scale, t)

    const scrollCamX = THREE.MathUtils.lerp(poseA.camX, poseB.camX, t)
    const scrollCamY = THREE.MathUtils.lerp(poseA.camY, poseB.camY, t)
    const scrollCamZ = THREE.MathUtils.lerp(poseA.camZ, poseB.camZ, t)
    const scrollLookY = THREE.MathUtils.lerp(poseA.lookY, poseB.lookY, t)

    // 3. Subtle organic idle motion
    const idleFloatY = Math.sin(state.clock.elapsedTime * 0.7) * (isMobile ? 0.025 : 0.04)
    const idleRotX = Math.cos(state.clock.elapsedTime * 0.5) * 0.02
    const idleRotY = state.clock.elapsedTime * (isMobile ? 0.06 : 0.08)

    // 4. Subtle mouse parallax offsets (muted completely on touch devices)
    const pStrength = isTouch ? 0 : (isMobile ? 0.1 : 0.32)
    const pOffsetX = smoothMouse.current.x * pStrength
    const pOffsetY = smoothMouse.current.y * (pStrength * 0.75)
    const pRotX = -smoothMouse.current.y * (isTouch ? 0 : 0.08)
    const pRotY = smoothMouse.current.x * (isTouch ? 0 : 0.12)

    // 5. Final targets
    const targetX = scrollPosX + pOffsetX
    const targetY = scrollPosY + pOffsetY + idleFloatY
    const targetZ = scrollPosZ

    const targetRotX = scrollRotX + idleRotX + pRotX
    const targetRotY = scrollRotY + idleRotY + pRotY
    const targetRotZ = scrollRotZ

    // 6. Smooth dampening (frame-rate independent)
    const dampFactor = isMobile ? 6.0 : 5.0
    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, dampFactor, delta)
    groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY, dampFactor, delta)
    groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetZ, dampFactor, delta)

    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetRotX, dampFactor, delta)
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetRotY, dampFactor, delta)
    groupRef.current.rotation.z = THREE.MathUtils.damp(groupRef.current.rotation.z, targetRotZ, dampFactor, delta)

    const curScale = groupRef.current.scale.x
    const newScale = THREE.MathUtils.damp(curScale, scrollScale, dampFactor, delta)
    groupRef.current.scale.setScalar(newScale)

    // 7. Dynamic Camera interpolation
    const targetCamPosX = scrollCamX + pOffsetX * 0.2
    const targetCamPosY = scrollCamY + pOffsetY * 0.2
    const targetCamPosZ = scrollCamZ

    state.camera.position.x = THREE.MathUtils.damp(state.camera.position.x, targetCamPosX, dampFactor, delta)
    state.camera.position.y = THREE.MathUtils.damp(state.camera.position.y, targetCamPosY, dampFactor, delta)
    state.camera.position.z = THREE.MathUtils.damp(state.camera.position.z, targetCamPosZ, dampFactor, delta)

    const currentLookY = THREE.MathUtils.damp(cameraTargetLookY.current, scrollLookY, dampFactor, delta)
    cameraTargetLookY.current = currentLookY
    state.camera.lookAt(0, currentLookY, 0)
  })

  return (
    <group ref={groupRef} position={isMobile ? [0, -0.22, -0.6] : [0.85, -0.05, 0]}>
      <Center>
        <primitive object={clonedScene} />
      </Center>
    </group>
  )
}

/* ============================================================
   Loading Placeholder Lightweight Wireframe Geometry
   ============================================================ */
function InCanvasFallback({ isMobile }) {
  const meshRef = useRef()
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5
      meshRef.current.rotation.x += delta * 0.25
    }
  })

  return (
    <group position={isMobile ? [0, -0.22, -0.6] : [0.85, -0.05, 0]}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[isMobile ? 0.8 : 1.2, 1]} />
        <meshStandardMaterial
          wireframe
          color="#C7FF48"
          opacity={0.3}
          transparent
        />
      </mesh>
    </group>
  )
}

/* ============================================================
   Exported Fixed Full-Screen Background Scene3D
   ============================================================ */
export default function Scene3D({ onLoaded }) {
  const { isMobile, isTouch, dpr } = useDeviceProfile()
  const [reducedMotion, setReducedMotion] = useState(() => (
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  ))

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionChange = (e) => setReducedMotion(e.matches)
    mq.addEventListener('change', handleMotionChange)
    return () => mq.removeEventListener('change', handleMotionChange)
  }, [])

  if (reducedMotion) {
    return (
      <div
        className="fixed inset-0 w-full h-[100dvh] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, #1c2024 0%, #08090A 75%)',
        }}
      />
    )
  }

  return (
    <div
      className="fixed inset-0 w-full h-[100dvh] pointer-events-none z-0 overflow-hidden"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        maxWidth: '100vw',
        maxHeight: '100dvh',
        zIndex: 0,
      }}
      aria-hidden="true"
    >
      <Canvas
        dpr={dpr}
        camera={{ position: [0, 0, isMobile ? 5.2 : 5.0], fov: 45, near: 0.1, far: 80 }}
        gl={{
          antialias: !isMobile, // Disable MSAA on mobile for huge fill-rate boost
          powerPreference: 'high-performance',
          alpha: false,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: isMobile ? 1.15 : 1.25,
        }}
      >
        <color attach="background" args={['#08090A']} />

        {/* Studio Lighting Rig (Streamlined for Mobile) */}
        <ambientLight intensity={isMobile ? 0.6 : 0.45} />

        {/* Primary Key Light */}
        <directionalLight
          position={[7, 9, 6]}
          intensity={isMobile ? 2.4 : 2.8}
          color="#ffffff"
        />

        {/* High-Voltage Acid Lime Rim Light */}
        <directionalLight
          position={[-6, -3, 4]}
          intensity={isMobile ? 1.3 : 1.6}
          color="#C7FF48"
        />

        {/* Secondary Specular Lights (Omitted on mobile to save GPU cycles) */}
        {!isMobile && (
          <>
            <pointLight position={[3, 4, 3]} intensity={1.8} color="#e0f0ff" />
            <pointLight position={[-4, -5, -3]} intensity={0.8} color="#355070" />
          </>
        )}

        {/* Studio Environment HDR */}
        <Environment preset="city" environmentIntensity={isMobile ? 1.0 : 1.2} />

        <Suspense fallback={<InCanvasFallback isMobile={isMobile} />}>
          <SculptureExperience
            isMobile={isMobile}
            isTouch={isTouch}
            onModelLoaded={onLoaded}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
