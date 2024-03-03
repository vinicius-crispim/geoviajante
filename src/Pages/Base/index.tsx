import { Outlet } from "react-router-dom"
import BarraNavegacao from "../../components/Header"
import Rodape from "../../components/Footer"

const PaginaBase = () => {
    return (<main>
        <BarraNavegacao />
        <Outlet />
        <Rodape />
    </main>)
}

export default PaginaBase