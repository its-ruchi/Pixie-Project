import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

function PixieModel() {
  const ref = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = Math.sin(t / 2) / 4;
    ref.current.position.y = Math.sin(t / 2) / 2;
  });

  return (
    <group ref={ref}>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1, 1.5, 0.5]} />
        <meshStandardMaterial color="#5000FF" />
      </mesh>
      <mesh position={[0, 1.25, 0]}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color="#FFC0CB" />
      </mesh>
      <Text position={[0, 2, 0]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
        Pixie
      </Text>
    </group>
  );
}

export function PixieCanvas() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        <spotLight position={[10, 10, 10]} angle={0.5} penumbra={1} castShadow />
        <PixieModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
