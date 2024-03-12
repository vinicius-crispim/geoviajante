import Banner from "../../components/Banner";
import Teste from "../../components/Teste"

const Home = () => {
    return (
        <>
            <Banner titulo="GeoViajante" subtitulo="Descubra o Mundo em Cada Canto!">
                <input type="text" placeholder="Busque um país ou continente" />
            </Banner>
            <Teste />
        </>
    )
}

export default Home;