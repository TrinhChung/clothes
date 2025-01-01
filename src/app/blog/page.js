"use client";

import React, { useRef, useLayoutEffect, useState } from "react";
import { Canvas, applyProps, useFrame } from "@react-three/fiber";
import {
  AccumulativeShadows,
  Stats,
  PerformanceMonitor,
  useGLTF,
  RandomizedLight,
  Environment,
  Lightformer,
  Float
} from "@react-three/drei";
import * as THREE from "three";
import { LayerMaterial, Color, Depth } from "lamina";

function Dress(props) {
  const { scene, nodes, materials } = useGLTF("/models/911-transformed.glb");

  console.log(nodes);
  console.log(materials);

   useLayoutEffect(() => {
     Object.values(nodes).forEach(
       (node) => node.isMesh && (node.receiveShadow = node.castShadow = true)
     );
     applyProps(materials.rubber, {
       color: "#222",
       roughness: 0.6,
       roughnessMap: null,
       normalScale: [4, 4],
     });
     applyProps(materials.window, {
       color: "black",
       roughness: 0,
       clearcoat: 0.1,
     });
     applyProps(materials.coat, {
       envMapIntensity: 4,
       roughness: 0.5,
       metalness: 1,
     });
     applyProps(materials.paint, {
       envMapIntensity: 2,
       roughness: 0.45,
       metalness: 0.8,
       color: "#555",
     });
   }, [nodes, materials]);

   return <primitive object={scene} {...props} />;
}

function CameraRig({ v = new THREE.Vector3() }) {
  return useFrame((state) => {
    const t = state.clock.elapsedTime;
    state.camera.position.lerp(
      v.set(Math.sin(t / 5), 0, 12 + Math.cos(t / 5) / 2),
      0.05
    );
    state.camera.lookAt(0, 0, 0);
  });
}

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

function Lightformers({ positions = [2, 0, 2, 0, 2, 0, 2, 0] }) {
  const group = useRef();
  useFrame(
    (state, delta) =>
      (group.current.position.z += delta * 10) > 20 &&
      (group.current.position.z = -60)
  );
  return (
    <>
      {/* Ceiling */}
      <Lightformer
        intensity={0.75}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <group rotation={[0, 0.5, 0]}>
        <group ref={group}>
          {positions.map((x, i) => (
            <Lightformer
              key={i}
              form="circle"
              intensity={2}
              rotation={[Math.PI / 2, 0, 0]}
              position={[x, 4, i * 4]}
              scale={[3, 1, 1]}
            />
          ))}
        </group>
      </group>
      {/* Sides */}
      <Lightformer
        intensity={4}
        rotation-y={Math.PI / 2}
        position={[-5, 1, -1]}
        scale={[20, 0.1, 1]}
      />
      <Lightformer
        rotation-y={Math.PI / 2}
        position={[-5, -1, -1]}
        scale={[20, 0.5, 1]}
      />
      <Lightformer
        rotation-y={-Math.PI / 2}
        position={[10, 1, 0]}
        scale={[20, 1, 1]}
      />
      {/* Accent (red) */}
      <Float speed={5} floatIntensity={2} rotationIntensity={2}>
        <Lightformer
          form="ring"
          color="red"
          intensity={1}
          scale={10}
          position={[-15, 4, -18]}
          target={[0, 0, 0]}
        />
      </Float>
      {/* Background */}
      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide}>
          <Color color="#444" alpha={1} mode="normal" />
          <Depth
            colorA="blue"
            colorB="black"
            alpha={0.5}
            mode="normal"
            near={0}
            far={300}
            origin={[100, 100, 100]}
          />
        </LayerMaterial>
      </mesh>
    </>
  );
}


export default function Blog() {
  const [degraded, degrade] = useState(false);

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

        {/* Hình khối */}
        {/* <Cube /> */}

        <Dress
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

        {/* Thống kê hiệu năng */}
        <Stats />
      </Canvas>
    </div>
  );
}
