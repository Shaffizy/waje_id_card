import logo from "./images/waje.logo.jpg"
export default function Header(){
    return(
        <header>
               <div className="image-container">
                    <img src={logo} alt="logo" />
               </div>
        </header>
    )
}