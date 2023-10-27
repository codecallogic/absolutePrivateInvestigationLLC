import * as THREE from 'three'
import { 
  Canvas,
  useFrame
} from '@react-three/fiber'
import { useState, Suspense, useRef } from 'react'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { DoubleSide } from "three";
// import { Physics } from '@react-three/cannon'\

useGLTF.preload('/assets/magnifyingGlass.gltf')
useGLTF.preload('/assets/voiceRecorder/scene.gltf')

function Model(props) {
  const { nodes, materials } = useGLTF('/assets/magnifyingGlass.gltf')
  const meshOne = useRef()
  let number = 0
  let countType = 'add'

  useFrame(() => 
    number < .1 ? countType = 'add' : null
  )

  useFrame(() => 
    number > 1.8 ? countType = 'substract' : null
  )

  useFrame(() => 
    countType == 'add' ? number = number + .01 : number = number - .01
  )

  useFrame(() => 
    meshOne.current.rotation.x = number
  )
  
  return (
    <group {...props} dispose={null} castShadow>
      <group position={[-2.763, -5.246, -15]} rotation={[5, -1.932, -.2]} scale={4} ref={meshOne}>
        <mesh geometry={nodes.Torus_1.geometry} material={materials.glass} material-color={"transparent"}><meshStandardMaterial color="transparent" /></mesh>
        <mesh geometry={nodes.Torus_2.geometry} material={materials.base} material-color={"#44551D"}><meshPhongMaterial color="#B0C9CB" /></mesh>
        <mesh geometry={nodes.Torus_3.geometry} material={materials.wood} material-color={"#E9EFF3"}/>
      </group>
    </group>
  )
}

function Model2(props) {
  const { nodes, materials } = useGLTF('/assets/voiceRecorder/scene.gltf')
  const meshOne = useRef()
  let number = 0
  let countType = 'add'

  useFrame(() => 
    number < .1 ? countType = 'add' : null
  )

  useFrame(() => 
    number > 1.8 ? countType = 'substract' : null
  )

  useFrame(() => 
    countType == 'add' ? number = number + .01 : number = number - .01
  )

  useFrame(() => 
    meshOne.current.rotation.x = number
  )

  return (
    <group {...props} dispose={null} position={[-10.763, -3.246, 5]} rotation={[-.18, 1, -.3]} scale={4} ref={meshOne}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Material} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

function Plane(props) {

  return (
    <mesh receiveShadow  position={[0, -10, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[110, 110, 110]}>
      <planeGeometry />
      <meshBasicMaterial color="green" side={DoubleSide} />
    </mesh>
  )

}

const Scene = ({}) => {
  
  return (
    <div className="headerScene">
      <div className="headerSceneObjects">
        <Canvas 
          gl={{
            powerPreference: "high-performance",
            antialias: true,
            stencil: false,
            depth: true
          }}
          shadows={true}
          shadowMap={true}
          style={{background: 'rgba(233, 239, 243, .6)'}}
          camera={{ position: [25,50,5], fov: 45  }}
        >
          {/* <axesHelper
            args={[5]}
          /> */}
          <Suspense fallback={null}>
              <directionalLight
                castShadow
                position={[50, 60, 10]}
                intensity={.9}
                shadow-mapSize-shadowMapWidth={2048}
                shadow-mapSize-shadowMapHeight={2048}
                shadow-camera-left={-10}
                shadow-camera-right={-10}
                shadow-camera-top={-50}
                shadow-camera-bottom={10}
              />
              <ambientLight intensity={0.5} />
              <spotLight intensity={.9} angle={.1} penumbra={1} position={[55, 60, 10]} castShadow/>
              <OrbitControls enablePan={false} enableZoom={false} enableRotate={true}/>
              <group rotation-z={-.5} rotation-y={0} rotation-x={.05}>
                <Model />
                <Model2 />
              </group>
          </Suspense>
        </Canvas>
      </div>
      <div className="headerSceneHeading">
        When you need answers use the Absolute best
      </div>
      <div className="headerSceneSubheading">
        Integrity is our number one asset
      </div>
    </div>
  )
}

export default Scene
