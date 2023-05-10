import Header from "./components/Header"
import Collection from "./components/Collection"
import Dogs from "./components/Dogs"
// npm i react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Connexion from "./pages/Connexion"

const  App = () => {
 // const [count, setCount] = useState(0)

//  <Header />
//  <Collection />
//  <Dogs />
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path ="/" element ={<Home />} />
          <Route path ="/about" element ={<About />} />
          <Route path ="/Connexion" element ={<Connexion />} />
        </Routes>
      </BrowserRouter>
    </div>

  )

}

export default App
