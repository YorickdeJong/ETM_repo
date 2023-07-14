

import Image from 'next/image';
import NavBar from '@/components/Utilities/NavBar';
import Tile from '@/components/Utilities/Tile';
import Link from 'next/link'

import CostsCard from '@/components/Utilities/CostsCard'
import { useMediaQuery } from 'react-responsive';


function Services() {
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1400px)' });
    const isSmallScreen = useMediaQuery({ maxWidth: 1000 });


    const main = {
        height: '230vh',  position: 'relative',  backgroundColor: 'white'
    }

    const navbar = {position: 'absolute', left: '-0.39vw', top: '-0.68vh'}

    const header = {
        position: 'absolute',
        top: '14%',
        width: '80%',
        marginLeft: '10%',
        textAlign: 'center',
        color: 'white',
        fontSize: 'calc(1.3vw + 1.3vh)',
        zIndex: 100,
        lineHeight: '2.5vw',
    };

    const paragraph = {
        marginTop: '2vh',
        width: '80%',
        marginLeft: '10%',
        textAlign: 'center',
        color: 'white',
        fontSize: 'calc(0.63vw + 0.63vh)',
        zIndex: 100,
        position: 'absolute',
        top: '33%',
        lineHeight: '1.5vw',
    };

    const buttonStyleFilled = {
        width: '80%',
        height: '6.25vh',
        backgroundColor: '#1A5D6A',
        borderRadius: 20,
        marginRight: 30,
        zIndex: 1000,
        position: 'absolute',
        top: '68%',
        marginLeft: '10%',
    };

    const buttonStyleStroke = {
        width: '80%',
        height: '6.25vh',
        backgroundColor: 'white',
        borderRadius: 20,
        marginRight: 30,
        zIndex: 1000,
        position: 'absolute',
        top: '78%',
        marginLeft: '10%',
    };


    const gridCard = {

        display: 'grid', 
        gridTemplateColumns: isSmallScreen ? '1fr' : isMediumScreen ? '1fr 1fr' : '1fr 1fr 1fr', 
        // gridTemplateRows: isSmallScreen ? 'auto' : isMediumScreen ? 'auto auto' : 'auto auto auto', 
        height: '90vh', 
        width: '80vw',
        marginLeft: '8vw',
        paddingTop: '14vh',


    }

    const columnStyleOne = {
        gridColumn: '1 / span 1', 
        gridRow: '1 / span 2', 
        backgroundColor: '#6C7689', 
        width: '110%'
    }

    const columnStyleTwo = {
        gridColumn: '2 / span 1', 
        gridRow: '1 / span 1', 
        backgroundColor: 'rgba(234, 245, 245, 1)', 
        width: '90%', height: '97.5%', 
        borderRadius: 20, 
        marginLeft: '20%',
        boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'
    }

    const columnStyleTwoTwo = {
        gridColumn: '2 / span 1', 
        gridRow: '2 / span 1', 
        backgroundColor: 'rgba(255, 240, 243, 1)', 
        width: '90%', 
        height: '97.5%', 
        marginTop: '2.5%', 
        borderRadius: 20,  
        marginLeft: '20%',
        boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'
    }

    const columnStyleThreeOne = {
        gridColumn: '3 / span 1', 
        gridRow: '1 / span 1', 
        backgroundColor: 'rgba(255, 246, 240, 1)', 
        width: '90%', 
        height: '97.5%', 
        borderRadius: 20,  
        marginLeft: '15%',
        boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'
    }

    const columnStyleThreeTwo = {
        gridColumn: '3 / span 1', 
        gridRow: '2 / span 1', 
        backgroundColor: 'rgba(230, 255, 253, 1)', 
        width: '90%', 
        height: '97.5%', 
        marginTop: '2.5%', 
        borderRadius: 20,  
        marginLeft: '15%',
        boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'
    }


    const gridCostCardStyle = {
        display: 'grid',
        gridTemplateColumns: isSmallScreen ? '1fr' : isMediumScreen ? '1fr 1fr' : '1fr 1fr 1fr', 
        gridTemplateRows: isMediumScreen ? 'auto auto auto' : 'auto auto',
        height: isMediumScreen ? '180vh' : '90vh',
        width: isSmallScreen ? '60vw' : '81.3vw',
        marginLeft: isSmallScreen ? '8vw' : '8vw',
        paddingTop: '17vh',
        gap: '3vw'
    };
    
    const gridCostCardOne = {
        gridColumn: '1 / span 1', 
        gridRow: '1 / span 1', 
        backgroundColor: '#FFFBF9', 
        width: isSmallScreen ? '90%' : '100%', 
        borderRadius: 12,
        boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'
    }
    
    const gridCostCardTwo = {
        gridColumn: isSmallScreen ? '1 / span 1' : isMediumScreen ? '2 / span 1' : '2 / span 1', 
        gridRow: isSmallScreen ? '2 / span 1' : '1 / span 1', 
        backgroundColor: '#FFFBF9', 
        width: isSmallScreen ? '90%' :'100%', 
        borderRadius: 12, 
        boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'
    }
    
    const gridCostCardThree = {
        gridColumn: isSmallScreen ? '1 / span 1' : isMediumScreen ? '1 / span 1' : '3 / span 1', 
        gridRow: isSmallScreen ? '3 / span 1' : isMediumScreen ? '2 / span 1' : '1 / span 1', 
        backgroundColor: '#FFFBF9', 
        width: isSmallScreen ? '90%' :'100%', 
        borderRadius: 12, 
        boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'
    }


    const headerDiv = {position: 'relative', top: '14vh', left: '8vw', width: '100vw', zIndex: 2,}

    const headerSecond = {
        fontSize: 'calc(1.5vw + 1.5vh)',
        color: '#084652',
        fontWeight: '600', 
    }

    const imageContainerStyle = {
        width: '29.3vw', 
        height: '80.5vh', 
        position: 'absolute'
    };
    
    const overlayStyle = {
        width: '100%', 
        height: '80.5vh', 
        backgroundColor: '#0F1C37', 
        position: 'absolute', 
        opacity: 0.5
    };
    
    const linkStyle = {
        display: 'block', 
        height: '100%', 
        color: 'white', 
        textDecoration: 'none'
    };
    
    const textStyle = {
        fontSize: 'calc(0.88vw + 0.88vh)', 
        textAlign: 'center', 
        marginTop: '1.6vh'
    };
    
    const textStyleStroke = {
        fontSize: 'calc(0.88vw + 0.88vh)', 
        textAlign: 'center', 
        marginTop: '1.6vh', 
        color: '#1A5D6A'
    };

    const textOne = [
        "Vast scherp tarief",
        "Levertijd: 5 weken",
        "3D ontwerp",
        "Kleur- en materialadvies",
        "Lichtadvies",
        "Aankoopbegeleiding",
    ];
    
    const textTwo = [
        "Levertijd: 3 - 5 mnd",
        "Intakesessie",
        "Moodboard",
        "3D ontwerp",
        "Kleur- en materialadvies",
        "Lichtadvies",
        "Indelingsadvies",
        "Aankoopbegeleiding",
        "Projectbegeleiding",
    ];
    
    const textThree = [
        "Levertijd: > 4 mnd",
        "Brainstorm sessie",
        "Moodboard",
        "3D ontwerp",
        "Kleur- en materialadvies",
        "Lichtadvies",
        "Indelingsadvies",
        "Aankoopbegeleiding",
        "Projectbegeleiding",
        "Stylingadvies",
        "Verlichtingsplan",
        "Maatwerk",
        "Projectmanagement",
    ];

    return (
        <main style = {main}>
            <div style = {navbar}>
                <NavBar />
            </div>

            <div style={gridCard}>
            
                <div style={columnStyleOne}>
                    {/* Content of the first column goes here */}
                    <div style = {imageContainerStyle}>
                        <Image 
                            src = '/services/deal.jpg'
                            fill
                            alt = 'deal'
                            quality={4}
                        />
                        <div style = {overlayStyle}/>
                        <h1 style = {header}>Voor iedereen een website op maat!</h1>
                        <p style = {paragraph}>Order norwegian dragon-scale tap-dancing fanged wizard grindylows werewolf wool. Head petrificus ministry-of-magic polyjuice knew. 
                        Chalice stroke remembrall hunt fat phials mudbloods unwilling banges. Shack yer in restricted charm treats crush who. 
                        Glory impedimenta parvati dervish dirigible dead dirt stairs. Out downfall wingardium you robes keeper sorcerer&apos;s spleens feast.</p>

                        <div    
                            style={buttonStyleFilled} 
                            >
                                <Link href="/contact" style={linkStyle}>
                                    <h6 style = {textStyle}>Maak een gratis afspraak</h6>
                                </Link>
                            </div>
                                <div style={buttonStyleStroke}>    
                                <h6 style = {textStyleStroke}>Maak de online Quiz</h6>
                            </div>
                        </div>
                    </div>

                
                <div style={columnStyleTwo}>
                   <Tile 
                        image = '/services/lightbulb.png'
                        text = {['Business Strategie', 'Onderzoek', 'Data Analyse', 'Klant Onderzoek']}
                        imageWidth = {'4vw'}
                   />
                </div>


                <div style={columnStyleTwoTwo}>
                    <Tile 
                        image = '/services/marketinh.png'
                        text = {['Business Strategie', 'Onderzoek', 'Data Analyse', 'Klant Onderzoek']}
                        imageWidth = {'9vw'}
                   />
                    {/* Content of the second column second row goes here */}
                </div>
                
                <div style={columnStyleThreeOne}>
                    <Tile 
                        image = '/services/development.png'
                        text = {['Business Strategie', 'Onderzoek', 'Data Analyse', 'Klant Onderzoek']}
                        imageWidth = {'9vw'}
                   />
                </div>
                <div style={columnStyleThreeTwo}>
                    <Tile 
                        image = '/services/support.png'
                        text = {['Business Strategie', 'Onderzoek', 'Data Analyse', 'Klant Onderzoek']}
                        imageWidth = {'10vw'}
                   />
                </div>
            </div>
                
            <div style = {headerDiv}>
                <h1 style = {headerSecond}>
                    De beste pakketen op de markt</h1>
            </div> 

            <div style={gridCostCardStyle}>
                <div style={gridCostCardOne}>
                    <CostsCard 
                        texts = {textOne}
                        marginTop = '21.5vh'
                        stars = {[true, false, false]}
                        starsMarginLeft = '14vw'
                        title = 'Basis'
                        price = '2250-3000'
                    />
                </div>

                <div style={gridCostCardTwo}>
                    <CostsCard 
                        texts = {textTwo}
                        marginTop = '10.5vh'
                        stars = {[true, true, false]}
                        starsMarginLeft = '8vw'
                        title = 'Standaard'
                        price = '6000-11000'
                    />      
                </div>

                <div style={gridCostCardThree}>
                   <CostsCard 
                        texts = {textThree}
                        marginTop = '4vh'
                        stars = {[true, true, true]}
                        starsMarginLeft = '8.5vw'
                        title = 'Custom'
                        price = '13000'
                    /> 
                </div>
            </div>
        </main>
    );
}

export default Services;