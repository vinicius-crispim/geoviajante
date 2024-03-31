import { Route, Routes } from "react-router-dom"
import PaginaBase from "../Pages/Base"
import Home from "../Pages/Home"
import CountryPage from "../Pages/CountryPage"



const Rotas = () => {
    return (<Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
        <Route path="/pais/:code" element={<CountryPage/>}/> 
      </Route>
    </Routes>)
}

export default Rotas