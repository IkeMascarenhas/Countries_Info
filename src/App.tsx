import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Details from "./pages/Details"
import { useEffect } from "react"
import getAllCountries from "./services/getAllCountries"
const App = () => {

  
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details" element={<Details/>}/>
    </Routes>
  )
}

export default App