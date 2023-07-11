

import Image from 'next/image';
import NavBar from '@/components/Utilities/NavBar';
import Tile from '@/components/Utilities/Tile';
import Link from 'next/link'

import CostsCard from '@/components/Utilities/CostsCard'


function Services() {

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
        fontSize: '2vw',
        zIndex: 100,
        lineHeight: '2.5vw',
    };

    const paragraph = {
        marginTop: '2vh',
        width: '80%',
        marginLeft: '10%',
        textAlign: 'center',
        color: 'white',
        fontSize: '1vw',
        zIndex: 100,
        position: 'absolute',
        top: '33%',
        lineHeight: '1.5vw',
    };

    const buttonStyleFilled = {
        width: '80%',
        height: 70,
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
        height: 70,
        backgroundColor: 'white',
        borderRadius: 20,
        marginRight: 30,
        zIndex: 1000,
        position: 'absolute',
        top: '78%',
        marginLeft: '10%',
    };
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
        gridTemplateColumns: '1fr 1fr 1fr', 
        gridTemplateRows: 'auto auto', 
        height: '80vh', 
        width: '80vw',
        marginLeft: '8vw',
        paddingTop: '14vh',
    };

    const gridCostCardOne = {
        gridColumn: '1 / span 1', 
        gridRow: '1 / span 2', 
        backgroundColor: '#FFFBF9', 
        width: '100%', 
        borderRadius: 12,
        boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'
    }

    const gridCostCardTwo = {gridColumn: '2 / span 1', gridRow: '1 / span 2', backgroundColor: '#FFFBF9', width: '100%', borderRadius: 12, 
        boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'
    }

    const gridCostCardThree = {gridColumn: '3 / span 1', gridRow: '1 / span 2', backgroundColor: '#FFFBF9', width: '100%', borderRadius: 12, 
        boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'
    }
    
    const gridCard = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: 'auto auto',
        height: '90vh',
        width: '81.3vw',
        marginLeft: '8vw',
        paddingTop: '17vh',
        gap: '3vw'
    }

    const headerDiv = {position: 'relative', top: '14vh', left: '8vw', width: '100vw', zIndex: 2,}

    const headerSecond = {
        fontSize: 45, 
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
        fontSize: 28, 
        textAlign: 'center', 
        marginTop: '1.6vh'
    };
    
    const textStyleStroke = {
        fontSize: 28, 
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

            <div style={gridCostCardStyle}>
            
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
                    Wij hebben jouw beste pakket</h1>
            </div> 

            <div style={gridCard}>
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