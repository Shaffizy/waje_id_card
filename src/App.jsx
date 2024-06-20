import {useState, useEffect} from "react"
import axios from "axios"
import Header from "./header"
import Content from "./content"
import Footer from "./footer"
import "./style.css"

// import computer from "./images/computer-image.svg"
const baseURL = "https://movie-database-alternative.p.rapidapi.com/"

function App() {
  const [post, setPost] = useState(null);

  const handleMovies  = () => {
    const params= {
      s: 'Avengers Endgame',
      r: 'json',
      page: '1'
    }
    const headers= {
      'X-RapidAPI-Key': '5475356aedmsh2ab11b33039923cp1cc5fdjsn0f3bcbc2c22f',
      'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
    }
    axios.get(baseURL,{params,headers}).then((response) => {
      setPost(response.data);
    });
  }

  useEffect(() => {
   handleMovies() 
  }, []);

  
  return (
    <div className="App">
            <Header/>
            <div className="computer">
                {/* <img src={computer} alt="" className="overlapping"/> */}
            </div>
            <Content/>
            <Footer/>
      </div>
  )
}

export default App
