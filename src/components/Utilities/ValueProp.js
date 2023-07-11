import Image from 'next/image';

function ValueProp() {
    const containerStyle = {
        height: '110vh', 
        width: '100vw', 
        position: 'relative', 
        backgroundColor: 'rgba(0, 0, 0, 1)'
    };
    
    const titleContainerStyle = {
        position: 'absolute', 
        top: '25vh', 
        alignSelf: 'center', 
        width: '100vw', 
        zIndex: 2
    };
    
    const titleStyle = {
        fontSize: 60, 
        color: 'white', 
        fontWeight: 'bold', 
        textAlign: 'center',
        textShadow: '4px 4px 8px rgba(0, 0, 0, 1)'
    };
    
    const cardStyle = {
        width: '25vw', 
        height: '22vh', 
        borderRadius: 30, 
        backgroundColor: '#1C545F', 
        boxShadow: '5px 5px 9px rgba(0, 0, 0, 0.7)', 
        position: 'absolute',
        top: '40vh'
    };
    
    const cardTitleContainerStyle = {
        marginTop: 20, 
        width: '100%', 
        alignSelf: 'center', 
        zIndex: 2
    };
    
    const cardTitleStyle = {
        fontSize: 40, 
        color: '#FFFFFF', 
        fontWeight: 'bold', 
        textAlign: 'center',
        textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)'
    };
    
    const cardContentContainerStyle = {
        height: '18vh', 
        borderRadius: 20,
        marginTop: 20,
        alignItems: 'center'
    };
    
    const cardContentStyle = {
        marginLeft: '10%', 
        width: '80%', 
        lineHeight: '150%', 
        fontSize: 20, 
        fontWeight: '303', 
        textAlign: 'center', 
        color: '#F4FDFF'
    };
    
    const cards = [
        { title: 'Begrip', text: 'Een bedrijf is een collectief van mensen, om het beste product aan jullie te leveren, streven wij er eerst om jullie volledig te begrijpen en te leren kennen', left: '10vw' },
        { title: 'Gemak', text: 'Als opdrachtgever zit u niet op hoofdpijn te wachten tijdens het proces waarin uw website wordt gemaakt.', left: '38vw' },
        { title: 'Assertiviteit', text: 'Een bedrijf is een collectief van mensen, om het beste product aan jullie te leveren, streven wij er eerst om jullie volledig te begrijpen en te leren kennen', left: '66vw' }
    ];

    return (
        <div style={containerStyle}>
            <div style={titleContainerStyle}>
                <h1 style={titleStyle}>
                    WAAROM KIEZEN VOOR ETM?</h1>
            </div>
            
            <div>
                <Image 
                    src = '/ValueProp/underground.png'
                    fill
                    style = {{opacity: 0.7}}
                    alt='underground'
                />
            </div>

            {cards.map((card, index) => (
                <div key={index} style={{ ...cardStyle, left: card.left }}>
                    <div style={cardTitleContainerStyle}>
                        <h1 style={cardTitleStyle}>{card.title}</h1>
                    </div>
                    <div style={cardContentContainerStyle}>
                        <p style={cardContentStyle}>{card.text}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ValueProp;