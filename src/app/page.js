'use client'
import React, { useState, useEffect, useContext } from 'react';
import NavBar from '@/components/Utilities/NavBar';
import dynamic from 'next/dynamic';
const HorizontalCityGallary = dynamic(() => import('../components/Utilities/HorizontalCityGallary'), { ssr: false });
import { useGlobalAuthContext } from '@/Context/password';

export default function Home() {
    const {auth, setAuthHandler} = useGlobalAuthContext();
   

    useEffect(() => {
        if (!auth) {
            console.log('Auth context when prompt is displayed:', auth);
            const password = prompt("Please enter the password");
            if (password === "check") {
                setAuthHandler(true);
            } else {
                alert('Incorrect password');
                window.location.href = '/'; // or direct the user to any other page
            }
        }
    }, [auth, setAuthHandler]); // Only re-run if local show state changes

    return (
        auth ?
        (
            <main>
                <NavBar pathname='/' />
                <HorizontalCityGallary />
            </main>
        ) : null
    );
}