'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, Stars } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function DataMonoliths() {
  const group = useRef<THREE.Group>(null);
  const bars = useMemo(() => [
    { x: -2.4, z: 0.5, h: 1.7 },
    { x: -1.25, z: 0.25, h: 2.5 },
    { x: 0, z: 0, h: 3.45 },
    { x: 1.3, z: -0.15, h: 4.3 },
    { x: 2.55, z: -0.4, h: 5.25 },
  ], []);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.055;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.05, 0.03);
    group.current.rotation.y += state.pointer.x * 0.0005;
  });

  const linePoints = bars.map((bar) => new THREE.Vector3(bar.x, bar.h * 0.54, bar.z + 0.06));

  return (
    <group ref={group} rotation={[-0.08, -0.36, 0]} position={[0, -1.35, 0]}>
      {bars.map((bar, index) => (
        <Float key={bar.x} speed={1 + index * 0.08} rotationIntensity={0.05} floatIntensity={0.22}>
          <mesh position={[bar.x, bar.h / 2, bar.z]}>
            <boxGeometry args={[0.78, bar.h, 0.78]} />
            <meshPhysicalMaterial
              color={index === bars.length - 1 ? '#438fff' : '#0a2848'}
              roughness={0.18}
              metalness={0.72}
              transmission={index === bars.length - 1 ? 0.08 : 0}
              clearcoat={1}
              clearcoatRoughness={0.12}
              emissive={index > 2 ? '#0b4d99' : '#03111f'}
              emissiveIntensity={index > 2 ? 0.45 : 0.12}
            />
          </mesh>
        </Float>
      ))}
      <Line points={linePoints} color="#6cb8ff" lineWidth={2.1} transparent opacity={0.85} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.03, 0]}>
        <planeGeometry args={[8.8, 6.2]} />
        <meshBasicMaterial color="#06111e" transparent opacity={0.72} />
      </mesh>
      <gridHelper args={[10, 16, '#1c4777', '#0b2139']} position={[0, 0.02, 0]} />
    </group>
  );
}

export default function EnterpriseScene() {
  return (
    <div className="scene3d" aria-hidden="true">
      <Canvas camera={{ position: [0, 2.2, 8.7], fov: 43 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.55} />
        <directionalLight position={[4, 7, 5]} intensity={2.2} color="#8dc7ff" />
        <pointLight position={[-4, 2, 3]} intensity={16} color="#0d6efd" distance={12} />
        <pointLight position={[4, 5, -2]} intensity={10} color="#67b5ff" distance={10} />
        <Stars radius={24} depth={16} count={650} factor={1.8} saturation={0} fade speed={0.25} />
        <DataMonoliths />
        <fog attach="fog" args={['#050b14', 7.5, 18]} />
      </Canvas>
    </div>
  );
}
