
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Text3D, Center } from '@react-three/drei';
import { Mesh } from 'three';

const AnimatedSphere = () => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={[2, 0, 0]}>
      <MeshDistortMaterial
        color="#0b3d91"
        attach="material"
        distort={0.3}
        speed={2}
        roughness={0.4}
      />
    </Sphere>
  );
};

const FloatingBuildings = () => {
  const buildingRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (buildingRef.current) {
      buildingRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      buildingRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={buildingRef} position={[-2, 0, 0]}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.3, 1.2, 0.3]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
      <mesh position={[0.4, 0, 0]}>
        <boxGeometry args={[0.25, 0.8, 0.25]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>
      <mesh position={[-0.4, 0, 0]}>
        <boxGeometry args={[0.2, 1.0, 0.2]} />
        <meshStandardMaterial color="#3b82f6" />
      </mesh>
    </group>
  );
};

const Hero3D: React.FC = () => {
  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        
        <AnimatedSphere />
        <FloatingBuildings />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;
