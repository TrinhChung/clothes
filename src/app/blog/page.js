"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stats, ScrollControls } from "@react-three/drei";
import * as THREE from "three";

function Cube() {
  const cubeRef = useRef();

  return (
    <mesh
      ref={cubeRef}
      position={new THREE.Vector3(1, 1, 1)}
      rotation={[0.4, 0.2, 0]}
      rotation-x={1}
    >
      {/* Hình khối lập phương */}
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="red" transparent />
    </mesh>
  );
}

export default function Blog() {
  return (
    <div
      style={{
        margin: "0 auto",
        width: "1000px",
        height: "700px",
        border: "1px solid #ccc",
      }}
    >
      <Canvas
        style={{ width: "100%", height: "100%" }}
        camera={{ position: [3, 3, 5], fov: 75 }}
      >
        {/* Ánh sáng */}
        <ambientLight intensity={1} />
        {/* Ánh sáng bổ sung */}
        <directionalLight position={[10, 10, 10]} intensity={1} />

        <fog attach="fog" args={["black", 15, 22.5]} />

        {/* Hình khối */}
        <ScrollControls damping={0.2} maxSpeed={0.5} pages={2}>
          <Cube />
        </ScrollControls>

        {/* Điều khiển */}
        <OrbitControls enableZoom={true} />

        {/* Thống kê hiệu năng */}
        <Stats />
      </Canvas>
    </div>
  );
}
