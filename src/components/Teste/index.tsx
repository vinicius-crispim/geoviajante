import { gql, useQuery } from "@apollo/client";
import { ICountry } from "../../interfaces/ICountry";
import { validatePhoto } from "../../utils/photo";

const OBTEM_PAISES = gql`
query ObterCountries{
  countries{
    name
    code
  }
}
`


const Teste = () => {
  const { data } = useQuery(OBTEM_PAISES)
  console.log(data?.countries)
  return (
    <>
      {
        data?.countries.map((country: ICountry) => {
          return (<div key={country.code}>
            <p>Pais: {country.name}</p>
            {/* {semFoto.includes(country.code) ? 'NÃO TEM ESSA PORRAAAAAAAA' : <img src={`https://flagsapi.com/${country.code}/flat/64.png`} alt="bandeirinha maneira"></img> } */}
            {validatePhoto(country.code) && <img src={`https://flagsapi.com/${country.code}/flat/64.png`} alt="bandeirinha maneira"></img>}
            {!validatePhoto(country.code) && <p>Imagem não consta na API</p>}
            </div>
          )
        })
      }
    </>
  )
}

export default Teste;