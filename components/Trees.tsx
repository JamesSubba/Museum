import {useLoader} from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useState } from "react";
import { Object3D } from "three";

type treeType = {
  position: { x: number; z: number };
  box: number;
}

type props = {
  boundary: number;
  count: number;
}

const Trees: React.FC<props>  = ({boundary, count}) => {
  const model = useLoader(GLTFLoader, "./models/we.glb");
  const [trees, setTress] = useState<treeType[]>([])
  model.scene.traverse((object)=> {
    if(object.isMesh) {
      object.castShadow = true
    }
  })
  // console.log(model);

  const updatePosition = (treeArray: treeType[], boundary: number)=> {
    treeArray.forEach((tree, index)=> {
      tree.position.x = Math.random() * 400;
      tree.position.z = Math.random() * 400; 
    });
    setTress(treeArray);
  }

  useEffect(()=> {
    const tempTrees: treeType[] = [];
    for(let i=0; i<count; i++){
      tempTrees.push({position: {x:0, z:0}, box: 1});
    }
    console.log(tempTrees)
    updatePosition(tempTrees, boundary);
  }, [boundary, count]);
 
  return (
    <group position={[-200, 0, -200]}>

      {trees.map((tree, index)=> {
        return (
          <object3D key={index} position={[tree.position.x, 0, tree.position.z]}>
            <mesh scale={[tree.box, tree.box, tree.box]}>
              <boxGeometry/>
              <meshBasicMaterial color={"blue"} wireframe/>
            </mesh>
            <primitive object={model.scene.clone()}/>
          </object3D>
        )
      })}
  
        

    </group>
  
  )
}

export default Trees;