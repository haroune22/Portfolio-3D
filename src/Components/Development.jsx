import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import ReactLogo from './ReactLogo'
import styled from 'styled-components'


const Desc= styled.div`
width: 200px;
height: 55px;
padding: 20px;
background-color: white;
border-radius: 10px;
position: absolute;
top: 30px;
right: 50px;

@media only screen and (max-width: 768px) {
  top: 20;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
`
const Development = () => {
  return (
    <>
    <Canvas>
      <Stage environment="city" intensity={0.6}>
        <ReactLogo/>
      </Stage>
      <OrbitControls enableZoom={false}/>
    </Canvas>
    <Desc>
      We Design Products with a strong focus on both world class design and ensuring your product is a market success
    </Desc>
    </>
  )
}

export default Development