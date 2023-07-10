import { FaStar } from 'react-icons/fa';
import Link from 'next/link'

export default function CostsCard({title, texts, marginTop, stars, starsMarginLeft, price}) {
    const buttonStylePackage = {
        width: '80%',
        height: 80,
        backgroundColor: '#1A5D6A', // change color on hover
        borderRadius: 40,
        zIndex: 1000,
        marginTop: '4vh',
        marginLeft: '10%',
    }

    const headerService = {
        fontSize: '2.5vw',
        fontWeight: '500',
        marginLeft: '2vw',
        color: '#1A5D6A'
    }



    const starStyle = {
        fontSize: 30, // change to the size you want
        alignSelf: 'center', // aligns the star in the middle along the vertical axis in the flex container
        color: '#F0D95D'
    };
    


    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'row', marginTop: '2vh',}}>
                <h2 style={headerService}>{title}</h2>
                <div style = {{marginLeft: starsMarginLeft, display: 'flex', flexDirection: 'row'}}>
                    {stars[0] && <FaStar style={starStyle} />}
                    {stars[1] && <FaStar style={starStyle} />}
                    {stars[2] && <FaStar style={starStyle} />}
                </div>
            </div>
            <p style={{marginLeft: '2vw', color: '#1A5D6A', marginTop: '-1vh', fontSize: 20, width: '85%'}}>De perfecte optie voor bedrijven die een opmaat gemaakte website willen hebben, echter, geen marketing nodig hebben</p>
            <p style = {{color: '#2D94A7', fontSize: 24, marginLeft: '2vw'}}>v.a. €{price}</p>
            <hr style={{width: '85%', margin: '20px auto', color: "#D2D1D1", height: '0.08vh'}} />
            <ul style={{marginLeft: '0.8vw', marginTop: '4vh' }}>
            {
                texts.map((text, index) => (
                    <li key={index}>{text}</li>
                ))
            }
            </ul>
            <hr style={{width: '85%', margin: '20px auto', marginTop: marginTop, color: "#D2D1D1", height: '0.08vh'}} /> 
            <div style={{ ...buttonStylePackage, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Link href="/contact" style={{ display: 'block', height: '100%', color: 'white', textDecoration: 'none' }}>
                    <h2 style={{fontSize: 28, textAlign: 'center'}}>Maak een gratis afspraak</h2>
                </Link>
            </div>
        </div>
    )
}