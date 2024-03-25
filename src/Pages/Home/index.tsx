import Banner from "../../components/Banner";
import CountriesList from '../../components/CountriesList/index';
import Curiosities from "../../components/Curiosities";
const Home = () => {

    return (
        <>
            <Banner titulo="GeoViajante" subtitulo="Descubra o Mundo em Cada Canto!"/>
            <CountriesList/>
            <Curiosities/>
        </>
    )
}

export default Home;