import Bulb from "./bulb"

const Lights = () => {

  return (
    <>
      <ambientLight intensity={10}/>
      <directionalLight 
        shadow-mapSize-height={2**10}
        shadow-mapSize-width={2**10}
        position={[6,3,0]}
        intensity={2}
        castShadow
      />
      <Bulb position={[-6, 5, 0]}/>
      <Bulb position={[0, 5, 0]}/>
      <Bulb position={[6, 5, 0]}/>
    </>

  )
  
}

export default Lights