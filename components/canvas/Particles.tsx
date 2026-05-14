// "use client";

// import { useMemo, useRef } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";

// export function Particles({ count = 300 }) {
//   const pointsRef = useRef<THREE.Points>(null);

//   const particlesPosition = useMemo(() => {
//     const positions = new Float32Array(count * 3);
//     for (let i = 0; i < count; i++) {
//       // Scatter randomly within a wide box
//       positions[i * 3] = (Math.random() - 0.5) * 15;
//       positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
//       positions[i * 3 + 2] = (Math.random() - 0.5) * 10 - 5;
//     }
//     return positions;
//   }, [count]);

//   useFrame((state) => {
//     if (pointsRef.current) {
//       pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
//       pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
//     }
//   });

//   return (
//     <points ref={pointsRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           args={[particlesPosition, 3]}
//           count={particlesPosition.length / 3}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         size={0.07}
//         color="#ffc8d2"
//         sizeAttenuation
//         transparent
//         opacity={0.35}
//         blending={THREE.AdditiveBlending}
//         depthWrite={false}
//       />
//     </points>
//   );
// }


// ======================================================
"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Particles({ count = 200 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 3;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
          count={particlesPosition.length / 3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffb3c6"
        sizeAttenuation
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}