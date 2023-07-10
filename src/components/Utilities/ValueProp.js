import Image from 'next/image';

function ValueProp() {
    return (
        <div style = {{height: '110vh', width: '100vw', position: 'relative', backgroundColor: 'rgba(0, 0, 0, 1)' }}>
            

            <div style = {{position: 'absolute', top: '25vh', alignSelf: 'center', width: '100vw', zIndex: 2,}}>
                <h1 style = {{
                    fontSize: 60, 
                    color: 'white', 
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    textShadow: '4px 4px 8px rgba(0, 0, 0, 1)'}}>
                    WAAROM KIEZEN VOOR ETM?</h1>
            </div>
            
            <div>
                <Image 
                    src = '/ValueProp/underground.png'
                    fill
                    style = {{opacity: 0.7}}
                />
            </div>

            <div style={{
                width: '25vw', 
                height: '22vh', 
                borderRadius: 30, 
                backgroundColor: '#1C545F', 
                position: 'absolute', 
                top: '40vh', 
                left: '10vw',
                boxShadow: '5px 5px 9px rgba(0, 0, 0, 0.7)'
                }}>
                <div style = {{marginTop: 20, width: '100%', alignSelf: 'center', zIndex: 2,}}>
                    <h1 style = {{
                        fontSize: 40, 
                        color: '#FFFFFF', 
                        fontWeight: 'bold', 
                        textAlign: 'center',
                        textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)' }}>Begrip</h1>
                </div>

                <div style= {{
                    height: '18vh', 
                    borderRadius: 20,
                    marginTop: 20,
                    alignItems: 'center'
                    }}>

                    <p style = {{ marginLeft: '10%', width: '80%', lineHeight: '150%', fontSize: 20, fontWeight: '303', textAlign: 'center', color: '#F4FDFF'}}>
                        Een bedrijf is een collectief van mensen, om het beste product aan jullie te leveren, streven wij er eerst om jullie volledig te begrijpen en te leren kennen
                    </p>

                </div>
                
            </div>

            <div style={{
                width: '25vw', 
                height: '22vh', 
                borderRadius: 30, 
                backgroundColor: '#1C545F', 
                position: 'absolute', 
                top: '40vh', 
                left: '38vw',
                boxShadow: '5px 5px 9px rgba(0, 0, 0, 0.7)'
                }}>
                <div style = {{marginTop: 20, width: '100%', alignSelf: 'center', zIndex: 2,}}>
                    <h1 style = {{
                        fontSize: 40, 
                        color: 'white', 
                        fontWeight: 'bold', 
                        textAlign: 'center',
                        textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)' }}>Gemak</h1>
                </div>

                <div style= {{
                    height: '18vh', 
                    borderRadius: 20,
                    marginTop: 20,
                    alignItems: 'center'
                    }}>

                    <p style = {{ marginLeft: '10%', width: '80%', lineHeight: '150%', fontSize: 20, fontWeight: '303', textAlign: 'center', color: '#F4FDFF'}}>
                    Als opdrachtgever zit u niet op hoofdpijn te wachten tijdens het proces waarin uw website wordt gemaakt. 
                    </p>

                </div>
                
            </div>

            <div style={{
                width: '25vw', 
                height: '22vh', 
                borderRadius: 30, 
                backgroundColor: '#1C545F', 
                position: 'absolute', 
                top: '40vh', 
                left: '66vw',
                boxShadow: '5px 5px 9px rgba(0, 0, 0, 0.7)'
                }}>
                <div style = {{marginTop: 20, width: '100%', alignSelf: 'center', zIndex: 2,}}>
                    <h1 style = {{
                        fontSize: 40, 
                        color: 'white', 
                        fontWeight: 'bold', 
                        textAlign: 'center',
                        textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)' }}>Assertiviteit</h1>
                </div>

                <div style= {{
                    height: '18vh', 
                    borderRadius: 25,
                    marginTop: 20,
                    alignItems: 'center'
                    }}>

                    <p style = {{ marginLeft: '10%', width: '80%', lineHeight: '150%', fontSize: 20, fontWeight: '303', textAlign: 'center', color: '#F4FDFF'}}>
                    Een bedrijf is een collectief van mensen, om het beste product aan jullie te leveren, streven wij er eerst om jullie volledig te begrijpen en te leren kennen
                    </p>

                </div>
                
            </div>

        </div>
    );
}

export default ValueProp;