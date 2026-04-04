"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Environment, Float, Preload } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

function Blob() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { resolvedTheme } = useTheme();

  // Color logic: gold/electric blue based on theme, falling back to Gold if dark
  const color = resolvedTheme === "light" ? "#1e3a8a" : "#d4af37";

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle rotation over time
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      
      // Interactive scale based on mouse position
      const targetScale = 1 + (state.pointer.x * 0.1);
      meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1);
      meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale, 0.1);
      meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, targetScale, 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          envMapIntensity={1.5}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          metalness={0.7}
          roughness={0.2}
          distort={0.4}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function BlobScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 45 }}
      dpr={[1, 2]} // Support high-DPI displays
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#ffffff" />
      
      <Environment preset="city" />
      <Blob />
      <Preload all />
    </Canvas>
  );
}
