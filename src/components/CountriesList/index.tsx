import { useReactiveVar } from "@apollo/client";
import { useState } from "react";
import CountryCard from "../CountryCard";
import * as S from './CountriesList';
import { ICountry } from '../../interfaces/ICountry';
import { countriesVar } from "../../graphql/countries/state";
import { useCountries } from "../../graphql/countries/hooks";
import Loader from "../Loader";
import Button from "../Button";



const CountriesList = () => {

    const [search, setSearch] = useState('');
    const [seeNum, setSeeNum] = useState(9);
    const countries = useReactiveVar(countriesVar)

    const handleOnChange = (e: { target: { value: any; }; }) => {
        setSearch(e.target.value);
        console.log(search)
    }

    useCountries();

    console.log(countries)

    if (countries.length < 8) {
        return <Loader />
    } else {

        return (
            <S.CountriesListStyled className="container-space ">
                <form style={{ maxWidth: '80%', margin: '24px auto', textAlign: 'center' }}>
                    <input value={search} onChange={handleOnChange} placeholder='Digite o nome do país' />
                </form>
                <ul>
                    {countries &&
                        countries.map((country: ICountry, index: number) => {
                            return index < seeNum ? <CountryCard key={country.code} country={country} /> : null
                        })
                    }
                </ul>
                <div className="buttons">
                    {
                        seeNum < countries.length &&
                        <Button onClick={() => {
                            seeNum < countries.length && setSeeNum(seeNum + 9);
                        }}>VER MAIS</Button>
                    }
                    {
                        seeNum > 9 &&
                        <Button onClick={() => {
                            setSeeNum(seeNum - 9);
                        }}>VER MENOS</Button>
                    }
                </div>
            </S.CountriesListStyled >
        )
    }
}

export default CountriesList;