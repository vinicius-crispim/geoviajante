import { ReactiveVar } from "@apollo/client";
import { useState } from "react";
import CountryCard from "../CountryCard";
import * as S from './CountriesList';
import { ICountry } from '../../interfaces/ICountry';
import Loader from "../Loader";
import Button from "../Button";

interface CountriesListProps {
    countries: ICountry[]
    makeVar: ReactiveVar<string>
}

const CountriesList = ({ countries, makeVar } : CountriesListProps) => {

    const [seeNum, setSeeNum] = useState(9);
    const [loaderMsg, setLoaderMsg] = useState("Carregando países")

    const handleOnChange = (e: { target: { value: any; }; }) => {
        console.log(makeVar());
        makeVar(e.target.value);
        countries && setLoaderMsg('Nenhum país encontrado');
        console.log(loaderMsg)
    }

    return (
        <>
            <S.CountriesListStyled className="container-space ">
                <form>
                    <input onChange={handleOnChange} placeholder='Digite o nome do país' />
                    <p>* Informe o nome em inglês</p>
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
            { countries.length === 0 &&
                <Loader children={loaderMsg} />
            }
        </>
    )
}

export default CountriesList;