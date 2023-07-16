

import Image from 'next/image';
import NavBar from '@/components/Utilities/NavBar';
import Tile from '@/components/Utilities/Tile';
import Link from 'next/link'

import CostsCard from '@/components/Utilities/CostsCard'
import { useMediaQuery } from 'react-responsive';


function Services() {
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1600px)' });
    const isSmallScreen = useMediaQuery({ maxWidth: 800 });


    const main = {
        height: '230vh',  
        position: 'relative',  
        backgroundColor: 'white',
    }

    const navbar = {
        position: 'absolute', 
        left: '-0.39vw', 
        top: '-0.68vh'
    }

    const header = {
        position: 'relative',
        top: isSmallScreen ? '10%' : '14%',
        width: '80%',
        marginLeft: '10%',
        textAlign: 'center',
        color: 'white',
        fontSize: isSmallScreen ? 'calc(2.3vw + 2.3vh)' : isMediumScreen ? 'calc(1.8vw + 1.8vh)' : 'calc(1.3vw + 1.3vh)',
        zIndex: 100,
        lineHeight: isSmallScreen ? 1.5 : isMediumScreen ? 1.3 : '2.5vw',
    };

    const paragraph = {
        marginTop: '2vh',
        width: '80%',
        marginLeft: '10%',
        textAlign: 'center',
        color: 'white',
        fontSize:  isSmallScreen ? 'calc(1.1vw + 1.1vh)' : isMediumScreen ? 'calc(1.3vw + 0.9vh)' : 'calc(0.73vw + 0.73vh)',
        zIndex: 100,
        position: 'absolute',
        top: isMediumScreen ? '29%' : '33%',
        lineHeight: isSmallScreen ? 1.8 : isMediumScreen ? 1.5 : '1.5vw',
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
        top: isSmallScreen ? '78%' : isMediumScreen ? '75%' : '78%',
        marginLeft: '10%',
    };


    const gridCard = {
        display: 'grid', 
        gridTemplateColumns: isSmallScreen ? '1fr' : isMediumScreen ? '1fr 1fr' : '1fr 1fr 1fr', 
        gridTemplateRows: isSmallScreen ? '1fr 1fr 1fr 1fr 1fr 1fr 1fr' : isMediumScreen ? '1fr 1fr 1fr 1fr' : '1fr 1fr', 
        height: isSmallScreen ? '200vh' : '90vh', 
        width: isSmallScreen ? '90vw' : (isMediumScreen ? '85vw' : '80vw'),
        marginLeft: isSmallScreen ? '7vw' : (isMediumScreen ? '4vw' : '8vw'),
        paddingTop: '14vh',
        gap: isSmallScreen && '1%'
    }
    
    const columnStyleOne = {
        gridColumn: '1 / span 1', 
        gridRow: isSmallScreen ? '1 / span 3' : isMediumScreen ? '1 / span 4' : '1 / span 2', 
        backgroundColor: '#0F1C37', 
        width: isSmallScreen ? '90%' : '110%',
        position: 'relative',
        height: '100%', 
        
    }
    
    const columnStyleTwo = {
        gridColumn: isSmallScreen ? '1 / span 1' : '2 / span 1',
        gridRow: isSmallScreen ? '4 / span 1' : isMediumScreen ? '1 / span 1' : '1 / span 1',
        backgroundColor: 'rgba(234, 245, 245, 1)',
        width: '90%',
        height: '97.5%',
        borderRadius: 20,
        marginTop: isMediumScreen ? '2.5%' : '0%',
        marginLeft: isSmallScreen ? '0%' : '20%',
        boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)',
    };
    
    const columnStyleTwoTwo = {
        gridColumn: isSmallScreen ? '1 / span 1' : '2 / span 1',
        gridRow: isSmallScreen ? '5 / span 1' : isMediumScreen ? '2 / span 1' : '2 / span 1',
        backgroundColor: 'rgba(255, 240, 243, 1)',
        width: '90%',
        height: '97.5%',
        marginTop: isMediumScreen ? '2.5%' : '2.5%',
        borderRadius: 20,
        marginLeft: isSmallScreen ? '0%' :'20%',
        boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)',
    };
    
    const columnStyleThreeOne = {
        gridColumn: isSmallScreen ? '1 / span 1' : isMediumScreen ? '2 / span 1' : '3 / span 1',
        gridRow: isSmallScreen ? '6 / span 1' : isMediumScreen ? '3 / span 1' : '1 / span 1',
        backgroundColor: 'rgba(255, 246, 240, 1)',
        width: '90%',
        height: '97.5%',
        borderRadius: 20,
        marginTop: isMediumScreen ? '2.5%' : '0%',
        marginLeft: isSmallScreen ? '0%' : isMediumScreen ? '20%' : '15%',
        boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)',
    };
    
    const columnStyleThreeTwo = {
        gridColumn: isSmallScreen ? '1 / span 1' : isMediumScreen ? '2 / span 1' : '3 / span 1',
        gridRow: isSmallScreen ? '7 / span 1' : isMediumScreen ? '4 / span 1' : '2 / span 1',
        backgroundColor: 'rgba(230, 255, 253, 1)',
        width: '90%',
        height: '97.5%',
        marginTop: isMediumScreen ? '2.5%' : '2.5%',
        borderRadius: 20,
        marginLeft: isSmallScreen ? '0%' : isMediumScreen ? '20%' : '15%',
        boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)',
    };

    const gridCostCardStyle = {
        display: 'grid',
        gridTemplateColumns: isSmallScreen ? '1fr' : isMediumScreen ? '1fr 1fr' : '1fr 1fr 1fr', 
        gridTemplateRows: isMediumScreen ? 'auto auto auto' : 'auto auto',
        width: isSmallScreen ? '90vw' : (isMediumScreen ? '90vw' : '81.3vw'),
        marginLeft: isSmallScreen ? '7vw' : (isMediumScreen ? '4vw' : '8vw'),
        paddingTop: '8vh',
        gap: isSmallScreen ? '3vh': '3vw'
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
        boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)',
        marginBottom: '5vh'
    }


    const headerDiv = {
        marginTop: isSmallScreen ? '10vh' : isMediumScreen ? '40vh' : '17vh', 
        marginLeft: isSmallScreen ? '7vw' : '8vw',
        width: isSmallScreen ? '90vw' : '100vw', 
        zIndex: 2000,
    }

    const headerSecond = {
        fontSize: isSmallScreen ? 'calc(2.3vw + 2.3vh)' : isMediumScreen ? 'calc(1.9vw + 1.9vh)' : 'calc(1.5vw + 1.5vh)',
        color: '#084652',
        fontWeight: '600', 
    }

    
    const linkStyle = {
        display: 'block', 
        height: '100%', 
        color: 'white', 
        textDecoration: 'none'
    };
    
    const textStyle = {
        fontSize: isSmallScreen ? 'calc(1.45vw + 1.45vh)' : isMediumScreen ? 'calc(1.1vw + 1.1vh)' : 'calc(0.88vw + 0.88vh)', 
        textAlign: 'center', 
        marginTop: isSmallScreen ? 'calc(1.2vw + 1.2vh)' : isMediumScreen ? '1.9vh' : '1.6vh'
    };
    
    const textStyleStroke = {
        fontSize: isSmallScreen ? 'calc(1.45vw + 1.45vh)' : isMediumScreen ? 'calc(1.1vw + 1.1vh)' : 'calc(0.88vw + 0.88vh)', 
        textAlign: 'center', 
        marginTop: isSmallScreen ? 'calc(1.2vw + 1.2vh)' : isMediumScreen ? '1.9vh' : '1.6vh',
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
                        <Image 
                            src = '/services/deal.jpg'
                            fill
                            alt = 'deal'
                            quality={4}
                            style = {{opacity: 0.5}}
                        />
                        <h2 style = {header}>Welke optie is het beste voor jou?</h2>
                        <p style = {paragraph}>Order norwegian dragon-scale tap-dancing fanged wizard grindylows werewolf wool. Head petrificus ministry-of-magic polyjuice knew. 
                        Chalice stroke remembrall hunt fat phials mudbloods unwilling banges. Shack yer in restricted charm treats crush who. 
                        Glory impedimenta parvati dervish dirigible dead dirt stairs. Out downfall wingardium you robes keeper sorcerer&apos;s spleens feast.</p>

                        <div    
                        style={buttonStyleFilled} 
                        >
                            <Link href="/contact" style={linkStyle}>
                                <h2 style = {textStyle}>Maak een gratis afspraak</h2>
                            </Link>
                        </div>
                            <div style={buttonStyleStroke}>    
                            <h2 style = {textStyleStroke}>Maak de online Quiz</h2>
                        </div>
                </div>


                
                <div style={columnStyleTwo}>
                   <Tile 
                        image = '/services/lightbulb.png'
                        text = {['Business Strategie', 'Onderzoek', 'Data Analyse', 'Klant Onderzoek']}
                        imageWidth = {isSmallScreen ? '10vw' : '4vw'}
                   />
                </div>


                <div style={columnStyleTwoTwo}>
                    <Tile 
                        image = '/services/marketinh.png'
                        text = {['Business Strategie', 'Onderzoek', 'Data Analyse', 'Klant Onderzoek']}
                        imageWidth = {isSmallScreen ? '18vw' :'9vw'}
                   />
                    {/* Content of the second column second row goes here */}
                </div>
                
                <div style={columnStyleThreeOne}>
                    <Tile 
                        image = '/services/development.png'
                        text = {['Business Strategie', 'Onderzoek', 'Data Analyse', 'Klant Onderzoek']}
                        imageWidth = {isSmallScreen ? '20vw' :'9vw'}
                   />
                </div>
                <div style={columnStyleThreeTwo}>
                    <Tile 
                        image = '/services/support.png'
                        text = {['Business Strategie', 'Onderzoek', 'Data Analyse', 'Klant Onderzoek']}
                        imageWidth = {isSmallScreen ? '20vw' :'10vw'}
                   />
                </div>
            </div>
                
            <div style = {headerDiv}>
                <h1 style = {headerSecond}>
                    Wij hebben jouw beste pakket</h1>
            </div> 

            <div style={gridCostCardStyle}>
                <div style={gridCostCardOne}>
                    <CostsCard 
                        texts = {textOne}
                        marginTop = '21.5vh'
                        stars = {[true, false, false]}
                        starsMarginLeft = '14vw'
                        title = 'Basis'
                        price = '4000'
                    />
                </div>

                <div style={gridCostCardTwo}>
                    <CostsCard 
                        texts = {textTwo}
                        marginTop = '10.5vh'
                        stars = {[true, true, false]}
                        starsMarginLeft = '8vw'
                        title = 'Standaard'
                        price = '8000'
                    />      
                </div>

                <div style={gridCostCardThree}>
                   <CostsCard 
                        texts = {textThree}
                        marginTop = '4vh'
                        stars = {[true, true, true]}
                        starsMarginLeft = '8.5vw'
                        title = 'Custom'
                        price = '15000'
                    /> 
                </div>
            </div>
        </main>
    );
}

export default Services;