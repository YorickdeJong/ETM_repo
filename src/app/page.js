
import React from 'react';
import NavBar from '@/components/Utilities/NavBar';
import dynamic from 'next/dynamic';
const HorizontalCityGallary = dynamic(() => import('../components/Utilities/HorizontalCityGallary'), { ssr: false });

export default function Home() {

    return (
     <main >
        <NavBar pathname = '/'/>
        <HorizontalCityGallary />
     </main>
    );
}

