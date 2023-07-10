import NavBar from "@/components/Utilities/NavBar"
import Image from 'next/image';
import { useGlobalAuthContext } from '@/Context/password';
import React, { useState, useEffect, useContext } from 'react';

export default function projectPage() {
    // const {auth, setAuthHandler} = useGlobalAuthContext();
   

    // useEffect(() => {
    //     if (!auth) {
    //         console.log('Auth context when prompt is displayed:', auth);
    //         const password = prompt("Please enter the password");
    //         if (password === "check") {
    //             setAuthHandler(true);
    //         } else {
    //             alert('Incorrect password');
    //             window.location.href = '/'; // or direct the user to any other page
    //         }
    //     }
    // }, []); // Only re-run if local show state changes

    const header = {
        margin: '0', // added this
        width: '80%',
        marginLeft: '10%',
        color: 'white',
        fontSize: '1vw',
        zIndex: 100,
        paddingTop: '2.5vh'
    }
    
    const paragraph = {
        margin: '0', // added this
        marginTop: '1.5vh',
        width: '80%',
        marginLeft: '10%',
        fontWeight: '400',
        color: '#D6D6D6',
        fontSize: '0.9vw',
        zIndex: 100,
        lineHeight: '1.5vw',
    }



    return (
        <main>
        <NavBar />
            <div style = {{position: 'absolute', top: '13vh', width: '100vw'}}>
                <h1 style = {{
                    fontSize: 55, 
                    color: '#0F1C37', 
                    textAlign: 'center',
                    fontWeight: '500', 
                }}>Bekijk enkele van onze projecten</h1>
                <p style = {{marginTop: '-2vh', textAlign: 'center', fontSize: 35, color: '#8A8889', width: '60vw', marginLeft: '20vw'}}>
                Wat hebben we gemaakt en wat de zijn problemen die we hebben opgelost?
                </p>
            </div>
            
            <div style = {{backgroundColor: '#0F1C37', width: '101vw', height: '50vh', top: '60vh', position: 'absolute', left: '-1%', zIndex: -1}}/>
            
            <div style={{
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr 1fr', 
                height: '40vh', 
                width: '90vw',
                marginLeft: '6.5vw',
                paddingTop: '40vh',  // Reduce paddingTop here
            }}>
                <div style = {{gridColumn: '1 / span 1', width: '25vw', height: '38vh', backgroundColor: 'black',
                 boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.4)'}}>
                    <div style = {{width: '25vw', height: '27vh', backgroundColor: 'gray', position: 'absolute'}}>
                        <Image 
                            src = '/projects/classroom.png'
                            fill
                        />
                    </div>
                    <div style = {{width: '100%', height: '30%', marginTop: '60.5%', backgroundColor: '#084652'}}>
                        <h2 style = {header}>School klaar - ondersteuning voor jouw school</h2>
                        <h4 style = {paragraph}>Bekijk ons proces</h4>
                    </div>
                </div>

                <div style = {{gridColumn: '2 / span 1', width: '25vw', height: '38vh', backgroundColor: 'black',
                 boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.4)'}}>
                    <div style = {{width: '25vw', height: '27vh', backgroundColor: 'gray', position: 'absolute'}}>
                        <Image 
                            src = '/projects/cityBlueDark.png'
                            fill
                        />
                    </div>
                    <div style = {{width: '100%', height: '30%', marginTop: '60.5%', backgroundColor: '#084652'}}>
                        <h2 style = {header}>Learning Bot - bouw, codeer en bereken</h2>
                        <h4 style = {paragraph}>Bekijk ons proces</h4>
                    </div>
                </div>

                <div style = {{gridColumn: '3 / span 1', width: '25vw', height: '38vh', backgroundColor: 'black',
                 boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.4)'}}>
                    <div style = {{width: '25vw', height: '27vh', backgroundColor: 'gray', position: 'absolute'}}>
                        <Image 
                            src = '/projects/spark.png'
                            fill
                        />
                    </div>
                    <div style = {{width: '100%', height: '30%', marginTop: '60.5%', backgroundColor: '#084652'}}>
                        <h2 style = {header}>Spark - vind jouw doel</h2>
                        <h4 style = {paragraph}>Bekijk ons proces</h4>
                    </div>
                </div>
            </div>


            <div style={{
                display: 'grid', 
                gridTemplateColumns: '1fr 1fr 1fr', 
                height: '45vh', 
                width: '90vw',
                paddingTop: '10vh',  // Reduce paddingTop here
                marginLeft: '6.5vw',
            }}>
                <div style = {{gridColumn: '1 / span 1', width: '25vw', height: '38vh', backgroundColor: 'black',
                boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.4)'
                }}>
                    <div style = {{width: '25vw', height: '27vh', backgroundColor: 'gray', position: 'absolute'}}>
                        <Image 
                            src = '/projects/universe.png'
                            fill
                        />
                    </div>
                    <div style = {{width: '100%', height: '30%', marginTop: '60.5%', backgroundColor: '#084652'}}>
                        <h2 style = {header}>Universals - Ontdek jouw mogelijkheden</h2>
                        <h4 style = {paragraph}>Bekijk ons proces</h4>
                    </div>
                </div>

                <div style = {{gridColumn: '2 / span 1',  width: '25vw', height: '38vh', backgroundColor: 'black',
                 boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.4)'}}>
                    <div style = {{width: '25vw', height: '27vh', backgroundColor: 'gray', position: 'absolute'}}>
                        <Image 
                            src = '/projects/trains.png'
                            fill
                        />
                    </div>
                    <div style = {{width: '100%', height: '30%', marginTop: '60.5%', backgroundColor: '#084652'}}>
                        <h2 style = {header}>Future trains - reis met gemak</h2>
                        <h4 style = {paragraph}>Bekijk ons proces</h4>
                    </div>
                </div>

                <div style = {{gridColumn: '3 / span 1', width: '25vw', height: '38vh', backgroundColor: 'black',
                 boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.4)'}}>
                    <div style = {{width: '25vw', height: '27vh', backgroundColor: 'gray', position: 'absolute'}}>
                        <Image 
                            src = '/projects/database.png'
                            fill
                        />
                    </div>
                    <div style = {{width: '100%', height: '30%', marginTop: '60.5%', backgroundColor: '#084652'}}>
                        <h2 style = {header}>Data storage - Beveilig je data</h2>
                        <h4 style = {paragraph}>Bekijk ons proces</h4>
                    </div>
                </div>
            </div>

        </main>
    )

}