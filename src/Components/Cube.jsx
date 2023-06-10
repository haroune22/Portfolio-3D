import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React from 'react'
import { useRef } from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:100vh;
width:100%;
`
const cube = () => {
    const textRef = useRef()
    useFrame(state=>(textRef.current.position.x = Math.sin(state.clock.elapsedTime)* 2))
  return (

            <mesh>
                <boxGeometry/>
                <meshStandardMaterial>
                    <RenderTexture attach="map">
                        <PerspectiveCamera makeDefault
                        position={[0,0,5]}/>
                        <color attach="background" args={["#dc9dcd"]}/>
                        <Text ref={textRef} fontSize={2} color="#555">
                            hello
                        </Text>
                    </RenderTexture>
                </meshStandardMaterial>
            </mesh>
  )
}

export default cube