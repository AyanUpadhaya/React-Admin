import { BrowserRouter,Routes,Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import './App.css'
import Gallery from "./pages/Gallery"
import Users from "./pages/Users"
import Posts from "./pages/Posts"
import Settings from "./pages/Settings"
import Categories from "./pages/Categories"
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Layout />}>
          <Route path="/" exact element={<Home />} /> 
          <Route path="/gallery" exact element={<Gallery />} /> 
          <Route path="/users" exact element={<Users />} /> 
          <Route path="/posts" exact element={<Posts />} /> 
          <Route path="/categories" exact element={<Categories />} /> 
          <Route path="/settings" exact element={<Settings />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
