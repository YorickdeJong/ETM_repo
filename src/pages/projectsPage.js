
import NavBar from '@/components/Utilities/NavBar';
import Image from 'next/image';


export default function projectPage() {

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
            fontSize: 55,
            color: '#0F1C37',
            textAlign: 'center',
            fontWeight: '500'
        },
        paragraph1: {
            marginTop: '-2vh',
            textAlign: 'center',
            fontSize: 35,
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
        grid1: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            height: '40vh',
            width: '90vw',
            marginLeft: '6.5vw',
            paddingTop: '40vh'
        },
        grid2: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            height: '45vh',
            width: '90vw',
            paddingTop: '10vh',
            marginLeft: '6.5vw',
        },
        gridColumn: {
            width: '25vw',
            height: '38vh',
            backgroundColor: 'black',
            boxShadow: '4px 6px 8px rgba(0, 0, 0, 0.4)'
        },
        imageContainer: {
            width: '25vw',
            height: '27vh',
            backgroundColor: 'gray',
            position: 'absolute'
        },
        textContainer: {
            width: '100%',
            height: '30%',
            marginTop: '60.5%',
            backgroundColor: '#084652'
        },
        header: {
            margin: '0', // added this
            width: '80%',
            marginLeft: '10%',
            color: 'white',
            fontSize: '1vw',
            zIndex: 100,
            paddingTop: '2.5vh'
        },
        paragraph: {
            margin: '0', // added this
            width: '80%',
            marginLeft: '10%',
            color: 'white',
            fontSize: '1vw',
            zIndex: 100,
            paddingTop: '2.5vh'
        }
    };
    
    return (
            <div>
                <NavBar />
                <div style={styles.container1}>
                    <h1 style={styles.heading1}>Bekijk enkele van onze projecten</h1>
                    <p style={styles.paragraph1}>Wat hebben we gemaakt en wat de zijn problemen die we hebben opgelost?</p>
                </div>
    
                <div style={styles.divBackground} />
    
                <div style={styles.grid1}>
                    {projects.slice(0,3).map((project, index) => (
                        <div style={styles.gridColumn} key={index}>
                            <div style={styles.imageContainer}>
                                <Image src={project.imageSrc} fill alt={project.altText} />
                            </div>
                            <div style={styles.textContainer}>
                                <h2 style={styles.header}>{project.title}</h2>
                                <h4 style={styles.paragraph}>{project.subtitle}</h4>
                            </div>
                        </div>
                    ))}
                </div>
    
                <div style={styles.grid2}>
                    {projects.slice(3,6).map((project, index) => (
                        <div style={styles.gridColumn} key={index}>
                            <div style={styles.imageContainer}>
                                <Image src={project.imageSrc} fill alt={project.altText} />
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
    
