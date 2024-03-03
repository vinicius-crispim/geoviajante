import { Route, Routes } from "react-router-dom"
import PaginaBase from "../Pages/Base"
import Home from "../Pages/Home"



const Rotas = () => {
    return (<Routes>
      <Route path='/' element={<PaginaBase />}>
        <Route path='/' element={<Home />} />
      </Route>
    </Routes>)
}

export default Rotas