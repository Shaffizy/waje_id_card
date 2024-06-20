import facebook from "./images/facebook.png"
import twitter from "./images/twitter.png"
import linkedin from "./images/linkedin.png"
import instagram from "./images/instagram.png"
export default function Footer(){
    return(
        <footer>
           <button><img src= {facebook}alt="" /></button>
           <button><img src= {twitter}alt="" /></button>
           <button><img src= {linkedin}alt="" /></button>
           <button><img src= {instagram}alt="" /></button>
           <p className="closure">WajeSmartSolution @2024.  Digital Business Card</p>
        </footer>
    )
}