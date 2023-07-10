
import NavBar from '@/components/Utilities/NavBar';
import { FaAndroid, FaKey, FaRedoAlt, FaCheckDouble, FaChartLine, FaDollarSign, FaToolbox, FaImages, FaPlusSquare, FaHourglassHalf } from 'react-icons/fa';


export default function FAQ() {

    const iconStyle = {
        fontSize: 50, // change to the size you want
        alignSelf: 'center', // aligns the star in the middle along the vertical axis in the flex container
        color: '#CBEBE7'
    }

    const text = [
        {
            title: 'Maken jullie apps voor android en ios?',
            text: 'Jazeker! Wij maken al onze apps standaard voor zowel android als ios. Zo heeft u er het meeste profijt van'
        },
        {
            title: 'Hoeveel revisies heb ik in totaal?',
            text: 'Tijdens het design proces maken wij een aantal ontwerpen waaruit u kan kiezen, gebasseerd op uw eisen. U heeft hiervoor 3 revisies'
        },
        {
            title: 'Wie bewaard de gegevens van mijn website?',
            text: 'Als u ervoor kiest om ons te kiezen voor het onderhoudt van uw website, dan doen wij dit. Anders kunt u zelf een externe partij inschakelen.'
        },
        {
            title: 'Maken jullie apps voor android en ios?',
            text: 'Jazeker! Wij maken al onze apps standaard voor zowel android als ios. Zo heeft u er het meeste profijt van'
        },
        {
            title: 'Hoe lang duurt een marketing campaigne?',
            text: 'Wij streven ernaar om binnen 3 maanden de campaigne af te ronden. Echter, voor optimaal resultaat zit er geen eind tijd op'
        },
        {
            title: 'Wat gebeurd er met geld dat overblijft?',
            text: 'Mochten wij een verkeerde inschatting hebben gemaakt met het totale bedrag van uw app of website, dan ontvangt u het overgebleven bedrag van ons.'
        },
        {
            title: 'Zit onderhoud in het pakket? ',
            text: 'Onderhoud wordt appart gerekend, omdat niet elke klant dit wilt. Voor onderhoud rekenen wij een bedrag van €100/mnd'
        },
        {
            title: 'Wat als ik items wil toevoegen aan mijn website?',
            text: 'Tijdens de development van uw website kunnen wij systemen inbouwen die het mogelijk maken voor u om makkelijk zelf items toe te voegen.'
        },
        {
            title: 'Kan ik later nog eisen toevoegen?',
            text: 'Dit is mogelijk, maar dan zullen er ook extra kosten worden gerekend'
        },
        {
            title: 'Wat gebeurt er als een deadline niet wordt gehaald?',
            text: 'Dit is zeer vervelend. Wij proberen alle deadlines te halen, echter lukt dit niet altijd. U krijgt dan 10% korting op dit onderdeel van uw app of website'
        }
    ]

    const icons = [
        <FaAndroid style={iconStyle}/>, 
        <FaDollarSign style={iconStyle}/>, 
        <FaRedoAlt style={iconStyle}/>, 
        <FaToolbox style={iconStyle}/>, 
        <FaKey style={iconStyle}/>, 
        <FaImages style={iconStyle}/>, 
        <FaCheckDouble style={iconStyle}/>, 
        <FaPlusSquare style={iconStyle}/>, 
        <FaChartLine style={iconStyle}/>, 
        <FaHourglassHalf style={iconStyle}/>
    ]
    return (
        <main style = {{height: '90vh'}}>
            <NavBar />
            <div style = {{position: 'absolute', top: '13vh', width: '100vw', marginLeft: '6vw'}}>
                <h1 style = {{
                    fontSize: 55, 
                    color: '#0F1C37', 
                    fontWeight: '500', 
                }}>Frequently Asked Questions</h1>
                <p style = {{marginTop: '-2vh', fontSize: 30, color: '#8A8889', width: '60vw', lineHeight: '130%'}}>
                Bent u er nog niet helemaal uit of heeft u een brandende vraag? Geen zorgen! Op deze pagina beantwoorden we vragen die vaak worden gesteld
                </p>
            </div> 
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)', // Create two columns
                gridTemplateRows: 'repeat(5, 1fr)', // Create five rows
                height: '70vh',
                width: '88vw',
                gap: '10px', // Optional gap between grid items
                marginTop: '38vh',
                marginLeft: '5vw',
                }}>
                {Array(10).fill().map((_, i) => (
                    <div 
                    key={i} 
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                    >
                        <div style = {{position: 'relative', width: '4vw', height: '4vw', backgroundColor: '#92CDC6', borderRadius: 10, top: '2.3vh', left: '1vw', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                            {icons[i]}
                        </div>
                        <div style = {{display: 'flex', flexDirection: 'column'}}>
                            <h2 style = {{width: '30vw', fontSize: 25, color: '#8A8889', lineHeight: '130%', margin: 0, marginTop: '2.5vh', marginLeft: '4vw',}}>
                                {text[i].title} 
                            </h2>
                            <p style = {{width: '30vw', fontSize: 20, color: '#8A8889', lineHeight: '130%', margin: 0, marginLeft: '4vw', marginTop: '1vh'}}>{text[i].text}</p>

                        </div>
                    </div>
                ))}
            </div>

        </main>
    )
}