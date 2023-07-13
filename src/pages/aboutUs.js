
import Image from "next/image";
import NavBar from '@/components/Utilities/NavBar';
import { useMediaQuery } from "react-responsive";


function AboutUs() {
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1700px)' });
    const isSmallScreen = useMediaQuery({ maxWidth: 1200 });


    const header = {
        fontSize: isMediumScreen ? 'calc(1.5vw + 1.5vh)' : 'calc(1.1vw + 1.1vh)',
        fontWeight: '500', 
        marginTop: isMediumScreen ? 25 : 50,
        color: 'white'
    }

    const paragraph = {
        fontSize: isMediumScreen ? 'calc(0.95vw + 0.95vh)' : 'calc(0.65vw + 0.65vh)',
        lineHeight: '150%',
        fontWeight: '400',
        width: isMediumScreen ?  '30vw' : '15vw',
        marginTop: -10,
        textAlign: 'center',
        color: 'rgba(213, 227, 230, 1)'
    }

    const headerRectangleLeft = {
        fontSize: isMediumScreen ? 'calc(1.75vw + 1.75vh)' : 'calc(1.5vw + 1.5vh)',
        fontWeight: '500', 
        marginTop: '15vh',
        marginLeft: '3vw',
        color: '#D0F6FD'
    }

    const paragraphRectangleLeft = {
        fontSize: isMediumScreen ? 'calc(1.15vw + 1.15vh)' : 'calc(0.85vw + 0.85vh)',
        lineHeight: '150%',
        fontWeight: '400',
        marginLeft: '3vw',
        width: '80%',
        marginTop: '3vh',
        color: '#EFF7F6'
    }

    const headerRectangleRight = {
        fontSize: isMediumScreen ? 'calc(1.75vw + 1.75vh)' : 'calc(1.5vw + 1.5vh)',
        fontWeight: '500', 
        marginTop: '15vh',
        marginLeft: '3vw',
        color: '#3A8594'
    }

    const paragraphRectangleRight = {
        fontSize: isMediumScreen ? 'calc(1.15vw + 1.15vh)' : 'calc(0.85vw + 0.85vh)',
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

        // Style Objects
    const mainStyle = {
        height: '150vh', 
        width: '100vw', 
        backgroundColor: 'white',
    };

    const newDivStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: '#0F1C37',
        clipPath: 'polygon(0 60vh, 100vw 50vh, 100vw 110vh, 0 110vh)',
    };

    const anotherDivStyle = {
        position: 'absolute', 
        top: isMediumScreen ?  '9vh' : '18vh', 
        width: '100vw'
    };

    const h1Style = {
        fontSize:  isMediumScreen ? 'calc(1.83vw + 1.83vh)' : 'calc(1.63vw + 1.63vh)',
        color: '#0F1C37', 
        textAlign: 'center',
        fontWeight: '500', 
    };

    const pStyle = {
        marginTop: '-2vh', 
        textAlign: 'center', 
        fontSize: isMediumScreen ? 'calc(1.33vw + 1.33vh)' : 'calc(1.13vw + 1.13vh)',
        color: '#8A8889', 
        width: isMediumScreen ? '60vw' : '30vw', 
        marginLeft: isMediumScreen ? '20vw' : '35vw'
    };

    const gridStyle = {
        display: 'grid', 
        gridTemplateRows: '1fr', 
        gridTemplateColumns: isMediumScreen ? '1fr 1fr' : '1fr 1fr 1fr 1fr',
        alignSelft: 'center',
        position: 'absolute',
        width: isMediumScreen ? '80vw' : '100vw',
        marginLeft : isMediumScreen ? '10vw' : '0vw',
        gap: '2vw',  // space between grid cells
        alignItems: 'center',
        marginTop: isMediumScreen ? '30vh' : '45vh',
        zIndex: 1000
    };

    const flexColumnStyle = {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'
    };

    const circularDivStyle = (backgroundColor) => ({
        position: 'relative',
        borderRadius: '50%',  // make the div circular
        width: isMediumScreen ? '16vw' : '12vw',
        height: isMediumScreen ? '16vw' : '12vw',
        backgroundColor: backgroundColor, 
        overflow: 'hidden'
    });


    // Additional Style Objects
    const imageStyle = {
        position: 'relative',
        borderRadius: '50%',
        width: isMediumScreen ? '16vw' : '12vw',
        height: isMediumScreen ? '16vw' : '12vw',
        backgroundColor: '#92CDC6', 
        overflow: 'hidden'
    };

    const flexColumnCenterStyle = {
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'
    };

    const largeFlexRowStyle = {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        width: '100vw',
        top: isMediumScreen ? '110vh' : '98vh',
        height: '70vh'
    };


    // Additional Style Objects
    const imageStyle1 = {
        position: 'relative',
        borderRadius: '50%',
        width: isMediumScreen ? '16vw' : '12vw',
        height: isMediumScreen ? '16vw' : '12vw',
        backgroundColor: '#55B8CB', 
        overflow: 'hidden'
    };

    const imageStyle2 = {
        position: 'relative',
        borderRadius: '50%',
        width: isMediumScreen ? '16vw' : '12vw',
        height: isMediumScreen ? '16vw' : '12vw',
        backgroundColor: '#92CDC6', 
        overflow: 'hidden'
    };

    const blueOverlay = {
        position: 'absolute',
        width: '100%',
        height: '130vh',
        backgroundColor: '#0F1C37',
        clipPath:  isMediumScreen ?
        'polygon(0 40vh, 100vw 30vh, 100vw 160vh, 0 160vh)' :
        'polygon(0 60vh, 100vw 50vh, 100vw 110vh, 0 110vh)',
    }

    return (
        <main style={mainStyle}>

        <NavBar />

            {/* New div for the background */}
            <div style={blueOverlay} />

            
            <div style={newDivStyle} />

            <div style={anotherDivStyle}>
                <h1 style={h1Style}>Ontmoet jouw team</h1>
                <p style={pStyle}>Een vindbare, goedoogende website hoeft niet duur te zijn</p>
            </div>



            <div style={gridStyle}>
            <div style={flexColumnStyle}>
                <div style={circularDivStyle('#9CEFFF')}>
                    <Image src='/pf-foto/yorickpf2.png' layout='responsive' width={3} height={4} alt='Yorick' />
                </div>
                <h3 style={header}>Olivier</h3>
                <p style={paragraph}>{descriptions[0]}</p>
            </div>

            <div style={flexColumnCenterStyle}>
                <div style={imageStyle}>
                    <Image 
                        src='/pf-foto/yorickpf2.png'
                        layout='responsive'
                        width={3}
                        height={4}
                        alt="Yorick"
                    />
                </div>
                <h3 style={header}>Yorick</h3>
                <p style={paragraph}>{descriptions[1]}</p>
            </div>

            <div style={flexColumnCenterStyle}>
                <div style={imageStyle1}>
                    <Image 
                        src='/pf-foto/yorickpf2.png'
                        layout='responsive'
                        width={3}
                        height={4}
                        alt="Yorick"
                    />
                </div>
                <h3 style={header}>Arthike</h3>
                <p style={paragraph}>{descriptions[2]}</p>
            </div>
            <div style={flexColumnCenterStyle}>
                <div style={imageStyle2}>
                    <Image 
                        src='/pf-foto/yorickpf2.png'
                        layout='responsive'
                        width={3}
                        height={4}
                        alt="Yorick"
                    />
                </div>
                <h3 style={header}>Nick</h3>
                <p style={paragraph}>{descriptions[3]}</p>
            </div>
            </div>
            
            <div style={largeFlexRowStyle}>
            <div style={leftRectangle}>
                <h1 style={headerRectangleLeft}>Ons Verhaal</h1>
                <p style={paragraphRectangleLeft}>Telescope die half-blood headmaster must floor teacup catherine wormtail. Winky soul potter woes dementors room. 
                Forest back goblet fairy black answer managed through candles wizard.
                Holly stroke erumpent answer rise our time-turner cursed. Mimbletonia come gnomes dirt die chalice.</p>
            </div>

            <div style={rightRectangle}> 
                <h1 style={headerRectangleRight}>Waarom zijn wij ons bedrijf begonnen?</h1>
                <p style={paragraphRectangleRight}>Would law blood eyes beaded follow potter other. Sorcerer&apos;s us hunt kiss yew spider me forbidden tweak. Mischief glory patronum beaded 
                I knitted treacle train whomping. Squashy hagrid hippogriffs snivellus downfall weasley shrieking ollivanders clean shrieking. Our emporium grindylows alohamora bag letters better us fire.
                Locket roaring red 9&frac34; many fell 50 transfiguration crookshanks sound. Alohamora daisies sorcerer&apos;s dagger tap-dancing voices locomotor portkey godric&apos;s. 
                Honeydukes padma flying snape brass jinxes tart. Potter beaters to half-moon-glasses sirius got inches. Must turns lily norwegian nitwit are phoenix quidditch answer.</p>
            </div> 
        </div>
    </main>
    )
}

export default AboutUs;

