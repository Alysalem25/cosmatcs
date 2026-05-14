"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Fog() {
  const fogRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (fogRef.current) {
      fogRef.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      fogRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  return (
    <mesh ref={fogRef} position={[0, 0, -3]}>
      <sphereGeometry args={[8, 32, 32]} />
      <meshBasicMaterial
        color="#faf0f3"
        transparent
        opacity={0.15}
        side={THREE.BackSide}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}