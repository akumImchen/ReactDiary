import Header from "./Header";
import "./travel.css"
import Entry from "./Entry";
import data from "./data"

export default function Travel(){
    const result =data.map(function(info){
        return <Entry 
        
            img={info.img}
            
            country={info.country}
            googleMapsLink={info.googleMapsLink}
            title={info.title}
            dates={info.dates}
            text={info.text} 
            
        />
    })
    return(
        <>
        
         <Header/>
            {result}
        </>
       
    )
}