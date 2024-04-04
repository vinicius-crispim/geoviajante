import { Outlet } from "react-router-dom"
import BarraNavegacao from "../../components/Header"
import Rodape from "../../components/Footer"

const PaginaBase = () => {
    return (<>
        <BarraNavegacao />
        <main>
            <Outlet />
        </main>
        <Rodape />
    </>)
}

export default PaginaBase