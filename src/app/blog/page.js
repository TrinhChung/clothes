"use client";

import React, { useState } from "react";
import { Canvas} from "@react-three/fiber";
import {
  AccumulativeShadows,
  PerformanceMonitor,
  RandomizedLight,
  Environment,
} from "@react-three/drei";
import { Cube } from "./Cube";
import { Porsche } from "./Porche";
import { CameraRig } from "./CameraRig";
import { Lightformers } from "./Lightformers";
import { Dress } from "./Dress";


export default function Blog() {
  const [degraded, degrade] = useState(false);

  return (
    <div
      style={{
        margin: "0 auto",
        width: "1000px",
        height: "500px",
        border: "1px solid #ccc",
      }}
    >
      <Canvas
        style={{ width: "100%", height: "100%" }}
        shadows
        camera={{ position: [5, 0, 15], fov: 30 }}
      >
        {/* Ánh sáng */}
        <ambientLight intensity={0.5} />
        {/* Ánh sáng bổ sung */}
        <spotLight
          position={[0, 15, 0]}
          angle={0.3}
          penumbra={1}
          castShadow
          intensity={2}
          shadow-bias={-0.0001}
        />

        <Dress
          position={[-0.5, -0.18, 0]}
          rotation={[0, Math.PI / 5, 0]}
          scale={0.6}
        />

        {/* Hình khối */}
        {/* <Cube
          position={[-0.5, 1, 0]}
          rotation={[0, Math.PI / 5, 0]}
          scale={1.6}
        /> */}

        <Porsche
          position={[-0.5, -0.18, 0]}
          rotation={[0, Math.PI / 5, 0]}
          scale={1.6}
        />

        <AccumulativeShadows
          position={[0, -1.16, 0]}
          frames={100}
          alphaTest={0.9}
          scale={10}
        >
          <RandomizedLight
            amount={8}
            radius={10}
            ambient={0.5}
            position={[1, 5, -1]}
          />
        </AccumulativeShadows>

        <Environment
          frames={degraded ? 1 : Infinity}
          resolution={256}
          background
          blur={1}
        >
          <Lightformers />
        </Environment>

        <PerformanceMonitor onDecline={() => degrade(true)} />

        {/* Điều khiển */}
        <CameraRig />
      </Canvas>
    </div>
  );
}
