
import NavBar from '@/components/Utilities/NavBar';
import { FaAndroid, FaKey, FaRedoAlt, FaCheckDouble, FaChartLine, FaDollarSign, FaToolbox, FaImages, FaPlusSquare, FaHourglassHalf } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';


export default function FAQ() {
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1600px)' });
    const isSmallScreen = useMediaQuery({ maxWidth: 900 });

    const iconStyle = {
        fontSize: isSmallScreen? '4.5vw' : '2.5vw', // change to the size you want
        alignSelf: 'center', // aligns the star in the middle along the vertical axis in the flex container
        color: '#CBEBE7'
    }

    const faqs = [
        {
            icon: <FaAndroid style={iconStyle}/>, 
            title: 'Maken jullie apps voor android en ios?',
            text: 'Jazeker! Wij maken al onze apps standaard voor zowel android als ios. Zo heeft u er het meeste profijt van'
        },
        {
            icon:  <FaDollarSign style={iconStyle}/>,
            title: 'Hoeveel revisies heb ik in totaal?',
            text: 'Tijdens het design proces maken wij een aantal ontwerpen waaruit u kan kiezen, gebasseerd op uw eisen. U heeft hiervoor 3 revisies'
        },
        {
            icon: <FaRedoAlt style={iconStyle}/>,
            title: 'Wie bewaard de gegevens van mijn website?',
            text: 'Als u ervoor kiest om ons te kiezen voor het onderhoudt van uw website, dan doen wij dit. Anders kunt u zelf een externe partij inschakelen.'
        },
        {
            icon: <FaToolbox style={iconStyle}/>,
            title: 'Maken jullie apps voor android en ios?',
            text: 'Jazeker! Wij maken al onze apps standaard voor zowel android als ios. Zo heeft u er het meeste profijt van'
        },
        {
            icon: <FaKey style={iconStyle}/>,
            title: 'Hoe lang duurt een marketing campaigne?',
            text: 'Wij streven ernaar om binnen 3 maanden de campaigne af te ronden. Echter, voor optimaal resultaat zit er geen eind tijd op'
        },
        {
            icon: <FaImages style={iconStyle}/>,
            title: 'Wat gebeurd er met geld dat overblijft?',
            text: 'Mochten wij een verkeerde inschatting hebben gemaakt met het totale bedrag van uw app of website, dan ontvangt u het overgebleven bedrag van ons.'
        },
        {
            icon: <FaCheckDouble style={iconStyle}/>, 
            title: 'Zit onderhoud in het pakket? ',
            text: 'Onderhoud wordt appart gerekend, omdat niet elke klant dit wilt. Voor onderhoud rekenen wij een bedrag van €100/mnd'
        },
        {
            icon: <FaPlusSquare style={iconStyle}/>, 
            title: 'Wat als ik items wil toevoegen aan mijn website?',
            text: 'Tijdens de development van uw website kunnen wij systemen inbouwen die het mogelijk maken voor u om makkelijk zelf items toe te voegen.'
        },
        {
            icon: <FaChartLine style={iconStyle}/>, 
            title: 'Kan ik later nog eisen toevoegen?',
            text: 'Dit is mogelijk, maar dan zullen er ook extra kosten worden gerekend'
        },
        {
            icon:  <FaHourglassHalf style={iconStyle}/>,
            title: 'Wat gebeurt er als een deadline niet wordt gehaald?',
            text: 'Dit is zeer vervelend. Wij proberen alle deadlines te halen, echter lukt dit niet altijd. U krijgt dan 10% korting op dit onderdeel van uw app of website'
        }
    ]


    const styles = {
        main: {
            height: '100vh',
            paddingBottom: '10vh',
            width: '100vw'
        },
        titleContainer: {
            position: 'absolute',
            top: isMediumScreen ? '6vh' : '13vh',
            width: '94vw',
            marginLeft: '6vw',
        },
        title: {
            fontSize: isMediumScreen ? 'calc(2vw + 2vh)' : 'calc(1.65vw + 1.65vh)',
            color: '#0F1C37', 
            fontWeight: '500', 
        },
        subtitle: {
            marginTop: isMediumScreen ? '-1vhvh' : '-2vh', 
            fontSize: isMediumScreen ? 'calc(1.25vw + 1.25vh)' :  'calc(0.95vw + 0.95vh)',
            color: '#8A8889', 
            width: isMediumScreen ? '80vw' : '60vw', 
            lineHeight: '130%',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: isMediumScreen ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)', // Create two columns
            gridTemplateRows: 'repeat(5, 1fr)', // Create five rows
            height: '70vh',
            width: '70vw',
            gap: '10px', // Optional gap between grid items
            marginTop: isMediumScreen ? '28vh' : '38vh',
            marginLeft: '5vw',
        },
        item: {
            display: 'flex',
            flexDirection: 'row',
            height: isMediumScreen ? '8vh' : '4vh',
            marginBottom: isSmallScreen ? '4vh' : isMediumScreen  ? '6vh' : '12vh',
        },
        iconContainer: {
            position: 'relative', 
            width: isMediumScreen ? '7vw' : '4vw', 
            height: isMediumScreen ? '7vw' : '4vw', 
            backgroundColor: '#92CDC6', 
            borderRadius: 10, 
            top: isMediumScreen ? '3vh' : '2.3vh', 
            left: '1vw', 
            justifyContent: 'center', 
            alignItems: 'center', 
            display: 'flex'
        },
        contentContainer: {
            display: 'flex', 
            flexDirection: 'column',
            marginLeft: isSmallScreen ? '2vh' : '0vh'
        },
        itemTitle: {
            width: isSmallScreen ? '70vw' : isMediumScreen ? '60vw' : '30vw', 
            fontSize: isSmallScreen ? 'calc(1.1vw + 1.1vh)' : isMediumScreen ? 'calc(1.9vw : 1.9vh)' : 28, 
            color: '#8A8889', 
            lineHeight: '130%', 
            margin: 0, 
            marginTop: '2.5vh', 
            marginLeft: '4vw',
        },
        itemText: {
            width: isSmallScreen ? '70vw' : isMediumScreen ? '60vw' : '30vw', 
            fontSize: isSmallScreen ? 'calc(0.85vw + 0.85vh)' : isMediumScreen ? '2.05vw' : 24, 
            color: '#8A8889', 
            lineHeight: '130%', 
            margin: 0, 
            marginLeft: '4vw', 
            marginTop: '1vh'
        }
    };
    
    return (
        <main style={styles.main}>
            <NavBar />
            <div style={styles.titleContainer}>
                <h1 style={styles.title}>Frequently Asked Questions</h1>
                <p style={styles.subtitle}>
                Bent u er nog niet helemaal uit of heeft u een brandende vraag? Geen zorgen! Op deze pagina beantwoorden we vragen die vaak worden gesteld
                </p>
            </div> 
            <div style={styles.grid}>
                {faqs.map((faq, i) => (
                    <div key={i} style={styles.item}>
                        <div style={styles.iconContainer}>
                            {faq.icon}
                        </div>
                        <div style={styles.contentContainer}>
                            <h2 style={styles.itemTitle}>
                                {faq.title} 
                            </h2>
                            <p style={styles.itemText}>
                                {faq.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

