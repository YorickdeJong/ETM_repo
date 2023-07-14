'use client'
import Image from 'next/image';
import './parallax.css';
import { ParallaxProvider,  ParallaxBanner, } from 'react-scroll-parallax';
import { useEffect, useState, useRef, useCallback} from 'react';
import Link from 'next/link'
import debounce from 'lodash.debounce';

function preloadImage(url) {
    const img = new window.Image();
    img.src = url;
  }
  
export default function  Parallax(){
    const gallaryRef = useRef(null); // Create a ref
    const [scrollThresholdReached, setScrollThresholdReached] = useState(false);
    const [gallaryHeight, setGallaryHeight] = useState(0);
    const [loadOtherComponents, setLoadOtherComponents] = useState(false);

    const buttonStyleFilled = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      height: '5.5vh',
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
    height: '5.5vh',
    backgroundColor: '#FF9449', // change color on hover
    borderRadius: 20,
    marginRight: 30,
    zIndex: 1000,
  };
  
  const buttonFilled2Link = { display: 'block', height: '100%', color: 'white', textDecoration: 'none', marginTop: '2.4vh' }

  const buttonStyleStroke = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '5.5vh',
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
    height: '5.5vh',
    borderColor: '#FF9449', // change color on hover
    borderWidth: 2,
    borderRadius: 20,
    zIndex: 1000,
  };
  
    const imageUrls = [
      '/homepage/cityDay4-4.jpg',
      '/homepage/cityDay5.png',
      '/homepage/cityDay3-2.png',
      '/homepage/cityDay2-2.png',
      '/homepage/cityDay1-2.png',
      '/homepage/cityNight3-3.jpg',
      '/homepage/cityNightCloud.png',
      '/homepage/cityNightMoon.png',
      '/homepage/cityNight2-2-2.png',
      '/homepage/cityNight1-2.png'
    ];
    
    imageUrls.forEach(preloadImage);
  
    const headerStyle = {
        fontSize: 'calc(1.6vw + 1.6vh)',
        fontWeight: 'bold', 
        lineHeight: 1.2,
        zIndex: 1, 
        position: 'absolute', 
        top: '12%', 
        left: 0,
        color: 'white', 
        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)'
    };
    const paragraphStyle = {
        fontSize: 'calc(0.95vw + 0.95vh)',
        fontWeight: 'bold', 
        zIndex: 1, 
        position: 'absolute', 
        top: '25%', 
        left: 0,
        color: 'white', 
        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)'
    };
    const linkStyle = { display: 'block', height: '100%', color: 'white', textDecoration: 'none', marginTop: '1.7vh' };
    const headingStyle = {fontSize: 'calc(0.95vw + 0.95vh)', textAlign: 'center'};

    const secondHeaderStyle = {
        fontSize: 'calc(1.2vw + 1.4vh)', 
        fontWeight: 'bold', 
        lineHeight: 1.2,
        zIndex: 1, 
        position: 'absolute', 
        top: '0vh', 
        left: 0,
        color: '#F4FDFF', 
        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)'
    };
    const secondParagraphStyle = {
        fontSize: 'calc(0.8vw + 0.8vh)', 
        fontWeight: '400', 
        zIndex: 1, 
        position: 'absolute', 
        top: '13%', 
        left: 0,
        color: '#D0F6FD', 
        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.3)'
    };
    const endContainerStyle = { 
        position: 'relative', 
        width: '35vw', 
        height: '104vh',
        display: 'flex',
        flexDirection: 'row',
        marginTop: '33vh',
    };
    const narrowContainerStyle = { position: 'absolute', width: '100vw', height: '104vh' };
    const blackContainerStyle = { position: 'absolute', width: '100vw', height: '100vh'};
    const buttonContainer = { position: 'absolute', width: '30vw', height: '104vh', left: '-1vw' };
    const video = {width: '40vw', height: '40vh', position: 'absolute', left: '-45vw', top: '0vh'}
    const videoText = { position: 'absolute', width: '36vw', height: '100vh'}

    
    const animationOne = [
      {
        children: (
          <div style={narrowContainerStyle}>
              <Image 
              src={imageUrls[0]} 
              fill
              alt="cityDay4"  
              quality={40}
              priority={true}
              />
          </div>
        ),
        translateY: [19.35, 91.8],
        translateX: [-1, 0],
        opacity: [2.5, -1.3],
      },
      {
        children: (
          <div style={{position: 'absolute', width: '8vw', height: '8vw', top: '13vh', left: '12vw'}}>
              <Image src={imageUrls[1]} 
              fill
              alt="cityDay5"
              quality={4}
              priority={true}
              />
          </div>
        ),
        translateX: [80, -100],
        translateY: [19.35, 91.8],
        opacity: [2.4, -2.25],
      },
      {
        children: (
          <div style={{...narrowContainerStyle, right: '16vw', height: '80vh', top: '8vh', width: '85vw'}}>
              <Image 
              src={imageUrls[2]} 
              fill
                alt="cityDay3" 
                quality={60}    
                priority={true}  
              />
          </div>
        ),
        translateY: [14.7, 130],
        opacity: [1.75, -0.25],
      },
      {
        children: (
          <div style={{...narrowContainerStyle, height: '46vh', top: '28.7vh'}}>
              <Image 
              src={imageUrls[3]} 
              quality={4}
              fill
              alt="cityDay2"  
              priority={true}
              />
          </div>
        ),
        translateY: [14.7, 130],
        opacity: [1.75, -0.25],
      },
      {
        children: (
          <div style={{...narrowContainerStyle, top: '32.55vh', height: '72.4vh'}}>
              <Image 
              src={imageUrls[4]} 
              fill
              alt="cityDay1"
              priority={true}
              quality={70}
              />
          </div>
        ),
        
        translateY: [18.4, 101.8],
        
      },
      {
        children: (
          <section style={buttonContainer}>
                <section>
                    <h1 style  = {headerStyle}>
                    Websites maken met passie</h1>
                      <h2 style  = {paragraphStyle}>ETM helpt jou met webdesign, webmarketing en zorgt ervoor dat jouw ambities online te zien zijn</h2>
                </section>
          </section>
        ),
        
        translateY: [18.4, 101.8],
        translateX: [60.4, -100]
      },
      {
        children: (
      <section style={buttonContainer}>
          <section style={buttonStyleFilled}>
              <Link href="/contact" style={linkStyle}>
                  <h6 style = {headingStyle}>Maak een gratis afspraak</h6>
              </Link>
          </section>
          <section style={buttonStyleStroke}>    
              <h6 style = {{fontSize: 28, textAlign: 'center', color: '#FF9449'}}>Maak de online Quiz</h6>
          </section>      
      </section>
        ),
        
        translateY: [18.4, 101.8],
        translateX: [60.4, -100]
      },
      {
        children: (
          <div style={blackContainerStyle}>
  
            <Image 
            src={imageUrls[5]} 
            fill
            alt="cityNight3"
            quality={1}
            />
          </div>
        ),
        translateY: [19, 90],
        opacity: [-2.3, 2.6]
      },
      {
        children: (
            loadOtherComponents && (
                <div style={{...blackContainerStyle, width: '5vw', height: '3vh', top: '-50%'}}>
                    <Image 
                    src={imageUrls[6]} 
                    quality={1}
                    fill
                    loading="lazy"
                    alt="cityNightMoon"
                    />
                </div>
            )
        ),
        translateY: [70, 30],
        translateX: [120, -130],
      },
      {
        children: (
            loadOtherComponents && (
                <div style={{...blackContainerStyle, width: '10vw', height: '8vh', top: '-0.3%'}}>
        
                    <Image 
                    src={imageUrls[7]} 
                    fill
                    alt="cityNightCloud"
                    quality={1}
                    loading="lazy"
                    />
                </div>
            )
        ),
        translateX: [120, 30],
        translateY: [70, 16]
      },
      {
        children: (
            loadOtherComponents && (
          <div style={{...blackContainerStyle, height: '90vh', top: '-1vh'}}>
            <Image 
            src={imageUrls[8]} 
            quality={1}
            loading="lazy"
            fill
            alt="cityNight2"
            
            />
          </div>
        )
        ),
        translateY: scrollThresholdReached ? [50, 50] : [90, -5.5],
      },
      {
        children: (
          <div style={{...narrowContainerStyle, height: '75vh', top: '25vh'}}>
  
            <Image 
            src={imageUrls[9]} 
            fill
            alt="cityNight1"
            quality={10}
            loading="lazy"
            />
          </div>
        ),
        translateY: scrollThresholdReached ? [50, 50] : [41.5, 60.8],
      },
      {
        children: (
          <div style={{...blackContainerStyle, backgroundColor: 'black'}}
          />
        ),
        opacity:  [-0.7, 1.1],
        translateY: [19, 91],
      },
      {
        children: (
            <section>
                <div style = {video}>
                  <Image 
                  src={'/homepage/meeting.png'} 
                  fill
                  alt="meeting"
                  />
                </div>
              <section style={videoText}>
                    <section>
                        <h4 style  = {secondHeaderStyle}>Wie zijn we en wat kunnen we voor jou betekenen?</h4>
                          <h5 style  = {secondParagraphStyle}>
                         Een groep enthousiaste mensen die geloven in dat het maken van een aantrekekelijke website het verschil kunnen maken .</h5>
                    </section>
                    <section style={endContainerStyle}>
                          <section style={buttonStyleFilled2}>
                              <Link href="/contact" style={buttonFilled2Link}>
                                  <h2 style = {{fontSize: 25, textAlign: 'center'}}>Maak een gratis afspraak</h2>
                              </Link>
                            </section>
                          <section style={buttonStyleStroke2}>    
                              <h2 style = {{fontSize: 25, textAlign: 'center', color: '#FF9449'}}>Maak de online Quiz</h2>
                          </section>     
                    </section>
              </section>
            </section>
        ),
        translateY: [90, 12.5],
        translateX: [100, 35]
      },
    ]
  
    const handleResize = useCallback(() => {
        if (gallaryRef.current) {
          setGallaryHeight(gallaryRef.current.offsetHeight);
        }
      }, []);
    
    const onScroll = useCallback(() => {
        const percentageThreshold = 47;
        const loadThreshhold = 1;

        const threshold = gallaryHeight * (percentageThreshold / 100);
        const thresholdLoading = gallaryHeight * (loadThreshhold / 100);

        const currentScrollPos = window.pageYOffset;
    

        //Freeze components on position threshold
        if (currentScrollPos > threshold && !scrollThresholdReached) {
            setScrollThresholdReached(true);
        } 
        else if (currentScrollPos <= threshold && scrollThresholdReached) {
            setScrollThresholdReached(false);
        }

        // Load component threshold        
        if (currentScrollPos > thresholdLoading && !loadOtherComponents) {
            setLoadOtherComponents(true);
        } else if (currentScrollPos <= thresholdLoading && loadOtherComponents) {
            setLoadOtherComponents(false);
        }
      }, [scrollThresholdReached, loadOtherComponents, gallaryHeight]);
    
      useEffect(() => {
        if (gallaryRef.current) {
          setGallaryHeight(gallaryRef.current.offsetHeight);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, [handleResize]);
    
      useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => {
          window.removeEventListener('scroll', onScroll);
        };
    }, [onScroll]);
    
    return (
        <div ref={gallaryRef}>
          <ParallaxProvider>
            <ParallaxBanner layers={animationOne} style={{ height: '200vh' }} />
          </ParallaxProvider>
        </div>
      )
    }