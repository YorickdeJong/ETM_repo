'use client'
import Image from 'next/image';
import './parallax.css';
import { ParallaxProvider, useController, ParallaxBanner, useParallaxController, } from 'react-scroll-parallax';
import { useEffect, useState, useRef } from 'react';
import ValueProp from './ValueProp';
import Process from './process';
import Skills from './Skills';
import Link from 'next/link'


function preloadImage(url) {
  const img = new window.Image();
  img.src = url;
}

const HorizontalCityGallary = () => {
  const [scrollThresholdReached, setScrollThresholdReached] = useState(false);
  const gallaryRef = useRef(null); // Create a ref
  const [gallaryHeight, setGallaryHeight] = useState(0);

  const buttonStyleFilled = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: 70,
    backgroundColor: '#FF9449', // change color on hover
    borderRadius: 20,
    marginRight: 30,
    zIndex: 1000,
    position: 'absolute',
    top: '75%',

};

const buttonStyleFilled2 = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80%',
  height: 65,
  backgroundColor: '#FF9449', // change color on hover
  borderRadius: 20,
  marginRight: 30,
  zIndex: 1000,
};

const buttonStyleStroke = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80%',
  height: 70,
  borderColor: '#FF9449', // change color on hover
  borderWidth: 2,
  borderRadius: 20,
  marginRight: 30,
  zIndex: 1000,
  position: 'absolute',
  top: '83%',
};

const buttonStyleStroke2 = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '80%',
  height: 65,
  borderColor: '#FF9449', // change color on hover
  borderWidth: 2,
  borderRadius: 20,
  zIndex: 1000,
};

  const num_pages = 4;
  const imageUrls = [
    '/homepage/cityDay4-2.png',
    '/homepage/cityDay5.png',
    '/homepage/cityDay3-2.png',
    '/homepage/cityDay2-2.png',
    '/homepage/cityDay1-2.png',
    '/homepage/cityNight3-3.png',
    '/homepage/cityNightCloud.png',
    '/homepage/cityNightMoon.png',
    '/homepage/cityNight2-2-2.png',
    '/homepage/cityNight1-2.png'
  ];
  
  imageUrls.forEach(preloadImage);

  const animationOne = [
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '104vh',}}>
            <Image src={imageUrls[0]} fill/>
        </div>
      ),
      translateY: [19.35, 91.8],
      translateX: [-1, 0],
      opacity: [2.5, -1.3],
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '104vh', }}>
            <Image src={imageUrls[1]} fill/>
        </div>
      ),
      translateX: [60, -100],
      translateY: [19.35, 91.8],
      opacity: [2.4, -2.25],
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '104vh', }}>
            <Image src={imageUrls[2]} fill/>
        </div>
      ),
      translateY: [14.7, 130],
      opacity: [1.75, -0.25],
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '104vh',}}>
            <Image src={imageUrls[3]} fill/>
        </div>
      ),
      translateY: [14.7, 130],
      opacity: [1.75, -0.25],
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '104vh'}}>
            <Image src={imageUrls[4]} fill/>
        </div>
      ),
      
      translateY: [18.4, 101.8],
      
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '30vw', height: '104vh'}}>
              <div>
                  <h2 style  = {{
                    fontSize: 50, 
                    fontWeight: 'bold', 
                    lineHeight: 1.2,
                    zIndex: 1, 
                    position: 'absolute', 
                    top: '12%', 
                    left: 0,
                    color: 'white', 
                    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)',
                    }}>Wij bouwen jouw online presence met passie</h2>
                    <p style  = {{
                    fontSize: 30, 
                    fontWeight: 'bold', 
                    zIndex: 1, 
                    position: 'absolute', 
                    top: '25%', 
                    left: 0,
                    color: 'white', 
                    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)'
                    }}>ETM helpt jou met webdeisng, marketing en zorgt ervoor dat jouw ambities online te zien zijn</p>
              </div>
        </div>
      ),
      
      translateY: [18.4, 101.8],
      translateX: [60.4, -100]
    },
    {
      children: (
    <div style={{ position: 'absolute',  width: '30vw', height: '104vh'}}>
        <div style={buttonStyleFilled}>
            <Link href="/contact" style={{ display: 'block', height: '100%', color: 'white', textDecoration: 'none', marginTop: '1.7vh' }}>
                <h2 style = {{fontSize: 28, textAlign: 'center'}}>Maak een gratis afspraak</h2>
            </Link>
        </div>
        <div style={buttonStyleStroke}>    
            <h2 style = {{fontSize: 28, textAlign: 'center', color: '#FF9449'}}>Maak de online Quiz</h2>
        </div>      
    </div>
      ),
      
      translateY: [18.4, 101.8],
      translateX: [60.4, -100]
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '100vh'}}>

          <Image src={imageUrls[5]} fill/>
        </div>
      ),
      translateY: [19, 90],
      opacity: [-1.7, 2.6]
      // scaleY: [1, 1.75],
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '100vh'}}>

          <Image src={imageUrls[6]} fill/>
        </div>
      ),
      translateY: [70, 20],
      translateX: [120, -130],
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '100vh'}}>

          <Image src={imageUrls[7]} fill/>
        </div>
      ),
      translateX: [120, 30],
      translateY: [70, 16]
    },
    {
      children: (
        <div style={{ position: 'absolute', width: '100vw', height: '100vh'}}>
          <Image src={imageUrls[8]} fill/>
        </div>
      ),
      translateY: scrollThresholdReached ? [50, 50] : [90, -5.5],
    },
    {
      children: (
        <div style={{ position: 'absolute', width: '100vw', height: '104vh'}}>

          <Image src={imageUrls[9]} fill/>
        </div>
      ),
      translateY: scrollThresholdReached ? [49, 49] : [39.5, 61],
    },
    {
      children: (
        <div style={{ position: 'absolute', width: '100vw', height: '100vh', backgroundColor: 'black'}}
        />
      ),
      opacity: scrollThresholdReached ? [0.5, 0.5] : [0, 0],
      translateY:  [49, 49],
    },
    {
      children: (
          <div>
              <div style = {{width: '40vw', height: '40vh', position: 'absolute', left: '-45vw', top: '0vh'}}>
                <Image src={'/homepage/meeting.png'} fill/>
              </div>
            <div style={{ position: 'absolute', width: '36vw', height: '100vh'}}>
                  <div>
                      <h2 style  = {{
                        fontSize: 40, 
                        fontWeight: 'bold', 
                        lineHeight: 1.2,
                        zIndex: 1, 
                        position: 'absolute', 
                        top: '0vh', 
                        left: 0,
                        color: '#F4FDFF', 
                        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)',
                        }}>Wie zijn we en wat kunnen we voor jou betekenen?</h2>
                        <p style  = {{
                        fontSize: 22, 
                        fontWeight: '400', 
                        zIndex: 1, 
                        position: 'absolute', 
                        top: '13%', 
                        left: 0,
                        color: '#D0F6FD', 
                        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)'
                        }}>Charm out quills tonight or mellow diadem teacup diddykins letters. Chess vanishing 
                        armchairs potter lady motorcycle orbs spleens. P
                        eg-leg newt cakes quaffle minister bean. Nearly-headless parseltongue eeylops petrified with 
                        I his plums. Hunt portrait swiveling granger hearing tonight bertie shrieking quidditch.</p>
                  </div>
                  <div style={{ 
                      position: 'relative', 
                      width: '35vw', 
                      height: '104vh',
                      display: 'flex',
                      flexDirection: 'row',
                      marginTop: '33vh',
                  }}>
                        <div style={buttonStyleFilled2}>
                            <Link href="/contact" style={{ display: 'block', height: '100%', color: 'white', textDecoration: 'none', marginTop: '2.4vh' }}>
                                <h2 style = {{fontSize: 25, textAlign: 'center'}}>Maak een gratis afspraak</h2>
                            </Link>
                          </div>
                        <div style={buttonStyleStroke2}>    
                            <h2 style = {{fontSize: 25, textAlign: 'center', color: '#FF9449'}}>Maak de online Quiz</h2>
                        </div>     
                  </div>
            </div>
          </div>
      ),
      translateY: [90, 12.5],
      translateX: [100, 35]
    },
  ]




  // Update the gallaryHeight state whenever the component is resized
  useEffect(() => {
    if (gallaryRef.current) {
      setGallaryHeight(gallaryRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (gallaryRef.current) {
        setGallaryHeight(gallaryRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const percentageThreshold = 97;
      const threshold = gallaryHeight * (percentageThreshold / 100);
      let currentScrollPos = window.pageYOffset;

      if (currentScrollPos > threshold && !scrollThresholdReached) {
        setScrollThresholdReached(true);
      } else if (currentScrollPos <= threshold && scrollThresholdReached) {
        setScrollThresholdReached(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrollThresholdReached, gallaryHeight]);

  return (
    <main style={{ backgroundColor: 'rgba(10,10,30,1)' }} ref={gallaryRef}>
      <ParallaxProvider>
        <ParallaxBanner layers={animationOne} style={{ height: '200vh' }} />
      </ParallaxProvider>
       <ValueProp />
      <Process />
      <Skills />
    </main>
  );
}
export default HorizontalCityGallary;