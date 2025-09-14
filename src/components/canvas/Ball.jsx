import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = ({ icon }) => {
  const [decal] = useTexture([icon]);

  return (
    <Float speed={1.8} rotationIntensity={1.2} floatIntensity={2}>
      {/* Lighting */}
      <ambientLight intensity={0.35} />
      <directionalLight position={[5, 5, 5]} intensity={0.7} />
      
      {/* Base Sphere */}
      <mesh castShadow receiveShadow scale={2.8}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#f5f5f5"
          roughness={0.3}
          metalness={0.4}
          flatShading
        />
        {/* Icon Decal */}
        <Decal 
          position={[0, 0, 0.85]} 
          rotation={[0, 0, 0]} 
          scale={1.4}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="always" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <Ball icon={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
