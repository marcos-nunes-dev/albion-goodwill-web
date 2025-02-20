'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js'

export function Discord3DBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    let mouseX = 0
    let mouseY = 0
    let targetRotationX = 0
    let targetRotationY = 0
    let scrollY = 0
    let windowHalfX = window.innerWidth / 2
    let windowHalfY = window.innerHeight / 2

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0xffffff)

    // Create all layers upfront
    const frontLayer = new THREE.Group()
    const middleLayer = new THREE.Group()
    const backLayer = new THREE.Group()
    const farBackLayer = new THREE.Group() // Create far back layer here
    scene.add(frontLayer, middleLayer, backLayer, farBackLayer)

    // Camera
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 30

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      canvas: document.createElement('canvas')
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0xffffff, 1)
    containerRef.current.appendChild(renderer.domElement)

    // Mouse move handler
    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) / 100
      mouseY = (event.clientY - windowHalfY) / 100
    }

    // Scroll handler
    const onScroll = () => {
      scrollY = window.scrollY
    }

    // Touch move handler
    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length === 1) {
        event.preventDefault()
        mouseX = (event.touches[0].pageX - windowHalfX) / 100
        mouseY = (event.touches[0].pageY - windowHalfY) / 100
      }
    }

    // Animation function
    const animate = () => {
      requestAnimationFrame(animate)

      // Smooth rotation transition
      targetRotationY += (mouseX * 0.02 - targetRotationY) * 0.02
      targetRotationX += (mouseY * 0.02 - targetRotationX) * 0.02

      // Apply different rotation speeds to each layer
      frontLayer.rotation.y = targetRotationY * 1.4
      frontLayer.rotation.x = targetRotationX * 1.4
      middleLayer.rotation.y = targetRotationY * 1.0
      middleLayer.rotation.x = targetRotationX * 1.0
      backLayer.rotation.y = targetRotationY * 0.6
      backLayer.rotation.x = targetRotationX * 0.6
      farBackLayer.rotation.y = targetRotationY * 0.3
      farBackLayer.rotation.x = targetRotationX * 0.3

      // Apply scroll-based movement with varying speeds
      const scrollFactor = scrollY * 0.001
      frontLayer.position.y = Math.sin(Date.now() * 0.001) * 0.8 - scrollFactor * 2.5
      middleLayer.position.y = Math.sin(Date.now() * 0.0008) * 0.6 - scrollFactor * 2.0
      backLayer.position.y = Math.sin(Date.now() * 0.0006) * 0.4 - scrollFactor * 1.5
      farBackLayer.position.y = Math.sin(Date.now() * 0.0004) * 0.2 - scrollFactor * 1.0

      renderer.render(scene, camera)
    }

    // Start animation
    animate()

    // Load Discord Logo
    const fbxLoader = new FBXLoader()
    fbxLoader.load('/discord.fbx', (fbx: any) => {
      fbx.scale.set(0.01, 0.01, 0.01)
      
      let discordGeometry: THREE.BufferGeometry | null = null
      fbx.traverse((child: any) => {
        if (child instanceof THREE.Mesh) {
          discordGeometry = child.geometry
        }
      })

      if (!discordGeometry) return

      // Create three different materials for each layer
      const frontMaterial = new THREE.MeshPhongMaterial({
        color: 0x5865F2,
        transparent: true,
        opacity: 0.2,
        shininess: 30,
        side: THREE.DoubleSide
      })

      const middleMaterial = new THREE.MeshPhongMaterial({
        color: 0x5865F2,
        transparent: true,
        opacity: 0.15,
        shininess: 30,
        side: THREE.DoubleSide
      })

      const backMaterial = new THREE.MeshPhongMaterial({
        color: 0x5865F2,
        transparent: true,
        opacity: 0.1,
        shininess: 30,
        side: THREE.DoubleSide
      })

      // Create instances for each layer
      const createInstancedMesh = (material: THREE.Material, count: number, layer: THREE.Group, depth: number) => {
        const instancedMesh = new THREE.InstancedMesh(
          discordGeometry!,
          material,
          count
        )

        const matrix = new THREE.Matrix4()
        const position = new THREE.Vector3()
        const rotation = new THREE.Euler()
        const quaternion = new THREE.Quaternion()
        const scale = new THREE.Vector3()

        // Create a more organic distribution
        for (let i = 0; i < count; i++) {
          // Use golden ratio for better distribution
          const theta = i * Math.PI * (3 - Math.sqrt(5)) // golden angle
          const y = 1 - (i / (count - 1)) * 2 // y goes from 1 to -1
          const radius = Math.sqrt(1 - y * y) // radius at y
          
          position.set(
            radius * Math.cos(theta) * 25, // Spread horizontally
            y * 25,                        // Spread vertically
            depth + (Math.random() * 15 - 7.5) // Add some randomness to depth
          )
          
          // More varied rotation
          rotation.set(
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2,
            Math.random() * Math.PI * 2
          )
          quaternion.setFromEuler(rotation)

          // More varied scaling
          const baseScale = Math.random() * 0.5 + 0.3
          scale.set(baseScale, baseScale, baseScale)
          
          matrix.compose(position, quaternion, scale)
          instancedMesh.setMatrixAt(i, matrix)
        }
        instancedMesh.instanceMatrix.needsUpdate = true
        layer.add(instancedMesh)
      }

      // Create instances for all layers
      createInstancedMesh(frontMaterial, 25, frontLayer, -15)
      createInstancedMesh(middleMaterial, 35, middleLayer, 0)
      createInstancedMesh(backMaterial, 45, backLayer, 15)
      
      const tinyMaterial = new THREE.MeshPhongMaterial({
        color: 0x5865F2,
        transparent: true,
        opacity: 0.05,
        shininess: 30,
        side: THREE.DoubleSide
      })

      createInstancedMesh(tinyMaterial, 60, farBackLayer, 30)

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7)
      const pointLight = new THREE.PointLight(0xffffff, 1.2)
      pointLight.position.set(5, 5, 5)
      
      scene.add(ambientLight, pointLight)
    })

    // Event listeners
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('scroll', onScroll)

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth
      const height = window.innerHeight
      
      windowHalfX = width / 2
      windowHalfY = height / 2
      
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', handleResize)
      if (containerRef.current?.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose()
          object.material.dispose()
        }
      })
    }
  }, [])

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10"
      style={{ 
        background: 'radial-gradient(circle at center, rgba(255,255,255,1) 0%, rgba(240,240,240,1) 100%)',
        pointerEvents: 'none',
        touchAction: 'none'
      }}
    />
  )
} 