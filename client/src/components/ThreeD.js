import * as THREE from 'three'
import React, { Suspense, useState , useRef} from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'


const Football = ({position}) => {
  const footballRef = useRef();

  useFrame((state) => {
    footballRef.current.rotation.y -= 0.02
  //   const t = state.clock.getElapsedTime()
  //   // footballRef.current.rotation.x = THREE.MathUtils.lerp(footballRef.current.rotation.x, Math.cos(t / 2) / 10 + 0.15, 0.1)
  //   footballRef.current.rotation.z = THREE.MathUtils.lerp(footballRef.current.rotation.z, Math.sin(t / 4) / 20, 0.1)
  //   footballRef.current.position.y = THREE.MathUtils.lerp(footballRef.current.position.y, (-5 + Math.sin(t)) / 2.5, 0.1)
  })
  const fbx = useLoader(FBXLoader, 'updates.fbx' );
  return (
    <mesh ref={footballRef} position={position} rotation={[2.2,0,0]}>
    <primitive object={fbx} scale={90}/>
    </mesh>
    )
};
 const Aura = ({position}) => {
  const auraRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    auraRef.current.rotation.x = THREE.MathUtils.lerp(auraRef.current.rotation.x, Math.cos(t / 2) / 10 + 0.15, 0.1)
    auraRef.current.rotation.z = THREE.MathUtils.lerp(auraRef.current.rotation.z, Math.sin(t / 4) / 20, 0.1)
    auraRef.current.position.y = THREE.MathUtils.lerp(auraRef.current.position.y, (-5 + Math.sin(t)) / 2.5, 0.1)
  })

  const fbx = useLoader(FBXLoader, 'aura4.fbx' );
  return (
    <mesh ref={auraRef} position={position} rotation={[0,3.3,0]}>
    <primitive object={fbx} scale={0.007}/>
    </mesh>
    )
};


const ThreeDFootball = () => {
  return (
    <Canvas className='canvas' camera={{ position: [0, -20, 0], fov: 50 }}>
    <spotLight position={[10,0,30]} angle={1}/>
    <directionalLight position={[-5,-25,55]} intensity={1}/>
      <Suspense fallback={null}>
        <Football position={[0,0,0]}/>
        {/* <Aura position={[0,1,0]}/> */}
      </Suspense>
      <OrbitControls enableZoom={false}/>
  </Canvas>
  )
};

export default ThreeDFootball;