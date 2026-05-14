// "use client";

// import { Canvas, useFrame } from "@react-three/fiber";
// import { Suspense, useRef } from "react";
// import { Preload } from "@react-three/drei";
// import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
// import * as THREE from "three";

// import { CosmeticBottle } from "./CosmeticBottle";
// import { Lighting } from "./Lighting";
// import { Particles } from "./Particles";

// // Camera controller to zoom/pan based on scroll
// function CameraController({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
//   useFrame((state) => {
//     // Zoom in as we scroll down
//     const targetZ = THREE.MathUtils.lerp(8, 4, scrollProgress.current);
//     // Pan slightly to the right for the first section, then center, then left
//     const targetX = Math.sin(scrollProgress.current * Math.PI) * 1.5;

//     state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);
//     state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
//     state.camera.lookAt(0, 0, 0);
//   });
//   return null;
// }

// export default function Scene({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
//   return (
//     <Canvas
//       camera={{ position: [0, 0, 8], fov: 45 }}
//       gl={{ antialias: false, toneMapping: THREE.ACESFilmicToneMapping }}
//       dpr={[1, 1.5]}
//       className="w-full h-full"
//     >
//       <color attach="background" args={["#808b00ff"]} />

//       <Suspense fallback={null}>
//         <CameraController scrollProgress={scrollProgress} />
//         <Lighting scrollProgress={scrollProgress} />
//         <CosmeticBottle scrollProgress={scrollProgress} />
//         <Particles count={300} />

//         {/* Post-processing */}
//         <EffectComposer>
//           <Bloom
//             luminanceThreshold={0.15}
//             mipmapBlur
//             intensity={0.7}
//           />
//           <Vignette eskil={false} offset={0.1} darkness={0.5} />        </EffectComposer>

//         <Preload all />
//       </Suspense>
//     </Canvas>
//   );
// }


// ==========================================================================================================



"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Preload } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

import { CosmeticBottle } from "./CosmeticBottle";
import { Lighting } from "./Lighting";
import { Particles } from "./Particles";

// Camera controller for scroll-based zoom/pan
function CameraController({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  useFrame((state) => {
    const scroll = Math.min(Math.max(scrollProgress.current, 0), 1);
    
    // Zoom in as we scroll (8 → 4)
    const targetZ = THREE.MathUtils.lerp(8, 4.5, scroll);
    // Subtle pan for cinematic feel
    const targetX = Math.sin(scroll * Math.PI) * 0.8;
    const targetY = THREE.MathUtils.lerp(0, 0.5, scroll);

    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, targetZ, 0.05);
    state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, targetX, 0.05);
    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, targetY, 0.05);
    state.camera.lookAt(0, scroll * 0.5, 0);
  });
  return null;
}

export default function Scene({ scrollProgress }: { scrollProgress: React.MutableRefObject<number> }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ 
        antialias: true, 
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2
      }}
      dpr={[1, 2]}
      className="w-full h-full"
    >
      {/* Soft cream/pink background */}
      <color attach="background" args={["#faf0f3"]} />

      <Suspense fallback={null}>
        <CameraController scrollProgress={scrollProgress} />
        <Lighting scrollProgress={scrollProgress} />
        <CosmeticBottle scrollProgress={scrollProgress} />
        <Particles count={200} />

        {/* Post-processing */}
        <EffectComposer>
          <Bloom
            luminanceThreshold={0.2}
            mipmapBlur
            intensity={0.5}
          />
          <Vignette eskil={false} offset={0.1} darkness={0.4} />
        </EffectComposer>

        <Preload all />
      </Suspense>
    </Canvas>
  );
}

