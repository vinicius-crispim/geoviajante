import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import CountryCard from "../CountryCard";
import * as S from './CountriesList';
import { ICountry } from "../../interfaces/ICountry";

const OBTEM_PAISES = gql`
query countries{
    countries{
        name
        code
    }
  }
`

const CountriesList = () => {

    const { data } = useQuery(OBTEM_PAISES);

    const [textoBusca, setTextoBusca] = useState('');

    console.log(data?.countries);
    function handleOnChange(e: { target: { value: any; }; }) {
        setTextoBusca(e.target.value);
        console.log(textoBusca)
    }

    return (
        <S.CountriesListStyled className="container-space ">
            <form style={{ maxWidth: '80%', margin: '24px auto', textAlign: 'center' }}>
                <input value={textoBusca} onChange={handleOnChange} placeholder='Digite o título' />
            </form>
            <ul>
                {
                    data?.countries.map((country: ICountry) => {
                        return <CountryCard country={country} />
                    })
                }
            </ul>
            {/* <CountryCard country={data?.country} /> */}
        </S.CountriesListStyled>
    )
}

export default CountriesList;