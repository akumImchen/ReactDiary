export default function Entry(props) {
    return (
        <>
            <section id="entry">
                <div id="japan-container">
                    <img src={props.img.src} 
                    id="japan"  
                    alt={props.img.alt}
                    />

                </div>
                
                <div id="japan-header" >
                    <img src={props.img1.src} alt={props.img1.alt}  id="location"/>
                    <span id="country">{props.miniText}</span>
                    <a href={props.link} id="japan-maplink">View on Google Maps</a>
                    <h2 id="entry-title">{props.title}</h2>
                    <p id="entry-dates">{props.dates}</p>
                    <p class="entry-text">
                        {props.text}
                    </p>
                    <p class="entry-text">{props.text1}</p>
                </div>
            </section>
            <div id="japan-descrip">

            </div>




        </>

    )
}