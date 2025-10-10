export default function Entry(props) {
    console.log(props);
    
    return (
        <>
            <section id="entry">
                <div id="main-image-container">
                    <img id="image"
                        src={props.info.img.src}
                        alt={props.info.img.alt}
                    />

                </div>

                <div id="entry-header" >
                    <img
                        src="./src/TravelJournal/location.png"
                        alt="map-marker-icon"
                        id="location"
                    />
                    <span id="country">{props.info.country}</span>
                    <a href={props.info.googleMapsLink} target="_blank" > View on Google Maps</a>
                    <h2 id="entry-title">{props.info.title}</h2>
                    <p id="entry-dates">{props.info.dates}</p>
                    <p class="entry-text">
                        {props.info.text}
                    </p>
                </div>
            </section>

        </>

    )
}