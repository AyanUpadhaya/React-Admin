import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import './App.css'
import Gallery from "./pages/Gallery"
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Layout />}>
          <Route path="/" exact element={<Home />} /> 
          <Route path="/gallery" exact element={<Gallery />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
