import Image from "next/image";
import { useMediaQuery } from "react-responsive";

export default function Tile({image, text, imageWidth}) {
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1600px)' });
    const isSmallScreen = useMediaQuery({ maxWidth: 1000 });

    const headerStyle = {
        fontWeight: '600', 
        fontSize: 38,
        marginLeft: '2vw',
        marginTop: '6vh',
        color: '#084652'
    }

    const paragraphStyle = {
        textAlign: 'center', 
        fontSize: isMediumScreen ? 18 :  22,
        color: 'black',
    }

    const imageContainerStyle = {
        width: imageWidth, 
        height: '6vw', 
        position: 'relative', 
        marginTop: '4vh', 
        left: '2vw'
    }

    const gridStyle = {
        display: 'grid', 
        gridTemplateColumns: isMediumScreen ? '1fr 1fr 1fr' : 'max-content max-content max-content', 
        gridTemplateRows: isMediumScreen ? '1fr' : 'max-content max-content max-content',
        marginTop: '5vh',
    }
    
    const divStyle1 = {
        gridColumn: '1 / span 1', 
        gridRow: '1 / span 1', // the same for all three
        backgroundColor: 'white', 
        marginLeft: '2vw', 
        borderRadius: 10, 
        height: '4vh', 
        paddingLeft: '1vw', 
        paddingRight: '1vw',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: isMediumScreen && 'fit-content',
    }
    
    const divStyle2 = {
        gridColumn: '2 / span 1', 
        gridRow: '1 / span 1', // the same for all three
        backgroundColor: 'white', 
        marginLeft: '0.8vw', 
        borderRadius: 10, 
        height: '4vh', 
        paddingLeft: '1vw', 
        paddingRight: '1vw',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: !isMediumScreen && 'fit-content',
    }
    
    const divStyle3 = {
        gridColumn: '3 / span 1', 
        gridRow: '1 / span 1', // the same for all three
        backgroundColor: 'white', 
        marginLeft: '2vw', 
        borderRadius: 10, 
        height: '4vh', 
        paddingLeft: '1vw', 
        paddingRight: '1vw',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: '1.5vh',
        width: !isMediumScreen && 'fit-content',  
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
            </div>
            <div style={divStyle3}>
                <p style={paragraphStyle}>{text[3]}</p>
            </div>
        </div>
    )
}