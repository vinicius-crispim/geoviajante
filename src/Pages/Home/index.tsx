import { useReactiveVar } from '@apollo/client';
import Banner from "../../components/Banner";
import CountriesList from '../../components/CountriesList/index';
import Curiosities from "../../components/Curiosities";
import { useCountries } from "../../graphql/countries/hooks";
import { countriesVar, countryVar, filtroVar } from "../../graphql/countries/state";
import { ICountry } from "../../interfaces/ICountry";
import { useEffect } from 'react';
const Home = () => {
    const countries = useReactiveVar(countriesVar)
    useCountries();
    useEffect(()=>{
        countryVar({} as ICountry) 
        filtroVar('')
    },[])
    return (
        <>
            <Banner titulo="GeoViajante" subtitulo="Descubra o Mundo em Cada Canto!" />
            {countries &&
                <CountriesList makeVar={filtroVar} countries={countries} />
            }
            <Curiosities />
        </>
    )
}

export default Home;