import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function Tile({image, text, imageWidth}) {
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1600px)' });
    const isSmallScreen = useMediaQuery({ maxWidth: 800 });

    const headerStyle = {
        fontWeight: '600', 
        fontSize: isSmallScreen ? 24 : 38,
        marginLeft: '3.5vw',
        marginTop: isSmallScreen ? '4vh' : isMediumScreen ? '4vh' : '6vh',
        color: '#084652'
    }

    const paragraphStyle = {
        textAlign: !isSmallScreen && 'center', 
        fontSize: isSmallScreen ? '3vw' : isMediumScreen ? 17 :  22,
        color: 'black',
    }

    const imageContainerStyle = {
        width: imageWidth, 
        height: isSmallScreen ? '14vw' : '6vw', 
        position: 'relative', 
        marginTop: isSmallScreen ? '4vh' : '4vh', 
        left: '3.5vw'
    }

    const gridStyle = {
        display: 'grid', 
        gridTemplateColumns: isMediumScreen ? '1fr 1fr 1fr' : 'max-content max-content max-content', 
        marginTop: isSmallScreen ? '3vh' : isMediumScreen ? '1vh' : '5vh',
        marginBottom: isMediumScreen ? '2vw' : '0vw',
        marginRight: isSmallScreen ? '5vh' : '0vh',
        width: isSmallScreen ? '95%' : '90%',
        gap: isSmallScreen ? '-5vw' : isMediumScreen ? '-5vw' : '0vw'
    }
    
    const divStyle1 = {
        gridColumn: '1 / span 1', 
        gridRow: '1 / span 1', // the same for all three
        backgroundColor: 'white', 
        marginLeft: '3.5vw', 
        borderRadius: 10, 
        height: '4vh', 
        paddingLeft: isSmallScreen ? '2vw' : '1vw', 
        paddingRight: isSmallScreen ? '2vw' : '1vw',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: 'fit-content',
    }
    
    const divStyle2 = {
        gridColumn: '2 / span 1', 
        gridRow: '1 / span 1', // the same for all three
        backgroundColor: 'white', 
        marginLeft:  (isSmallScreen || isMediumScreen) ? '1vw' : '1vw',
        borderRadius: 10, 
        height: '4vh', 
        paddingLeft: isSmallScreen ? '2vw' : '1vw', 
        paddingRight: isSmallScreen ? '2vw' : '1vw',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width:  'fit-content',
    }
    
    const divStyle3 = {
        gridColumn: '3 / span 1', 
        gridRow: '1 / span 1', // the same for all three
        backgroundColor: 'white', 
        marginLeft:  (isSmallScreen || isMediumScreen) ? '1vw' : '3.4vw', 
        borderRadius: 10, 
        height: '4vh', 
        paddingLeft: isSmallScreen ? '2vw' : '1vw', 
        paddingRight: isSmallScreen ? '2vw' : '1vw',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: '2.5vh',
        width: 'fit-content',  
    }

    return (
        <div>
                <div style={imageContainerStyle}>
                    <Image 
                        src={image}
                        fill
                        alt="Picture of the author"
                        quality={3}
                    />
                </div>
                <h2 style={headerStyle}>{text[0]}</h2>

            <div style={gridStyle}>
                <div style={divStyle1}>
                    <p style={paragraphStyle}>{text[1]}</p>
                </div>

                <div style={divStyle2}>
                    <p style={paragraphStyle}>{text[2]}</p>
                </div>
                {
                isMediumScreen && 
                <div style={{...divStyle3, marginTop: '0vh'}}>
                    <p style={paragraphStyle}>{text[3]}</p>
                </div>
                }
            </div>
            {
            !isMediumScreen && <div style={divStyle3}>
                <p style={paragraphStyle}>{text[3]}</p>
            </div>
            }
        </div>
    )
}