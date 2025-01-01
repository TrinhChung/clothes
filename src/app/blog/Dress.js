import React, { useRef } from "react";
import { Mesh } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export const Dress = (props) => {
  const { nodes } = useGLTF(
    "/models/dress_for_kids_design_patent.glb"
  );
	console.log(nodes);

   return (
     <group {...props}>
       {Object.keys(nodes).map((key) => {
         const node = nodes[key];
         // Kiểm tra nếu node là một Mesh hoặc Object3D
         if (node.isMesh) {
           return <primitive key={key} object={node} />;
         }
         if (node.isObject3D) {
           return <primitive key={key} object={node} />;
         }
         return null;
       })}
       <mesh
         geometry={nodes.defaultMaterial.geometry}
         material={nodes.defaultMaterial.material}
         position={nodes.defaultMaterial.position}
         rotation={nodes.defaultMaterial.rotation}
         scale={nodes.defaultMaterial.scale}
       />
     </group>
   );
}