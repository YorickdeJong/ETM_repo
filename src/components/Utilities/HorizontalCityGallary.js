

import './parallax.css';
import ValueProp from './ValueProp';
import Process from './process';
import Skills from './Skills';
import Link from 'next/link'
import Parallax from './Parallax';


const HorizontalCityGallary = () => {

  return (
    <main style={{ backgroundColor: 'rgba(10,10,30,1)' }} >
      <Parallax/> 
        <ValueProp />
        <Process />
      <Skills />
    </main>
  );
}
export default HorizontalCityGallary;