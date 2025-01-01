import React, { useRef } from "react";

export const Cube = (props) => {
  const cubeRef = useRef();

  return (
    <mesh ref={cubeRef} {...props}>
      {/* Hình khối lập phương */}
      <boxGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="red" transparent />
    </mesh>
  );
};
