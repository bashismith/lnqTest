import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const LogoModal = () => {

  const Logo = ({position}) => {
    const logoRef = useRef();
    const fbx = useLoader(FBXLoader, 'Logo.fbx' );
    useFrame(() => {
      logoRef.current.rotation.y += 0.01
      logoRef.current.rotation.z += 0.01
    })

    return (
      <mesh ref={logoRef} position={position} rotation={[0,1.5,1.5]}>
        <primitive object={fbx} scale={0.005}/>
      </mesh>
    )
  };

  return (
    <Canvas>
      <directionalLight position={[0,20,0]} intensity={2}/>
      <pointLight position={[10, 10, 35]} intensity={1}  />
      <Suspense fallback={null}>
          <Text position={[0,2, 0]} fontSize={0.3} color="#0009FF" font="LNQ.woff" lineHeight={0.1}>
          Tap.
        </Text>
           <Logo position={[0,0,0]}/>
        </Suspense>
    </Canvas>
  )
}


export default LogoModal;

