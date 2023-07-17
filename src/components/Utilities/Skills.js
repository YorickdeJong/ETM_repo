import { FaBoxes, FaLaptopCode, FaRunning, FaBuilding, FaChartLine, FaHandshake } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

function SkillCard({ Icon, title, text, isSmallScreen }) {
    return (
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', width: isSmallScreen ? '40vw' : '25vw', marginLeft: isSmallScreen ? '3vw' : '3vw' }}>
            <Icon color="rgba(0,236,249, 1)" size={'calc(2.3vw + 2.3vh)'} />
            <h1 style={{ color: 'rgba(0,236,249, 1)', fontSize: 'calc(1.25vw + 1.25vh)', marginTop: 10 }}>{title}</h1>
            <p style={{ color: 'rgba(200,200,200, 1)', wordWrap: 'break-word', marginTop: 15, fontSize: 'calc(0.7vw + 0.7vh)' }}>{text}</p>
        </div>
    );
}

function SkillsGrid() {
    const skills = [
        { Icon: FaBoxes, title: 'COMPLETE PAKKET', text: 'Wij begeleiden u van start tot finish, tot dat u tevreden bent' },
        { Icon: FaLaptopCode, title: 'TECHNOLOGIE', text: 'uw team bestaat uitsluitend uit engineers, opgeleid op de TU Delft. Zij helpen jou met de beste technische oplossing voor jouw probleem' },
        { Icon: FaRunning, title: 'EERSTE IN DE RIJ', text: 'Ook na one samenwerking staan wij altijd voor u klaar' },
        { Icon: FaBuilding, title: 'BUSINESS', text: 'Alle teamgenoten hebben ervaring met bedrijven opzetten en kunnen u helpen met uw strategie' },
        { Icon: FaChartLine, title: 'MARKETING', text: 'Het team heeft verstand van digitale marketing, om uw app/website in de spotlights te werpen op het web' },
        { Icon: FaHandshake, title: 'PARTNER', text: 'Wij zien u als meer dan een klant, u ben onze partner' },
    ];

    const isSmallScreen = useMediaQuery({ maxWidth: 700 });

    return (
        <div style={{ display: 'grid', gridTemplateColumns: isSmallScreen ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)', gridGap: '4vh', height: '50vh', marginTop: '28vh', width: '100vw' }}>
            {skills.map((skill, index) => (
                <SkillCard key={index} Icon={skill.Icon} isSmallScreen = {isSmallScreen} title={skill.title} text={skill.text} />
            ))}
        </div>
    );
}

function Skills() {

    return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: 'rgba(10, 38,70, 1)', position: 'relative' }}>
            <div class="custom-shape-divider-top-1687345889" style = {{top: '-1%'}}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill='rgba(10, 38,70, 1)'></path>
                </svg>
            </div>
            <div style = {{position: 'relative', top: '15vh', alignSelf: 'center', width: '100vw', zIndex: 2,}}>
                <h1 style = {{
                    fontSize: 'calc(2.4vw + 2.4vh)', 
                    color: 'white',// '#FF6800', 
                    fontWeight: 'bold',
                    textAlign: 'center',
                    textShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)'
                }}>
                    ONZE KWALITEITEN</h1>
                </div>
            <SkillsGrid />
        </div>
    )
}

export default Skills;