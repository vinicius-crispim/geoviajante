import { gql, useQuery } from "@apollo/client";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { ICountry } from "../interfaces/ICountry";
import { validatePhoto } from "../../utils/photo";

const OBTEM = gql`
query ObterContintes{
    continents {
      countries{
        name
        code
      }
      name
      code
    }
  }
`
const OBTEM2 = gql`
query ObterCountries{
  countries{
    name
    code
  }
}
`


const Teste = () => {
  const { data } = useQuery(OBTEM2)
  console.log(data?.countries)
  return (
    <>
      {
        data?.countries.map((country: ICountry) => {
          return (<>
            <p>Pais: {country.name}</p>
            {/* {semFoto.includes(country.code) ? 'NÃO TEM ESSA PORRAAAAAAAA' : <img src={`https://flagsapi.com/${country.code}/flat/64.png`} alt="bandeirinha maneira"></img> } */}
            {validatePhoto(country.code) && <img src={`https://flagsapi.com/${country.code}/flat/64.png`} alt="bandeirinha maneira"></img>}
            {!validatePhoto(country.code) && <p>Imagem não consta na API</p>}
            </>
          )
        })
      }
    </>
  )
}

export default Teste;