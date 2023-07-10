
import './../../pages/projects.css';
import '../../app/globals.css';

import React, { useState, useRef, useEffect, createRef } from 'react';
import { Canvas, useFrame, useThree, extend, useLoader } from '@react-three/fiber';
import {  MathUtils, TextureLoader } from 'three';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import dynamic from 'next/dynamic';
import { Flex } from '@chakra-ui/react';
import Image from 'next/image';

// Extend will make OrbitControls available as a JSX element called orbitControls for use in your canvas
extend({ OrbitControls })

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();

  const t = document.body.getBoundingClientRect().top;

  
  useFrame(() => {
    orbitRef.current.update()
  })

  return (
    <orbitControls
      args={[camera, gl.domElement]}
      autoRotate
      enableZoom={false}
      enablePan={false}
      scrollZoom={false}
      ref={orbitRef}
    />
  )
}
  

const Star = () => {
    const mesh = useRef();
    const [initialPosition, setInitialPosition] = useState(() => {
        const [x, y, z] = Array(3).fill(0).map(() => MathUtils.randFloatSpread(100));
        return [x, y, z];
    });

    useFrame((state) => {
      // const random = Math.random();
        if (mesh.current) {
            const time = state.clock.getElapsedTime();
            mesh.current.position.x = initialPosition[0] * 1.5 + Math.sin(time) / 4;
            mesh.current.position.y = initialPosition[1] / 1.1;
            mesh.current.position.z = initialPosition[2] * 1.1 + Math.cos(time) / 5;
        }
    });

    return (
        <mesh ref={mesh} position={initialPosition}>
            <sphereGeometry args={[0.08, 64, 64]} />
            <meshStandardMaterial color={0xffffff} />
        </mesh>
    );
};


const Orbit = ({ radius, width }) => {
  const resolution = 100; // number of vertices
  const points = [];
  for (let i = 0; i <= resolution; i++) {
      const angle = (i / resolution) * Math.PI * 2;
      points.push(new THREE.Vector3(radius * Math.cos(angle) * 2, 0, radius * Math.sin(angle)));
  }
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
      <line loop={true} geometry={geometry}>
          <lineBasicMaterial attach="material" color='rgba(120, 120, 180, 1)' linewidth={0.2} />
      </line>
  );
};

const Planet = ({color, width, position, orbit, imagePath}) => {
  // const [texture, setTexture] = useState(null);
  const mesh = useRef();
  const random = Math.random() * 3 + 2;
  const loader = new THREE.TextureLoader();
  const texture = loader.load(imagePath)

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime();
      mesh.current.position.x = 0 + Math.sin(time / random) * 2 *  position[0] ;
      mesh.current.position.y = 0;
      mesh.current.position.z = 0 + Math.cos(time / random) *   position[2] ;
    }
  })

  return (
    <>
      <mesh ref={mesh} position = {position}>
        <sphereGeometry args={[width, 64, 64]} />
        <meshStandardMaterial map={texture}/>
      </mesh>
      {orbit && <Orbit radius={orbit}/>}
    </>
  );  
} 

function SceneBackground() {
  const { scene } = useThree();
  const loader = new THREE.TextureLoader();
  
  // Load a single image as a texture
  const texture = loader.load(
    '/planets/stars.jpg',
    () => console.log("Texture loaded"),
    undefined,
    (error) => console.error("An error occurred while loading the texture", error)
  );

  // Apply background texture
  scene.background = texture;
  
  return null;
}

function StarSphere() {
  // Create a sphere with radius 1000, and high detail level
  const geometry = new THREE.SphereGeometry(1000, 32, 32);

  // Load your star texture
  const loader = new THREE.TextureLoader();
  const texture = loader.load('/planets/stars.jpg');

  // Apply texture to an inside-out material
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.BackSide // render texture on the inside
  });

  // Create the sphere mesh
  const mesh = new THREE.Mesh(geometry, material);

  // Use a ref so we can update the rotation in the render loop
  const meshRef = React.useRef();
  useFrame(() => {
    if (meshRef.current) {
      // Modify this line to change rotation speed and direction
      meshRef.current.rotation.y += 0.001;
    }
  });

  return <primitive object={mesh} ref={meshRef} />;
}

const ImageThreeD = () => {
  const numStars = 700;
  const [currentImage, setCurrentImage] = useState(0);
  const images = ['/lebot/login2.png', '/lebot/home.png', '/lebot/robotstore.png', '/lebot/planets.png', '/lebot/measurements.png',   ];
  const texts = ['Text for image 1', 'Text for image 2', 'Text for image 3', 'Text for image 4', 'Text for image 5'];
  const sections = useRef([]);
  const planets = [
    { color: 'rgba(220, 100, 0, 1)', width: 3, position: [0, 0, 0], imagePath: '/planets/sun.jpg' },
    { color: 'rgba(20, 200, 200, 1)', width: 2, position: [15, 0, 15], orbit: 15, imagePath: '/planets/mars.jpg' },
    { color: 'rgba(200, 200, 100, 1)', width: 1.5, position: [23, 0, 23], orbit: 23, imagePath: '/planets/earth.jpg' },
    { color: 'rgba(100, 20, 100, 1)', width: 2, position: [30, 0, 30], orbit: 30, imagePath: '/planets/jupiter.jpg' },
    { color: 'rgba(200, 100, 150, 1)', width: 2, position: [38, 0, 38], orbit: 38, imagePath: '/planets/neptune.jpg'},
    { color: 'rgba(20, 200, 20, 1)', width: 1, position: [45, 0, 45], orbit: 45, imagePath: '/planets/neptune.jpg'},
  ];


  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      const { deltaY } = event;
      setCurrentSection((prev) => deltaY > 0 ? Math.min(prev + Math.abs(deltaY), images.length - 1) : Math.max(prev - Math.abs(deltaY), 0));
    };
  
    window.addEventListener('wheel', handleScroll, { passive: false });
  
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    window.scrollTo({ top: currentSection * window.innerHeight, behavior: 'smooth' });
  }, [currentSection]);


  return (
    // backgroundColor: 'rgba(6, 6, 15, 1)'
    <div style={{ flex: 1,  overflow: 'hidden',  }}>

    <div
      style={{
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
        zIndex: 1,
      }}
    >


    <Canvas
      camera={{ fov: 75, position: [20, 30, 60] }}
      style={{  flex: 1,  zIndex: 0, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(6, 6, 15, 1)',}} // backgroundColor: 'rgba(6, 6, 15, 1)',
    >
      {/* <SceneBackground /> */}
      {/* <StarSphere /> */}
        {planets.map((planet, i) => (
            <Planet 
              key={i}
              color={planet.color} 
              width={planet.width} 
              position={planet.position}
              orbit={planet.orbit} 
              imagePath={planet.imagePath}
            />
          ))}
        <ambientLight intensity={1} />
        <Controls />
        {Array.from({ length: numStars }).map((_, i) => (
          <Star key={i} />
        ))}
      </Canvas>
      <div style = {{marginTop: 10, position: 'absolute'}}>
        {images.map((image, i) => (
            <div
              key={i}
              id={i}
              ref={el => (sections.current[i] = el)}
              style={{
                position: 'relative',
                scrollSnapAlign: 'start',
                height: '100vh',
                // top: 0, // removed calculation here
                width: '100vw',
                zIndex: 1,
                justifyContent: 'center',
                marginTop: '10vh'
              }}
            >
              {i === 0 && 
              <div className = 'p-10' style={{ zIndex: 10, top: '7.4%', left: '6%', position: 'absolute'}}>
                  <h2 style={{ fontSize: 70, color: 'white', fontWeight: 'bold' }}>Learning Bot</h2>
                  <p style={{ fontSize: 30 }}>Draait om jou</p>
              </div>
              }
              {i === 1 && 
              <div className = 'p-10' style={{ borderRadius: 20, zIndex: 10, top: '7.4%', left: '6%', position: 'absolute'}}>
                <h2 style={{ fontSize: 70, color: 'white', fontWeight: 'bold' }}>Interactief</h2>
                <p style={{ fontSize: 30 }}>Bouw, Programeer en Onderzoek </p>
                <p style={{ fontSize: 30 }}>Gebruik je wiskunde en natuurkunde kennis</p>
                <p style={{ fontSize: 30 }}>om een op afstand bestuurbare robot </p>
                <p style={{ fontSize: 30 }}>te bouwen en te programmeren</p>
              </div>
              }
              {i === 2 && 
              <div className = 'p-10' style={{ borderRadius: 20, zIndex: 10, top: '7.4%', left: '6%', position: 'absolute'}}>
                <h2 style={{ fontSize: 70, color: 'white', fontWeight: 'bold' }}>Upgrade Jouw Robot</h2>
                <p style={{ fontSize: 30 }}>Met credits die je verdient kun je jouw robot verbeteren</p>
              </div>
              }
              {i === 3 && 
              <div className = 'p-10' style={{ borderRadius: 20, zIndex: 10, top: '7.4%', left: '6%', position: 'absolute'}}>
                <h2 style={{ fontSize: 70, color: 'white', fontWeight: 'bold' }}>Toepassing</h2>
                <p style={{ fontSize: 30 }}>Kies uit verschillende opdrachten</p>
                <p style={{ fontSize: 30 }}>over beweging, schakelingen,</p>
                <p style={{ fontSize: 30 }}>vermogen en energie</p>
              </div>
              }
              {i === 4 && 
                <div className = 'p-10' style={{ borderRadius: 20, zIndex: 10, top: '7.4%', left: '6%', position: 'absolute'}}>
                  <h2 style={{ fontSize: 70, color: 'white', fontWeight: 'bold' }}>Verzamel Data</h2>
                  <p style={{ fontSize: 30 }}>Bestuur de robot en verzamel</p>
                  <p style={{ fontSize: 30 }}>live data over zijn versnelling</p>
                  <p style={{ fontSize: 30 }}>snelheid en vermogen</p>
                </div>
              }
              <Image
                src={image}
                alt={"Image " + i}
                className="dark"
                width={542}
                height={600}
                priority  
                style = {{borderRadius: 20, borderColor: 'rgba(77,77,77,0.2)', borderWidth: 4, opacity: 0.87, position: 'absolute',  marginLeft: '73vw', marginTop: '7.5vh'}}
              />
            </div>
      ))}
    </div>
      </div>
    </div>
  )
}

export default ImageThreeD