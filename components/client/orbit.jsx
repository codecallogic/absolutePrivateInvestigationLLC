import { 
  extend,
  useThree
} from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
extend({ OrbitControls })

const Orbit = ({
  
}) => {

  const { camera, gl } = useThree()

  import('three/examples/jsm/controls/OrbitControls')
    .then( async ({ GLTFLoader }) => {
      
    })
    .catch((error) => {
      console.error('Failed to load GLTFLoader:', error);
    });
  
  return (
    <orbitControls 
      attach="orbitControls"
      args={[camera, gl.domElement]}
    />
  )
}

export default Orbit