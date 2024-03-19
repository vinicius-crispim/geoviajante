import Banner from "../../components/Banner";
import CountriesList from '../../components/CountriesList/index';

const Home = () => {
    return (
        <>
            <Banner titulo="GeoViajante" subtitulo="Descubra o Mundo em Cada Canto!"/>
            <CountriesList/>
        </>
    )
}

export default Home;