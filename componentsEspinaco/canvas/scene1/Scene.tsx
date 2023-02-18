import { FC } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload } from '@react-three/drei'

/* Me lo he inventado temporalmente */
interface Props {
    title: string;
    subTitle: string;
    icon?: JSX.Element;
}
export const Scene:FC<Props> = ({ children, ...props }) => {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      {children}
      <Preload all />
      <OrbitControls />
    </Canvas>
  )
}