
'use client'
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import './process.css';

const containerTextImage = {
    marginTop: 250,
    width: '84vw',
    height: '30vh',
    marginLeft: '16vw',
    flexDirection: 'row',
    display: 'flex'
}

const textSection = {
    width: '25vw',
    height: '30vh',
}

const textSectionRight = {
    width: '25vw',
    height: '30vh',
    marginLeft: '26vw'
}

const titleText= {
    fontSize: 'calc(1.25vw + 1.25vh)',
    fontWeight: 'bold',
    color: 'rgba(0, 200, 200, 1)',
    marginBottom: 35
}

const paragraph = {
    fontSize: 'calc(0.9vw + 0.9vh)',
    fontWeight: '300',
    color: 'rgba(0, 180, 180, 1)'  
}

const scrollIndicator = {
    position: 'absolute',
    top: '36vh',
    left: '48.5vw',
    height: '100vh',
    width: '0.4vw',
    backgroundColor: 'rgba(0, 255, 255, 1)',//'#FFECDF',
    zIndex: 1000,  // So it stays on top of other content
}

const titleContainerStyle = {
    display: 'flex', flexDirection: 'column', marginTop: 40
}

const titleContainer = {  width: '23.5vw', height: '5.5vh', backgroundColor: 'rgba(0, 201,201,1)', borderRadius: 20, }

const titleStyle = {fontSize: 'calc(0.9vw + 0.9vh)', textAlign: 'center', marginTop: '1vh'}

const paragraphContainer = { width: '23.5vw', height: '5.5vh', borderColor: 'rgba(0, 222,222,1)', borderWidth: 2, borderRadius: 20, marginTop: 20}

const paragraphTitle = {fontSize: 'calc(0.9vw + 0.9vh)', textAlign: 'center', marginTop: '1vh', color: 'rgba(0, 222,222,1)', fontWeight: '500'}

const rightImageContainer = {
    marginLeft: '19vw', 
    width: '18vw',
    height: '30vh', 
    position: 'relative'
}

const leftImageContainer = {
    width: '18vw',
    height: '30vh', 
    position: 'relative'
}

// TextBlock component 
const TextBlock = ({ text, title, image, isImageRight, index }) => (
    <>
        {isImageRight ? 
            <div style={containerTextImage}>
                    <div style={textSection}>
                        <h2 style={titleText}>{title}</h2>
                        <p style={paragraph}>{text}</p>
                        {index === 0 && 
                            <div style = {titleContainerStyle}>
                                <div style={titleContainer}>    
                                    <h2 style = {titleStyle}>Maak een gratis afspraak</h2>
                                </div>
                                <div style={paragraphContainer}>    
                                    <h2 style = {paragraphTitle}>Maak de online Quiz  {' >'}</h2>
                                </div>
                            </div>
                        }
                    </div>
                    <div style = {rightImageContainer}>
                        <Image src={image}    
                            fill
                            alt='image'
                            quality={50}
                            loading="lazy"
                        />
                    </div>

            </div>
            :
            <div style={containerTextImage}>
                
            <div style = {leftImageContainer}>
                <Image src={image} 
                    fill
                    alt='image'
                    quality={50}
                    loading="lazy"
                />
            </div>
                <div style={textSectionRight}>
                    <h2 style={titleText}>{title}</h2>
                    <p style={paragraph}>{text}</p>
                </div>
            </div>
            }
    </>
);

  


export default function Process() {
    const [loadOtherComponents, setLoadOtherComponents] = useState(false);

    const ScrollIndicator = () => {
        const [scroll, setScroll] = useState(0);
         // Define your maximum scroll height here
      
        const getDocHeight = () => {
            return Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            );
        };
      
        const calculateScroll = useCallback(() => {
            const scrollTop = window.scrollY;
            const winHeight = window.innerHeight;
            const docHeight = getDocHeight()  - 4 * winHeight; // Adjusting for the 200vh offset where component starts
            const totalDocScrollLength = docHeight;
            const maxScrollTop = 1.8 * docHeight 
        
            if (scrollTop > maxScrollTop) {
                // If the current scroll position is beyond the max, we do not update the scroll state
                return;
            }
        
            const scrollPosition = Math.floor(((scrollTop - 2.8 * winHeight) / totalDocScrollLength) * 100);
        
            const thresholdLoading = totalDocScrollLength * 0.3; // Set the threshold for loading to 30%
                
            console.log(scrollPosition)
            // Load component threshold        
            if (scrollPosition >= thresholdLoading && !loadOtherComponents) {
                setLoadOtherComponents(true);
            } else if (scrollPosition < thresholdLoading && loadOtherComponents) {
                setLoadOtherComponents(false);
            }
            
            setScroll(Math.max(0, scrollPosition)); // To ensure the scroll% doesn't go below 0
        }, [getDocHeight, setScroll]);
      
        useEffect(() => {
            window.addEventListener("scroll", calculateScroll);
            return () => window.removeEventListener("scroll", calculateScroll);
        }, [calculateScroll]);
      
        return (
            <div style={{ ...scrollIndicator, height: `${scroll}%` }} />
        );
      };
    
    const texts = [
        {
            text: `Wij helpen jou gratis opweg met jouw project. We zullen je tips geven over jouw idee en adviseren Wat voor jou de beste keuze is.`,
            title: "Gratis Gesprek",
            image: '/process/free_consultation1.png'
        },
        {
            text: "Mocht jij met ons verder willen als partner, Dan zullen we met jou een strategie verzinnen voor jouw idee. Dit houd in dat wij een markt analyse maken om voor jou de beste stappen te bedenken voor succes",
            title: "Strategie",
            image: '/process/strategy1.png'
        },
        {
            text: "Nu de strategie bedacht is, gaan we beginnen aan het ontwerp. We geven jou op basis van onze markt analyse een paar opties omtrendt het design van de website. ",
            title: "Design",
            image: '/process/design1.png'
        },
        {
            text: "Het design zal worden omgezet in een functionele website die online te zien zal zijn. Verder zullen we jouw website optimaliseren met onze marketing, zodat deze hoog in de google ranking komt.",
            title: "Implementatie",
            image: '/process/deploy1.png'
        }
        
        // ...More text strings here...
      ];

    return (
        (
            <div style = {{height: '250vh', width: '100vw', backgroundColor: 'white', position: 'relative', paddingTop: 200, backgroundColor: 'rgba(15, 28, 55, 1)'}}>
                    <div class="custom-shape-divider-top-1687345889" style = {{top: '-1%'}}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill= '#080A11'></path>
                        </svg>
                    </div>
                    <div style = {{position: 'relative', top: '1%', alignSelf: 'center', width: '100vw', zIndex: 2,}}>
                    <h1 style = {{
                        fontSize: 60, 
                        color: 'rgba(0, 255, 255, 1)',// '#FF6800', 
                        fontWeight: 'bold', 
                        textAlign: 'center',
                        textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)'}}>
                        HOE ZIET JOUW PROCESS ERUIT?</h1>
                    </div>
                        {texts.map((text, i) => (
                            <TextBlock 
                                text={text.text}
                                title={text.title} 
                                image={text.image}
                                isImageRight={i % 2 === 0} // Alternates the placement of the image
                                index={i} 
                                key={i}
                            />
                        ))}
                <ScrollIndicator />
                <div style = {{position: 'absolute', top: '35vh', left: '47.85vw', width: '1.7vw', height: '1.7vw', borderRadius: 20, backgroundColor: 'rgba(0, 215, 225, 1)', zIndex:1000}}/>
        </div> 
        )
    )
}

