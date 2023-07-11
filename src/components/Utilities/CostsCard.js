import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

export default function CostsCard({title, texts, marginTop, stars, starsMarginLeft, price}) {

    const styles = {
        cardContainer: {
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'space-between',
            height: '100%'
        },
        headerContainer: {
            display: 'flex',
            flexDirection: 'row',
            marginTop: '2vh'
        },
        header: {
            fontSize: '2.5vw',
            fontWeight: '500',
            marginLeft: '2vw',
            color: '#1A5D6A',
        },
        paragraph: {
            marginLeft: '2vw', 
            color: '#1A5D6A', 
            marginTop: '-1vh', 
            fontSize: 20, 
            width: '85%'
        },
        price: {
            color: '#2D94A7', 
            fontSize: 24, 
            marginLeft: '2vw'
        },
        starContainer: {
            marginLeft: starsMarginLeft,
            display: 'flex',
            flexDirection: 'row'
        },
        star: {
            fontSize: 30,
            alignSelf: 'center',
            color: '#F0D95D',
        },
        listContainer: {
            height: '44%', 
            overflow: 'auto',
        },
        list: {
            color: '#3A8594', 
            fontSize: 22
        },
        buttonStylePackage: {
            width: '80%',
            height: 80,
            backgroundColor: '#1A5D6A',
            borderRadius: 40,
            zIndex: 1000,
            marginTop: '4vh',
            marginLeft: '10%',
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'
        },
        bottomContainer: {
            width: '100%'
        },
        line: {
            width: '85%', 
            margin: '20px auto',   
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
                <section style={styles.buttonStylePackage}>
                    <Link href="/contact" style={{ display: 'block', height: '100%', color: 'white', textDecoration: 'none' }}>
                        <h2 style={{fontSize: 28, textAlign: 'center'}}>Maak een gratis afspraak</h2>
                    </Link>
                </section>
            </footer>
        </section>
    );
}