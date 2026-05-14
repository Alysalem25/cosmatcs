// "use client";

// import { Environment } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";
// import * as THREE from "three";

// export function Lighting({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
//   const rimLightRef = useRef<THREE.PointLight>(null);

//   useFrame(() => {
//     if (rimLightRef.current) {
//       // Move rim light around the bottle based on scroll
//       rimLightRef.current.position.x = Math.sin(scrollProgress.current * Math.PI * .2) * 4;
//       rimLightRef.current.position.z = Math.cos(scrollProgress.current * Math.PI * .2) * -4;
//     }
//   });

//   return (
//     <>
//       <ambientLight intensity={0.4} />

//       {/* Key Light - Warm Champagne */}
//       <directionalLight
//         position={[5, 5, 5]}
//         intensity={2}
//         color="#151414ff"
//         castShadow
//         shadow-mapSize={[1024, 1024]}
//       />

//       {/* Fill Light - Cool Pearl */}
//       <directionalLight
//         position={[-5, 3, 2]}
//         intensity={1}
//         color="#231313ff"
//       />

//       {/* Dynamic Rim Light - Pink */}
//       <pointLight
//         ref={rimLightRef}
//         position={[0, 2, -4]}
//         intensity={3}
//         color="#FF91A4"
//         distance={10}
//       />

//       <Environment preset="studio" />
//     </>
//   );
// }



// "use client";

// import { Environment } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";
// import { useRef } from "react";
// import * as THREE from "three";

// export function Lighting({
//   scrollProgress,
// }: {
//   scrollProgress: React.MutableRefObject<number>;
// }) {
//   const rimLightRef = useRef<THREE.PointLight>(null);

//   useFrame(() => {
//     if (rimLightRef.current) {
//       rimLightRef.current.position.x =
//         Math.sin(scrollProgress.current * Math.PI * 0.5) * 4;

//       rimLightRef.current.position.z =
//         Math.cos(scrollProgress.current * Math.PI * 0.5) * 4;
//     }
//   });

//   return (
//     <>
//       {/* Soft Ambient */}
//       <ambientLight intensity={0.7} color="#ffeef2" />
//       {/* Main Luxury Light */}
//       <directionalLight
//         position={[5, 5, 5]}
//         intensity={1.2}
//         color="#ffd9e0"
//         castShadow
//       />

//       {/* Soft Fill */}
//       <directionalLight
//         position={[-5, 3, 2]}
//         intensity={1.2}
//         color="#fff0f3"
//       />

//       {/* Pink Rim Light */}
//       <pointLight
//         ref={rimLightRef}
//         position={[0, 2, -4]}
//         intensity={2}
//         color="#ffb3c6"
//         distance={12}
//       />

//       {/* Soft White Glow */}
//       <pointLight
//         position={[0, 4, 3]}
//         intensity={1}
//         color="#ffffff"
//         distance={10}
//       />

//       <Environment preset="sunset" />
//     </>
//   );
// }



// ===================================================
"use client";

import { Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function Lighting({
  scrollProgress,
}: {
  scrollProgress: React.MutableRefObject<number>;
}) {
  const rimLightRef = useRef<THREE.PointLight>(null);
  const fillLightRef = useRef<THREE.DirectionalLight>(null);

  useFrame(() => {
    const scroll = Math.min(Math.max(scrollProgress.current, 0), 1);
    
    if (rimLightRef.current) {
      // Orbit around the bottle as it opens
      rimLightRef.current.position.x = Math.sin(scroll * Math.PI * 0.5) * 4;
      rimLightRef.current.position.z = Math.cos(scroll * Math.PI * 0.5) * 4;
      // Intensify as box opens
      rimLightRef.current.intensity = THREE.MathUtils.lerp(1, 3, scroll);
    }

    if (fillLightRef.current) {
      // Warm up the fill as scroll progresses
      const warmth = THREE.MathUtils.lerp(1, 1.5, scroll);
      fillLightRef.current.intensity = warmth;
    }
  });

  return (
    <>
      {/* Soft pink ambient */}
      <ambientLight intensity={0.6} color="#ffeef2" />

      {/* Main warm key light */}
      <directionalLight
        position={[5, 5, 5]}
        intensity={1.5}
        color="#ffd9e0"
        castShadow
        shadow-mapSize={[1024, 1024]}
        shadow-bias={-0.001}
      />

      {/* Soft fill light */}
      <directionalLight
        ref={fillLightRef}
        position={[-5, 3, 2]}
        intensity={1.2}
        color="#fff0f3"
      />

      {/* Dynamic pink rim light */}
      <pointLight
        ref={rimLightRef}
        position={[0, 2, -4]}
        intensity={2}
        color="#ffb3c6"
        distance={12}
      />

      {/* Top highlight */}
      <pointLight
        position={[0, 4, 3]}
        intensity={1}
        color="#ffffff"
        distance={10}
      />

      {/* Bottom bounce light */}
      <pointLight
        position={[0, -2, 2]}
        intensity={0.5}
        color="#ffc8d2"
        distance={8}
      />

      <Environment preset="studio" />
    </>
  );
}