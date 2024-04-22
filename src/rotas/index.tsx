import { Route, Routes } from "react-router-dom"
import PaginaBase from "../Pages/Base"
import Home from "../Pages/Home"
import CountryPage from "../Pages/CountryPage"
import { ContinentCountries } from "../Pages/ContinentCountries"
import NotFound from "../Pages/NotFound"

const Rotas = () => {
    return (<Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
        <Route path="/pais/:code" element={<CountryPage/>}/> 
        <Route path="/continentes/:code/:name" element={<ContinentCountries/>}/> 
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>)
}

export default Rotas