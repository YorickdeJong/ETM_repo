import NavBar from '@/components/Utilities/NavBar';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

export default function ProjectPage() {
    const isMediumScreen = useMediaQuery({ query: '(min-width: 1201px) and (max-width: 1800px)' });
    const isSmallScreen = useMediaQuery({ maxWidth: 1200 });
    
    const projects = [
            {
                imageSrc: '/projects/classroom.jpg',
                altText: 'classroom',
                title: 'School klaar - ondersteuning voor jouw school',
                subtitle: 'Bekijk ons proces'
            },
            {
                imageSrc: '/projects/cityBlueDark.jpg',
                altText: 'city',
                title: 'Learning Bot - bouw, codeer en bereken',
                subtitle: 'Bekijk ons proces'
            },
            {
                imageSrc: '/projects/spark.jpg',
                altText: 'spark',
                title: 'Spark - vind jouw doel',
                subtitle: 'Bekijk ons proces'
            },
            {
                imageSrc: '/projects/universe.jpg',
                altText: 'universe',
                title: 'Universals - Ontdek jouw mogelijkheden',
                subtitle: 'Bekijk ons proces'
            },
            {
                imageSrc: '/projects/trains.jpg',
                altText: 'trains',
                title: 'Future trains - reis met gemak',
                subtitle: 'Bekijk ons proces'
            },
            {
                imageSrc: '/projects/database.jpg',
                altText: 'database',
                title: 'Data storage - Beveilig je data',
                subtitle: 'Bekijk ons proces'
            }
        ];
    
        const styles = {
            container1: {
                position: 'absolute',
                top: '13vh',
                width: '100vw'
            },
            heading1: {
                fontSize: 'calc(1.5vw + 1.5vh)',
                color: '#0F1C37',
                textAlign: 'center',
                fontWeight: '500'
            },
            paragraph1: {
                marginTop: '-2vh',
                textAlign: 'center',
                fontSize: 'calc(1.05vw + 1.05vh)',
                color: '#8A8889',
                width: '60vw',
                marginLeft: '20vw'
            },
            divBackground: {
                backgroundColor: '#0F1C37',
                width: '101vw',
                height: '50vh',
                top: '60vh',
                position: 'absolute',
                left: '-1%',
                zIndex: -1
            },
            grid: {
                display: 'grid',
                gridTemplateColumns: isSmallScreen ? 'repeat(1, 1fr)' : (isMediumScreen ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'), // Adjusts column count based on screen size
                gridRowGap: '2rem',
                gap: '1rem',
                paddingTop: '40vh',
                paddingLeft: '6.5vw',
                width: '90vw',
            },
            gridColumn: {
                marginBottom: '15vh',
                width: '25vw',
                height: '38vh',
                backgroundColor: 'black',
                boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.4)'
            },
            imageContainer: {
                width: isSmallScreen ? '83vw' : (isMediumScreen ? '40vw': '25vw'),
                height: '29vh',
                backgroundColor: 'gray',
                position: 'absolute'
            },
            textContainer: {
                width: isSmallScreen ? '83vw' : (isMediumScreen ? '40vw': '25vw'),
                height: '10vh',
                marginTop: '28.5vh',
                backgroundColor: '#084652'
            },
            header: {
                margin: '0',
                width: '80%',
                marginLeft: '10%',
                color: 'white',
                fontSize: isSmallScreen ? 'calc(1.35vw + 1.35vh)' : (isMediumScreen ? 'calc(0.95vw + 0.95vh)' : 'calc(0.75vw + 0.75vh)'),  // use calc to combine vw and em for better scaling
                zIndex: 100,
                paddingTop: '2.5vh'
            },
            paragraph: {
                margin: '0',
                width: '80%',
                marginLeft: '10%',
                color: 'rgba(244, 255, 255, 1)',
                fontSize: isSmallScreen ? 'calc(1.25vw + 1.25vh)' : (isMediumScreen ? 'calc(1vw + 1vh)' : 'calc(0.65vw + 0.65vh)'),  // use calc to combine vw and em for better scaling
                fontWeight: '400',
                zIndex: 100,
                paddingTop: isSmallScreen ? '0.8vh' : (isMediumScreen ? '1vh': '1.3vh')
            },
        };
        
        return (
            <div>
                <NavBar />
                <div style={styles.container1}>
                    <h1 style={styles.heading1}>Bekijk enkele van onze projecten</h1>
                    <p style={styles.paragraph1}>Wat hebben we gemaakt en wat de zijn problemen die we hebben opgelost?</p>
                </div>
    
                <div style={styles.divBackground} />
    
                <div style={styles.grid}>
                    {projects.map((project, index) => (
                        <div style={styles.gridColumn} key={index}>
                            <div style={styles.imageContainer}>
                                <Image src={project.imageSrc} fill alt={project.altText} 
                                    quality={3}
                                />
                            </div>
                            <div style={styles.textContainer}>
                                <h2 style={styles.header}>{project.title}</h2>
                                <h4 style={styles.paragraph}>{project.subtitle}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };