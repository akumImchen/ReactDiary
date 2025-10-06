import Header from "./Header";
import "./travel.css"
import Entry from "./Entry";
export default function Travel(){
    return(
        <>
         <Header/>
         <Entry
            img={{
                src: "src/TravelJournal/japan.jpeg",
                alt: "japan"

            }}

            img1={{
                    src:"src/TravelJournal/location.png",
                    alt:"location-logo"
            }}
            miniText="Japan"
            link="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
            title="Mount Fuji"
            dates="12 Jan, 2026 - 24 Jan, 2026"
            text="Mount Fuji is the tallest mountain in Japan, standing  at 3,776 meters (12,380 feet)."
            text1=" It is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
         />    
        </>
       
    )
}