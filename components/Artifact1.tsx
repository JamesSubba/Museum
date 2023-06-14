
import * as THREE from "three";
import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import {useState} from 'react';

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
  };
  materials: {
    DefaultMaterial: THREE.MeshStandardMaterial;
  };
};

type ActionName = "hover";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function Artifact1(props: JSX.IntrinsicElements["group"]) {
  const [shiny, setShiny] = useState(false);
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations,scene } = useGLTF("/models/hover.glb") as GLTFResult;
  const { actions } = useAnimations<GLTFActions>(animations, group);

  useEffect(()=> {
    actions?.hover.play();
  },[])
  
  return (
    <group ref={group} {...props} dispose={null} position={[5,5,-30]}>
      <group name="Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="LeshenSkullRelicLPobjcleanermaterialmergergles" />
        </group>
        <mesh
          onPointerEnter={() => setShiny(true)}
      onPointerLeave={() => setShiny(false)}
          name="Object_2"
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.DefaultMaterial}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={shiny? 3.5 : 3}
        >
          {/* <meshPhongMaterial color={shiny ? 0xff00ff : 0x880088} /> */}
        </mesh>
      </group>
    </group>
  );
}

useGLTF.preload("/hover.glb");
