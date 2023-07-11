

import Image from 'next/image';
import NavBar from '@/components/Utilities/NavBar';
import Tile from '@/components/Utilities/Tile';
import Link from 'next/link'

import CostsCard from '@/components/Utilities/CostsCard'


function Services() {

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
    }

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
    }

    const buttonStyleFilled = {
        width: '80%',
        height: 70,
        backgroundColor: '#1A5D6A', // change color on hover
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
        backgroundColor: 'white', // change color on hover
        borderRadius: 20,
        marginRight: 30,
        zIndex: 1000,
        position: 'absolute',
        top: '78%',
        marginLeft: '10%',
    };
    
    const list = {
        color: '#3A8594', 
        fontSize: 22
    
    }
    
    const textOne = [
        <li key="textOne1" style={list}>Vast scherp tarief</li>,
        <li key="textOne2" style={list}>Levertijd: 5 weken</li>,
        <li key="textOne3" style={list}>3D ontwerp</li>,
        <li key="textOne4" style={list}>Kleur- en materialadvies</li>,
        <li key="textOne5" style={list}>Lichtadvies</li>,
        <li key="textOne6" style={list}>Aankoopbegeleiding</li>,
    ];
    
    const textTwo = [
        <li key="textTwo1" style={list}>Levertijd: 3 - 5 mnd</li>,
        <li key="textTwo2" style={list}>Intakesessie</li>,
        <li key="textTwo3" style={list}>Moodboard</li>,
        <li key="textTwo4" style={list}>3D ontwerp</li>,
        <li key="textTwo5" style={list}>Kleur- en materialadvies</li>,
        <li key="textTwo6" style={list}>Lichtadvies</li>,
        <li key="textTwo7" style={list}>Indelingsadvies</li>,
        <li key="textTwo8" style={list}>Aankoopbegeleiding</li>,
        <li key="textTwo9" style={list}>Projectbegeleiding</li>,
    ];
    
    const textThree = [
        <li key="textThree1" style={list}>Levertijd: {'>'} 4 mnd</li>,
        <li key="textThree2" style={list}>Brainstorm sessie</li>,
        <li key="textThree3" style={list}>Moodboard</li>,
        <li key="textThree4" style={list}>3D ontwerp</li>,
        <li key="textThree5" style={list}>Kleur- en materialadvies</li>,
        <li key="textThree6" style={list}>Lichtadvies</li>,
        <li key="textThree7" style={list}>Indelingsadvies</li>,
        <li key="textThree8" style={list}>Aankoopbegeleiding</li>,
        <li key="textThree9" style={list}>Projectbegeleiding</li>,
        <li key="textThree10" style={list}>Stylingadvies</li>,
        <li key="textThree11" style={list}>Verlichtingsplan</li>,
        <li key="textThree12" style={list}>Maatwerk</li>,
        <li key="textThree13" style={list}>Projectmanagement</li>,
    ];
    return (
        <main style = {{height: '230vh',  position: 'relative',  backgroundColor: 'white'}}>
            <div style = {{position: 'absolute', left: '-0.39vw', top: '-0.68vh'}}>
                <NavBar />
            </div>

            <div style={{
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr 1fr', 
                gridTemplateRows: 'auto auto', 
                height: '80vh', 
                width: '80vw',
                marginLeft: '8vw',
                paddingTop: '14vh',
            }}>
            
                <div style={{gridColumn: '1 / span 1', gridRow: '1 / span 2', backgroundColor: '#6C7689', width: '110%'}}>
                    {/* Content of the first column goes here */}
                    <div style = {{width: '29.3vw', height: '80.5vh', position: 'absolute'}}>
                        <Image 
                            src = '/services/deal.png'
                            fill
                            alt = 'deal'
                        />
                        <div style = {{width: '100%', height: '80.5vh', backgroundColor: '#0F1C37', position: 'absolute', opacity: 0.5}}/>
                        <h2 style = {header}>Welke optie is het beste voor jou?</h2>
                        <p style = {paragraph}>Order norwegian dragon-scale tap-dancing fanged wizard grindylows werewolf wool. Head petrificus ministry-of-magic polyjuice knew. 
                        Chalice stroke remembrall hunt fat phials mudbloods unwilling banges. Shack yer in restricted charm treats crush who. 
                        Glory impedimenta parvati dervish dirigible dead dirt stairs. Out downfall wingardium you robes keeper sorcerer&apos;s spleens feast.</p>

                        <div    
                            style={buttonStyleFilled} 
                            >
                                <Link href="/contact" style={{ display: 'block', height: '100%', color: 'white', textDecoration: 'none' }}>
                                    <h2 style = {{fontSize: 28, textAlign: 'center', marginTop: '1.6vh'}}>Maak een gratis afspraak</h2>
                                </Link>
                            </div>
                                <div style={buttonStyleStroke}>    
                                <h2 style = {{fontSize: 28, textAlign: 'center', marginTop: '1.6vh', color: '#1A5D6A'}}>Maak de online Quiz</h2>
                            </div>
                        </div>
                    </div>

                
                <div style={{gridColumn: '2 / span 1', gridRow: '1 / span 1', backgroundColor: 'rgba(234, 245, 245, 1)', width: '90%', height: '97.5%', borderRadius: 20, marginLeft: '20%',
                boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'
                }}>
                   <Tile 
                        image = '/services/lightbulb.png'
                        text = {['Business Strategie', 'Onderzoek', 'Data Analyse', 'Klant Onderzoek']}
                        imageWidth = {'4vw'}
                   />
                </div>


                <div style={{gridColumn: '2 / span 1', gridRow: '2 / span 1', backgroundColor: 'rgba(255, 240, 243, 1)', width: '90%', height: '97.5%', marginTop: '2.5%', borderRadius: 20,  marginLeft: '20%',
                boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'}}>
                    <Tile 
                        image = '/services/marketinh.png'
                        text = {['Business Strategie', 'Onderzoek', 'Data Analyse', 'Klant Onderzoek']}
                        imageWidth = {'9vw'}
                   />
                    {/* Content of the second column second row goes here */}
                </div>
                
                <div style={{gridColumn: '3 / span 1', gridRow: '1 / span 1', backgroundColor: 'rgba(255, 246, 240, 1)', width: '90%', height: '97.5%', borderRadius: 20,  marginLeft: '15%',
                boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'}}>
                    <Tile 
                        image = '/services/development.png'
                        text = {['Business Strategie', 'Onderzoek', 'Data Analyse', 'Klant Onderzoek']}
                        imageWidth = {'9vw'}
                   />
                </div>
                <div style={{gridColumn: '3 / span 1', gridRow: '2 / span 1', backgroundColor: 'rgba(230, 255, 253, 1)', width: '90%', height: '97.5%', marginTop: '2.5%', borderRadius: 20,  marginLeft: '15%',
                boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'}}>
                    <Tile 
                        image = '/services/support.png'
                        text = {['Business Strategie', 'Onderzoek', 'Data Analyse', 'Klant Onderzoek']}
                        imageWidth = {'10vw'}
                   />
                </div>
            </div>
                
            <div style = {{position: 'relative', top: '14vh', left: '8vw', width: '100vw', zIndex: 2,}}>
                <h1 style = {{
                    fontSize: 45, 
                    color: '#084652',// '#FF6800', 
                    fontWeight: '600', 
                }}>
                    Wij hebben jouw beste pakket</h1>
            </div> 

            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gridTemplateRows: 'auto auto',
                height: '90vh',
                width: '81.3vw',
                marginLeft: '8vw',
                paddingTop: '17vh',
                gap: '3vw'
            }}>
                <div style={{
                    gridColumn: '1 / span 1', 
                    gridRow: '1 / span 2', 
                    backgroundColor: '#FFFBF9', 
                    width: '100%', 
                    borderRadius: 12,
                    boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'
                }}>
                    <CostsCard 
                        texts = {textOne}
                        marginTop = '21.5vh'
                        stars = {[true, false, false]}
                        starsMarginLeft = '14vw'
                        title = 'Basis'
                        price = '4000'
                    />
                </div>

                <div style={{gridColumn: '2 / span 1', gridRow: '1 / span 2', backgroundColor: '#FFFBF9', width: '100%', borderRadius: 12, 
                boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'
                }}>
                    <CostsCard 
                        texts = {textTwo}
                        marginTop = '10.5vh'
                        stars = {[true, true, false]}
                        starsMarginLeft = '8vw'
                        title = 'Standaard'
                        price = '8000'
                    />      
                </div>

                <div style={{gridColumn: '3 / span 1', gridRow: '1 / span 2', backgroundColor: '#FFFBF9', width: '100%', borderRadius: 12, 
                boxShadow: '1px 5px 7px rgba(0, 0, 0, 0.3)'
                }}>
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