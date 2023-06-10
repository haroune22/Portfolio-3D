/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 chair.gltf --transform
Author: AK STUDIO (https://sketchfab.com/inven2000)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/office-chair-af2f07d06f6349158c1d24d87f5ceb95
Title: Office chair
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/chair-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Chair} scale={0.531} />
    </group>
  )
}

useGLTF.preload('/chair-transformed.glb')
