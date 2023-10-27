import { Suspense } from 'react'
import Model from './model'

const Item = ({}) => {

  return (
    <Suspense fallback={null}>
       <group rotation={[0, Math.PI, 0]}>
        <Model
          path='./magnifyingGlass.gltf'
          scale={new Array(1).fill(3)}
        />
      </group>
    </Suspense>
  )
  
}

export default Item

// const Item = () => {
//   return (
//     <Suspense fallback={null}>
//       <group rotation={[0, Math.PI, 0]}>
//         <Model path="./magnifyingGlass.gltf" scale={new Array(1).fill(3)} />
//       </group>
//     </Suspense>
//   );
// };

// export default Item;