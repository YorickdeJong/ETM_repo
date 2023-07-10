import Image from "next/image";

export default function Tile({image, text, imageWidth}) {
    const header = {
        fontWeight: '600', 
        fontSize: 30, 
        marginLeft: '2vw',
        marginTop: '3vh',
        color: '#084652'
    }

    const paragraph = {
        textAlign: 'center', 
        fontSize: 20,
        color: 'black',
    }
    return (
        <div>
            <div style = {{width: imageWidth, height: '6vw', position: 'relative', marginTop: '4vh', left: '2vw'}}>
            <Image 
                    src = {image}
                    fill
                    alt="Picture of the author"
            />
            </div>
            {/* Content of the second column first row goes here */}
            <h2 style = {header}>{text[0]}</h2>

            <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'max-content max-content max-content', 
                gridTemplateRows: 'auto auto auto',  // change to 'auto' if the content size varies
                marginTop: '2.5vh'
            }}>
                <div style={{
                    gridColumn: '1 / span 1', 
                    gridRow: '1 / span 1',  // changed
                    backgroundColor: 'white', 
                    marginLeft: '2vw', 
                    borderRadius: 10, 
                    height: '4vh', 
                    paddingLeft: '1vw', 
                    paddingRight: '1vw',
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    width: 'fit-content',
                }}>
                    <p style = {paragraph}>{text[1]}</p>
                </div>

                <div style={{
                    gridColumn: '2 / span 1', 
                    gridRow: '1 / span 1',  // changed
                    backgroundColor: 'white', 
                    marginLeft: '0.8vw', 
                    borderRadius: 10, 
                    height: '4vh', 
                    paddingLeft: '1vw', 
                    paddingRight: '1vw',
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center',
                    width: 'fit-content',
                }}>
                    <p style = {paragraph}>{text[2]}</p>
                </div>
            </div>
            <div style={{
                gridColumn: '1 / span 1', 
                gridRow: '3 / span 1',  // changed
                backgroundColor: 'white', 
                marginLeft: '2vw', 
                borderRadius: 10, 
                height: '4vh', 
                paddingLeft: '1vw', 
                paddingRight: '1vw',
                display: 'flex',
                justifyContent: 'center', 
                alignItems: 'center',
                marginTop: '1.5vh',
                width: 'fit-content',  
            }}>
                <p style = {paragraph}>{text[3]}</p>
            </div>
        </div>
    )
}