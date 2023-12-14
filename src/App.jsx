import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Layout />}>
          <Route path="/" exact element={<Home />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
