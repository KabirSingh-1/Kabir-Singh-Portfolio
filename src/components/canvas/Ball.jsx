import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';
import * as THREE from 'three'; // Import THREE for custom geometry

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      {/* Changed geometry to a sphere as a placeholder, if a custom mesh isn't loaded.
          If you want the exact shield shape, you'd typically import a GLTF model.
          For now, we'll make the decal prominent on a simple sphere. */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* Using a sphere for simplicity, but the visual "shield" effect will come
            more from the Decal's aspect ratio and the container's styling. */}
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#fff8eb" // Base color of the ball
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 0.9]} // Slightly closer to the camera for better visibility
          rotation={[0, 0, 0]} // No rotation needed for the icon itself
          scale={1.5} // Increased scale to make the icon more prominent and fill the "shield" area
          map={decal}
          flatShading // Apply flat shading to the decal
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
