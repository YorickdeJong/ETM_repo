import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

function ValueProp() {
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1600px)' });
    const isSmallScreen = useMediaQuery({ maxWidth: 750 });

    const image = isSmallScreen ? '/ValueProp/underground-small.jpg' : isMediumScreen ? '/ValueProp/underground-medium.jpg' :'/ValueProp/underground.jpg'

    const containerStyle = {
        height: '110vh', 
        width: '100vw', 
        position: 'relative', 
        backgroundColor: 'rgba(0, 0, 0, 1)'
    };
    
    const titleContainerStyle = {
        position: 'absolute', 
        top: isSmallScreen ? '15vh' : '25vh', 
        alignSelf: 'center', 
        width: '100vw', 
        zIndex: 2
    };
    
    const titleStyle = {
        fontSize: isSmallScreen ? 'calc(1.8vw + 1.8vh)' : isMediumScreen ? 'calc(2.1vw + 2.1vh)' : 'calc(2.3vw + 2.3vh)', 
        color: 'white', 
        fontWeight: 'bold', 
        textAlign: 'center',
        textShadow: '4px 4px 8px rgba(0, 0, 0, 1)'
    };
    
    const cardContainerStyle = {
        display: 'grid',
        gridTemplateColumns: isSmallScreen  ? '1fr' : 'repeat(3, 1fr)',
        gap: isSmallScreen ? '4vh' : '5vw',
        position: 'absolute',
        width: isSmallScreen ? '80vw' : '100vw',
        marginLeft: isSmallScreen ? '10vw' : '0vw',
        top: isSmallScreen ? '25vh' : '40vh',
        paddingLeft: '5vw',
        paddingRight: '5vw'
    };
    
    const cardStyle = {
        height: isSmallScreen ? '19vh' : '22vh', 
        borderRadius: 30, 
        backgroundColor: '#1C545F', 
        boxShadow: '5px 5px 9px rgba(0, 0, 0, 0.7)'
    };
    
    const cardTitleContainerStyle = {
        marginTop: 20, 
        width: '100%', 
        alignSelf: 'center', 
        zIndex: 2
    };
    
    const cardTitleStyle = {
        fontSize: isSmallScreen ? 'calc(1.8vw + 1.8vh)' : isMediumScreen ? 'calc(1.5w + 1.5vh)' : 'calc(1.35vw + 1.35vh)',
        color: '#FFFFFF', 
        fontWeight: 'bold', 
        textAlign: 'center',
        textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)'
    };
    
    const cardContentContainerStyle = {
        height: '18vh', 
        borderRadius: 20,
        marginTop: isSmallScreen ? 15 : 20,
        alignItems: 'center'
    };
    
    const cardContentStyle = {
        marginLeft: '6%', 
        width: '88%', 
        lineHeight: '150%', 
        fontSize: isSmallScreen ? 'calc(1.05vw + 1.05vh)' : isMediumScreen ? 'calc(0.85w + 0.85vh)' : 'calc(0.65vw + 0.65vh)',
        fontWeight: '303', 
        textAlign: 'center', 
        color: '#F4FDFF'
    };

    const cards = [
        { title: 'Begrip', text: 'Een bedrijf is een collectief van mensen, om het beste product aan jullie te leveren, streven wij er eerst om jullie volledig te begrijpen en te leren kennen' },
        { title: 'Gemak', text: 'Als opdrachtgever zit u niet op hoofdpijn te wachten tijdens het proces waarin uw website wordt gemaakt.' },
        { title: 'Assertiviteit', text: 'Een bedrijf is een collectief van mensen, om het beste product aan jullie te leveren, streven wij er eerst om jullie volledig te begrijpen en te lernen kennen' }
    ];

    return (
        <section style={containerStyle}>
            <section style={titleContainerStyle}>
                <h1 style={titleStyle}>
                    WAAROM KIEZEN VOOR ETM?</h1>
            </section>
            
            <div>
                <Image 
                    src = {image}
                    fill
                    style = {{opacity: 0.7}}
                    alt='underground'
                    quality={50}
                    loading="lazy"
                />
            </div>

            <section style={cardContainerStyle}>
                {cards.map((card, index) => (
                    <section key={index} style = {cardStyle}>
                        <section style={cardTitleContainerStyle}>
                            <h1 style={cardTitleStyle}>{card.title}</h1>
                        </section>
                        <section style={cardContentContainerStyle}>
                            <p style={cardContentStyle}>{card.text}</p>
                        </section>
                    </section>
                ))}
            </section>
        </section>
    );
}

export default ValueProp;
