// "use client";

// import { useRef, useMemo } from "react";
// import { useFrame } from "@react-three/fiber";
// import * as THREE from "three";
// import { useMouseTilt } from "@/hooks/useMouseTilt";

// export function CosmeticBottle({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
//   const groupRef = useRef<THREE.Group>(null);
//   const mouse = useMouseTilt();

//   // Create the profile for the bottle body (LatheGeometry)
//   const bottlePoints = useMemo(() => {
//     const points = [];
//     // Base
//     points.push(new THREE.Vector2(0, 0));
//     points.push(new THREE.Vector2(0.8, 0));
//     points.push(new THREE.Vector2(0.9, 0.2));

//     // Main body
//     for (let i = 0; i <= 10; i++) {
//       const y = 0.2 + (i / 10) * 2;
//       points.push(new THREE.Vector2(0.9, y));
//     }

//     // Shoulder
//     points.push(new THREE.Vector2(0.8, 2.3));
//     points.push(new THREE.Vector2(0.4, 2.5));

//     // Neck
//     points.push(new THREE.Vector2(0.3, 2.5));
//     points.push(new THREE.Vector2(0.3, 2.8));
//     points.push(new THREE.Vector2(0.35, 2.85));
//     points.push(new THREE.Vector2(0.35, 2.9));
//     points.push(new THREE.Vector2(0, 2.9));

//     return points;
//   }, []);

//   useFrame((state, delta) => {
//     if (!groupRef.current) return;

//     // 1. Floating animation
//     const time = state.clock.getElapsedTime();
//     const floatY = Math.sin(time * 1.5) * 0.05;

//     // 2. Mouse tilt
//     const targetRotX = mouse.current.y * 0.2;
//     const targetRotZ = mouse.current.x * -0.2;

//     // 3. Scroll rotation
//     const scrollRotY = scrollProgress.current * Math.PI * 4;

//     // Apply transformations with smooth interpolation
//     groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, floatY, 0.1);
//     groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.1);
//     groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, targetRotZ, 0.1);
//     groupRef.current.rotation.y = scrollRotY + time * 0.1; // Base slow rotation + scroll
//   });

//   return (
//     <group ref={groupRef} position={[0, -1.5, 0]}>
//       {/* Bottle Body */}
//       <mesh castShadow receiveShadow>
//         <latheGeometry args={[bottlePoints, 64]} />
//         <meshPhysicalMaterial
//           color="#E5989B" // Blush pink tint
//           transmission={0.95} // Glass-like transparency
//           opacity={1}
//           metalness={0.1}
//           roughness={0.05}
//           ior={1.52}
//           thickness={0.5}
//           attenuationColor="#E5989B"
//           attenuationDistance={1}
//           clearcoat={1}
//           clearcoatRoughness={0.1}
//         />
//       </mesh>

//       {/* Inner Liquid Placeholder (Optional, slightly darker) */}
//       <mesh position={[0, 0.1, 0]} scale={[0.95, 0.95, 0.95]}>
//          <latheGeometry args={[bottlePoints.slice(0, 14), 32]} />
//          <meshStandardMaterial 
//             color="#FFB4A2"
//             transparent 
//             opacity={0.8} 
//             roughness={0.4} 
//          />
//       </mesh>

//       {/* Cap */}
//       <mesh position={[0, 3.2, 0]} castShadow>
//         <cylinderGeometry args={[0.4, 0.4, 0.6, 32]} />
//         <meshStandardMaterial
//           color="#B5828C" // Rose Gold
//           metalness={0.8}
//           roughness={0.2}
//           envMapIntensity={2}
//         />
//       </mesh>

//       {/* Label */}
//       <mesh position={[0, 1.2, 0.91]}>
//         <planeGeometry args={[1, 1.2]} />
//         <meshStandardMaterial
//           color="#ffffff"
//           roughness={0.8}
//           metalness={0.1}
//         />
//       </mesh>
//     </group>
//   );
// }

// ===============================================================================================================

"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMouseTilt } from "@/hooks/useMouseTilt";

type Props = {
  scrollProgress: React.MutableRefObject<number>;
};

export function CosmeticBottle({ scrollProgress }: Props) {
  const groupRef = useRef<THREE.Group>(null);
  const mouse = useMouseTilt();

  // Bottle shape
  const bottlePoints = useMemo(() => {
    const points: THREE.Vector2[] = [];

    // Base
    points.push(new THREE.Vector2(0, 0));
    points.push(new THREE.Vector2(0.8, 0));
    points.push(new THREE.Vector2(0.9, 0.2));

    // Main body
    for (let i = 0; i <= 10; i++) {
      const y = 0.2 + (i / 10) * 2;
      points.push(new THREE.Vector2(0.9, y));
    }

    // Shoulder
    points.push(new THREE.Vector2(0.8, 2.3));
    points.push(new THREE.Vector2(0.4, 2.5));

    // Neck
    points.push(new THREE.Vector2(0.3, 2.5));
    points.push(new THREE.Vector2(0.3, 2.8));
    points.push(new THREE.Vector2(0.35, 2.85));
    points.push(new THREE.Vector2(0.35, 2.9));
    points.push(new THREE.Vector2(0, 2.9));

    return points;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;

    const time = state.clock.getElapsedTime();
    const scroll = scrollProgress.current;

    // =========================
    // FLOATING EFFECT
    // =========================
    const floatY = Math.sin(time * 1.5) * 0.08;

    // =========================
    // MOUSE TILT
    // =========================
    const targetRotX = mouse.current.y * 0.25;
    const targetRotZ = mouse.current.x * -0.25;

    // =========================
    // SCROLL ROTATION
    // =========================
    const scrollRotY = scroll * Math.PI * 4;

    // =========================
    // CINEMATIC X MOVEMENT
    // =========================
   // =========================
// SMOOTH CENTER MOTION
// center -> right center -> left center
// =========================

let targetX = 0;

// Stay center initially
if (scroll < 0.05) {
  targetX = 0;
  // console.log(scroll)
}

// Move slightly right
// 95CosmeticBottle.tsx:197 0.17485574401119078
else if (scroll > .05 && scroll <.25) {
  const progress = (scroll - 0.05) / (0.65 - 0.05);
  // alert(scroll +" "+ progress)

  targetX = THREE.MathUtils.lerp(
   0,
   2,
    1
  );
}

// Move slightly left
else {
  const progress = (scroll - 0.6) / (1.0 - 0.6);
  // alert(scroll +" "+ progress)
  console.log(scroll + " " + progress)

  targetX = THREE.MathUtils.lerp(
    1.2,
    -2,
    1
  );
}
    // =========================
    // DEPTH MOVEMENT
    // =========================
    const targetZ = Math.sin(scroll * Math.PI) * 1;

    // =========================
    // SCALE EFFECT
    // =========================
    const targetScale = 1 + scroll * 0.25;

    // =========================
    // SMOOTH POSITION
    // =========================
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      targetX,
      0.08
    );

    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      -1.5 + floatY,
      0.08
    );

    groupRef.current.position.z = THREE.MathUtils.lerp(
      groupRef.current.position.z,
      targetZ,
      0.08
    );

    // =========================
    // SMOOTH ROTATION
    // =========================
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.08
    );

    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      groupRef.current.rotation.z,
      targetRotZ,
      0.08
    );

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      scrollRotY + time * 0.15,
      0.08
    );

    // =========================
    // SMOOTH SCALE
    // =========================
    groupRef.current.scale.x = THREE.MathUtils.lerp(
      groupRef.current.scale.x,
      targetScale,
      0.08
    );

    groupRef.current.scale.y = THREE.MathUtils.lerp(
      groupRef.current.scale.y,
      targetScale,
      0.08
    );

    groupRef.current.scale.z = THREE.MathUtils.lerp(
      groupRef.current.scale.z,
      targetScale,
      0.08
    );
  });

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {/* =========================
          BOTTLE BODY
      ========================== */}
      <mesh castShadow receiveShadow>
        <latheGeometry args={[bottlePoints, 64]} />

        <meshPhysicalMaterial
          color="#b76e79"
          transmission={0.45}
          opacity={1}
          metalness={0.15}
          roughness={0.28}
          ior={1.38}
          thickness={0.7}
          attenuationColor="#8d5a63"
          attenuationDistance={1.2}
          clearcoat={0.35}
          clearcoatRoughness={0.4}
          reflectivity={0.08}
        />
      </mesh>

      {/* =========================
          INNER LIQUID
      ========================== */}
      <mesh position={[0, 0.1, 0]} scale={[0.92, 0.92, 0.92]}>
        <latheGeometry args={[bottlePoints.slice(0, 14), 32]} />

        <meshStandardMaterial
          color="#9d4f5c"
          transparent
          opacity={0.55}
          roughness={0.45}
          metalness={0.04}
        />
      </mesh>

      {/* =========================
          CAP
      ========================== */}
      <mesh position={[0, 3.2, 0]} castShadow>
        <cylinderGeometry args={[0.4, 0.4, 0.6, 64]} />

        <meshStandardMaterial
          color="#6d3b44"
          metalness={0.85}
          roughness={0.3}
        />
      </mesh>

      {/* =========================
          LABEL
      ========================== */}
      {/* <mesh position={[0, 1.2, 0.91]}>
        <planeGeometry args={[1, 1.2]} />

        <meshStandardMaterial
          color="#322c2cff"
          roughness={0.8}
          metalness={0.05}
        />
      </mesh> */}

      {/* =========================
          GLOW LIGHT
      ========================== */}
      {/* <pointLight
        position={[0, 2, 2]}
        intensity={2}
        color="#171214ff"
      /> */}
    </group>
  );
}