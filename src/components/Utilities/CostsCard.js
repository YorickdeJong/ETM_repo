import { FaStar } from 'react-icons/fa';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

export default function CostsCard({title, texts, marginTop, stars, starsMarginLeft, price}) {
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1400px)' });
    const isSmallScreen = useMediaQuery({ maxWidth: 1000 });

    const styles = {
        cardContainer: {
            display: 'flex',
            flexDirection: 'column',
            height: '80vh'
        },
        headerContainer: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: '2vh',
            marginLeft: '7.5%',
        },
        header: {
            fontSize: isSmallScreen ?  'calc(2vw + 2vh)' : (isMediumScreen ?  'calc(1.8vw + 1.8vh)' : 'calc(1.6vw + 1.6vh)'), 
            fontWeight: '500',
            color: '#1A5D6A',
        },
        paragraph: {
            color: '#1A5D6A', 
            marginTop: '-1vh', 
            fontSize:  isSmallScreen ?  'calc(1.1vw + 1.1vh)' : (isMediumScreen ?  'calc(0.85vw + 0.85vh)' : 'calc(0.65vw + 0.65vh)'), 
            width: '85%',
            marginLeft: '7.5%',
        },
        price: {
            color: '#2D94A7', 
            fontSize: isSmallScreen ?  'calc(1.1vw + 1.1vh)' : (isMediumScreen ?  'calc(1vw + 1vh)' : 'calc(0.8vw + 0.8vh)'), 
            marginLeft: '7.5%',
        },
        starContainer: {
            marginLeft: 'auto',
            marginRight: '7.5%',
            display: 'flex',
            flexDirection: 'row'
        },
        star: {
            fontSize: isSmallScreen ?  'calc(1.6vw + 1.6vh)' : (isMediumScreen ?  'calc(1.3vw + 1.3vh)' : 'calc(0.95vw + 0.95vh)'), 
            alignSelf: 'center',
            color: '#F0D95D',
        },
        listContainer: {
            height: '44%', 
            overflow: 'auto',
        },
        list: {
            color: '#3A8594', 
            fontSize:  isSmallScreen ?  'calc(1vw + 1vh)' : (isMediumScreen ?  'calc(0.85vw + 0.85vh)' : 'calc(0.7vw + 0.7vh)'), 
        },
        buttonStylePackage: {
            width: '80%',
            height: isMediumScreen ? '6.5vh' : '6.5vh',
            backgroundColor: '#1A5D6A',
            borderRadius: 40,
            marginTop: '1.5vh',
            marginBottom: '1.5vh',
            zIndex: 1000,
            marginLeft: '10%',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            textDecoration: 'none'
        },
        buttonTextStyle: {
            fontSize: isSmallScreen ?  'calc(1.3vw + 1.3vh)' : (isMediumScreen ?  'calc(1.1vw + 1.1vh)' : 'calc(0.9vw + 0.9vh)'), 
            textAlign: 'center',
            color: 'white',
            textDecoration: 'none'   // add this line to remove underline
        },
        bottomContainer: {
            width: '100%',
            height: '7vh',
            position: 'relative',
            marginTop: '7vh'
        },
        line: {
            width: '85%', 
            color: "#D2D1D1", 
            height: '0.08vh'
        },
    };

    return (
        <section style={styles.cardContainer}>
            <header style={styles.headerContainer}>
                <h2 style={styles.header}>{title}</h2>
                <div style={styles.starContainer}>
                    {stars.map((star, index) => star && <FaStar key={index} style={styles.star} />)}
                </div>
            </header>
            <p style={styles.paragraph}>De perfecte optie voor bedrijven die een opmaat gemaakte website willen hebben, echter, geen marketing nodig hebben</p>
            <p style={styles.price}>v.a. €{price}</p>
            <hr style={styles.line} />
            <div style={styles.listContainer}>
                <ul style={{marginLeft: '0.8vw', marginTop: '4vh' }}>
                    {texts.map((text, index) => (
                        <li style = {styles.list} key={index}>{text}</li>
                    ))}
                </ul>
            </div>
            <footer style={styles.bottomContainer}>
                <hr style={styles.line} />
                <Link href="/contact" style={styles.buttonStylePackage}>
                    <h2 style={styles.buttonTextStyle}>Maak een gratis afspraak</h2>
                </Link>
            </footer>
        </section>
    );
}