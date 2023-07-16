import { FaUserAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import NavBar from '@/components/Utilities/NavBar';
import { useMediaQuery } from 'react-responsive';

export default function Contact() {
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1600px)' });
    const isSmallScreen = useMediaQuery({ maxWidth: 800 });

    return (
        <main style = {{height: '100vh', width: '100vw', position: 'absolute', backgroundColor: 'white'}}>
            <NavBar />

                    <h2 style = {{fontSize: 40, fontWeight: 'bold', marginTop: isMediumScreen ? '20%' : '10%', textAlign: 'center', color: '#084652'}}>Neem Contact Op</h2>
                    <div style = {{width:  isSmallScreen ? '80%' : isMediumScreen ? '60%' : '40%', 
                    height: isSmallScreen ? '70%' : '40%', 
                    backgroundColor: 'white', 
                    marginLeft: isSmallScreen ? '10%' : isMediumScreen ? '20%' : '30%', 
                    display: 'flex', 
                    flexDirection: isSmallScreen ? 'column' : 'row', 
                    borderRadius: 20,
                    boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)'}}>
                        <div style = {{width: isSmallScreen ? '80%' : '45%', height: '100%', padding: '5%'}}>
                            <div style = {{display: 'flex', alignItems: 'center', marginTop: '15%'}}>
                                <FaUserAlt style = {{fontSize: 30, color: 'gray'}}/>
                                <input type="text" placeholder="Name" style = {{outline: 'none', border: 'none', fontSize: 19, borderBottom: '2px solid gray', marginLeft: '8%', flex: '1'}} />
                            </div>

                            <div style = {{display: 'flex', alignItems: 'center', marginBottom: '10%', marginTop: '25%'}}>
                                <FaEnvelope style = {{outline: 'none', fontSize: 30, color: 'gray'}}/>
                                <input type="text" placeholder="Email" style = {{border: 'none', fontSize: 19, borderBottom: '2px solid gray', marginLeft: '8%', flex: '1', height: '10%'}} />
                            </div>

                            <div style = {{display: 'flex', alignItems: 'center', marginBottom: '10%', marginTop: '25%'}}>
                                <FaPhoneAlt style = {{outline: 'none', fontSize: 30, color: 'gray'}}/>
                                <input type="text" placeholder="Phone" style = {{border: 'none', fontSize: 19,borderBottom: '2px solid gray', marginLeft: '8%', flex: '1'}} />
                            </div>
                        </div>
                        <div style = {{width: isSmallScreen ? '80%' : '45%', marginTop: isSmallScreen ? '-10%' : '8%', marginRight: '5%', height: isSmallScreen ? '90%' : '70%', backgroundColor: '#FFF9F5', marginLeft: isSmallScreen ? '10%' : '3%', borderRadius: 20,
                        marginBottom: isSmallScreen ? '15%' : '0%'}}>
                            <textarea style = {{outline: 'none', marginTop: '7%', marginLeft: '6%', backgroundColor: '#FFF9F5',  border: 'none', width: '90%', height: '80%', fontSize: 19}} placeholder="Vraag"></textarea>
                        </div>
                    </div>
        </main>
    );
}