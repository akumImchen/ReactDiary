export default function Entry(props) {
    return (
        <>
            <section id="entry">
                <div id="main-image-container">
                    <img id="image"
                        src={props.img.src}
                        alt={props.img.alt}
                    />

                </div>

                <div id="entry-header" >
                    <img
                        src="./src/TravelJournal/location.png"
                        alt="map-marker-icon"
                        id="location"
                    />
                    <span id="country">{props.country}</span>
                    <a href={props.googleMapsLink} target="_blank" > View on Google Maps</a>
                    <h2 id="entry-title">{props.title}</h2>
                    <p id="entry-dates">{props.dates}</p>
                    <p class="entry-text">
                        {props.text}
                    </p>
                </div>
            </section>

        </>

    )
}