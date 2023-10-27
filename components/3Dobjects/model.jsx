import { useLoader, useFrame } from '@react-three/fiber';
import { Suspense, useState, useEffect } from 'react';

const Model = (props) => {
  const [GLTFLoader, setGLTFLoader] = useState(null);
  const [model, setModel] = useState(null);
  let mixer;

  useEffect(() => {
    // Load the GLTFLoader dynamically
    import('three/examples/jsm/loaders/GLTFLoader.js')
      .then(({ GLTFLoader }) => {
        setGLTFLoader(new GLTFLoader);

        // Load the model
        GLTFLoader.load(props.path, (gltfScene) => {
          console.log(gltfScene)
        })
        // const model = useLoader(new GLTFLoader, props.path);
        setModel(model);
      })
      .catch((error) => {
        console.error('Failed to load GLTFLoader:', error);
      });
  }, [props.path]);

  if (!GLTFLoader || !model) {
    return null; // or a loading indicator
  }

  if (model.animations.length > 0) {
    mixer = new THREE.AnimationMixer(model.scene);
    model.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
    });
  }

  useFrame((scene, delta) => {
    mixer?.update(delta);
  });

  model.scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.material.side = THREE.FrontSide;
    }
  });

  return (
    <primitive object={model.scene} scale={props.scale} />
  );
};

export default Model;

// import { useLoader, useFrame } from '@react-three/fiber';

// const Model = (props) => {
//   let mixer;

//   // Use dynamic import to load GLTFLoader
//   import('three/examples/jsm/loaders/GLTFLoader.js')
//     .then( async ({ GLTFLoader }) => {
//       const model = useLoader(GLTFLoader, props.path);

//       if (model.animations.length > 0) {
//         mixer = new THREE.AnimationMixer(model.scene);
//         model.animations.forEach((clip) => {
//           const action = mixer.clipAction(clip);
//           action.play();
//         });
//       }

//       useFrame((scene, delta) => {
//         mixer?.update(delta);
//       });

//       model.scene.traverse((child) => {
//         if (child.isMesh) {
//           child.castShadow = true;
//           child.receiveShadow = true;
//           child.material.side = THREE.FrontSide;
//         }
//       });
//     })
//     .catch((error) => {
//       console.error('Failed to load GLTFLoader:', error);
//     });

//   return null; // You can return null here or adjust it according to your needs
// };

// export default Model;



// import { useLoader, useFrame } from '@react-three/fiber'
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
// import * as THREE from 'three'

// const Model = props => {

//   const model = useLoader(
//     GLTFLoader,
//     props.path
//   )

//   let mixer

//   if(model.animations.length > 0){
//     mixer = new THREE.AnimationMixer(model.scene)
//     model.animations.forEach( clip => {
//       const action = mixer.clipAction(clip)
//       action.play()
//     })
//   }
  
//   useFrame( (scene, delta) => {
//     mixer?.update(delta)
//   })
  
//   model.scene.traverse( child => {
//     if(child.isMesh){
//       child.castShadow = true
//       child.receiveShadow = true
//       child.material.side = THREE.FrontSide
//     }
//   })
  
//   return (
//       <primitive 
//         object={model.scene}
//         scale={props.scale}
//       />
//   )
// }

// export default Model