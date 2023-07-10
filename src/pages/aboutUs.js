import Image from "next/image";
import NavBar from '@/components/Utilities/NavBar';



function AboutUs() {
    const header = {
        fontSize: 40,
        fontWeight: '500', 
        marginTop: 35,
        color: 'white'
    }

    const paragraph = {
        fontSize: 22,
        lineHeight: '150%',
        fontWeight: '400',
        marginTop: 15,
        width: '15vw',
        textAlign: 'center',
        color: '#ADAFB4'
    }

    const headerRectangleLeft = {
        fontSize: 60,
        fontWeight: '500', 
        marginTop: '15vh',
        marginLeft: '3vw',
        color: '#D0F6FD'
    }

    const paragraphRectangleLeft = {
        fontSize: 27,
        lineHeight: '150%',
        fontWeight: '400',
        marginLeft: '3vw',
        width: '80%',
        marginTop: '3vh',
        color: '#EFF7F6'
    }

    const headerRectangleRight = {
        fontSize: 60,
        fontWeight: '500', 
        marginTop: '15vh',
        marginLeft: '3vw',
        color: '#3A8594'
    }

    const paragraphRectangleRight = {
        fontSize: 27,
        lineHeight: '150%',
        fontWeight: '400',
        marginLeft: '3vw',
        width: '80%',
        marginTop: '3vh',
        color: '#73ADA6'
    }



    const rectangleStyle = {
        justifyContent: 'center',
        height: '70vh',
        color: 'white',
        padding: '2rem',
      };
    
      const leftRectangle = {
        ...rectangleStyle,
        width: '35vw',  // Adjust according to your need
        backgroundColor: '#002E37',
    };
    
    const rightRectangle = {
        ...rectangleStyle,
        width: '65vw',  // Adjust according to your need
        backgroundColor: '#D0F6FD',
    };


    const descriptions = [
        "Venom parvati peg-leg boggarts bee expecto patronus eyes vulture-hat. 12 sorcerer's kiss keeper should restricted now sing quidditch hat.",
        "Venom parvati peg-leg boggarts bee expecto patronus eyes vulture-hat. 12 sorcerer's kiss keeper should restricted now sing quidditch hat.",
        "Venom parvati peg-leg boggarts bee expecto patronus eyes vulture-hat. 12 sorcerer's kiss keeper should restricted now sing quidditch hat.",
        "Venom parvati peg-leg boggarts bee expecto patronus eyes vulture-hat. 12 sorcerer's kiss keeper should restricted now sing quidditch hat."
    ]

    return (
        <main style = {{
            height: '150vh', 
            width: '100vw', 
            backgroundColor: 'white',
            }}>

            <NavBar />

            {/* New div for the background */}
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: '#0F1C37',
                clipPath: 'polygon(0 60vh, 100vw 50vh, 100vw 110vh, 0 110vh)',
               
            }} />

            
            <div style = {{position: 'absolute', top: '18vh', width: '100vw'}}>
                <h1 style = {{
                    fontSize: 55, 
                    color: '#0F1C37', 
                    textAlign: 'center',
                    fontWeight: '500', 
                    textAlign: 'center',
                  }}>Ontmoet jouw team</h1>
                <p style = {{marginTop: '-2vh', textAlign: 'center', fontSize: 35, color: '#8A8889', width: '30vw', marginLeft: '34vw'}}>
                Een vindbare, goedoogende website hoeft niet duur te zijn
                </p>
            </div>



                <div style = {{
                    display: 'grid', 
                    gridTemplateRows: '1fr', 
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    position: 'absolute',
                    gap: '8vw',  // space between grid cells
                    marginLeft: '8vw',
                    marginTop: '45vh',
                    zIndex: 1000
                }}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{ 
                        position: 'relative',
                        borderRadius: '50%',  // make the div circular
                        width: '12vw',
                        height: '12vw',
                        backgroundColor: '#9CEFFF', 
                        overflow: 'hidden'
                    }}>
                    <Image 
                        src = '/pf-foto/yorickpf2.png'
                        layout='responsive'
                        width={3}  // ratio's width
                        height={4}
                    />
                    </div>
                    <h3 style = {header}>Olivier</h3>
                    <p style = {paragraph}>{descriptions[0]}</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{ 
                        position: 'relative',
                        borderRadius: '50%',  // make the div circular
                        width: '12vw',
                        height: '12vw',
                        backgroundColor: '#92CDC6', 
                        overflow: 'hidden'
                    }}>
                    <Image 
                        src = '/pf-foto/yorickpf2.png'
                        layout='responsive'
                        width={3}  // ratio's width
                        height={4}
                    />
                    </div>
                    <h3 style = {header}>Yorick</h3>
                    <p style = {paragraph}>{descriptions[1]}</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{ 
                        position: 'relative',
                        borderRadius: '50%',  // make the div circular
                        width: '12vw',
                        height: '12vw',
                        backgroundColor: '#55B8CB', 
                        overflow: 'hidden'
                    }}>
                    <Image 
                        src = '/pf-foto/yorickpf2.png'
                        layout='responsive'
                        width={3}  // ratio's width
                        height={4}
                    />
                    </div>
                    <h3 style = {header}>Arthike</h3>
                    <p style = {paragraph}>{descriptions[2]}</p>
                </div>

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{ 
                        position: 'relative',
                        borderRadius: '50%',  // make the div circular
                        width: '12vw',
                        height: '12vw',
                        backgroundColor: '#92CDC6', 
                        overflow: 'hidden'
                    }}>
                    <Image 
                        src = '/pf-foto/yorickpf2.png'
                        layout='responsive'
                        width={3}  // ratio's width
                        height={4}
                    />
                    </div>
                    <h3 style = {header}>Nick</h3>
                    <p style = {paragraph}>{descriptions[3]}</p>
                </div>
            </div>
            
            <div style={{ 
                display: 'flex',
                flexDirection: 'row',  
                position: 'relative',
                width: '100vw',
                top: '98vh',
                height: '70vh'
            }}>
            <div style={leftRectangle}>
                <h1 style={headerRectangleLeft}>Ons Verhaal</h1>
                <p style={paragraphRectangleLeft}>Telescope die half-blood headmaster must floor teacup catherine wormtail. Winky soul potter woes dementors room. 
                Forest back goblet fairy black answer managed through candles wizard.
                 Holly stroke erumpent answer rise our time-turner cursed. Mimbletonia come gnomes dirt die chalice.</p>
            </div>

            <div style={rightRectangle}> 
            <h1 style={headerRectangleRight}>Waarom zijn wij ons bedrijf begonnen?</h1>
            <p style={paragraphRectangleRight}>Would law blood eyes beaded follow potter other. Sorcerer's us hunt kiss yew spider me forbidden tweak. Mischief glory patronum beaded 
            I knitted treacle train whomping. Squashy hagrid hippogriffs snivellus downfall weasley shrieking ollivanders clean shrieking. Our emporium grindylows alohamora bag letters better us fire.
            Locket roaring red 9¾ many fell 50 transfiguration crookshanks sound. Alohamora daisies sorcerer's dagger tap-dancing voices locomotor portkey godric’s. 
            Honeydukes padma flying snape brass jinxes tart. Potter beaters to half-moon-glasses sirius got inches. Must turns lily norwegian nitwit are phoenix quidditch answer.</p>
            </div> 
            </div>


        </main>
    )
}

export default AboutUs;

