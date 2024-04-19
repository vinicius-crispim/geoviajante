import { useParams } from "react-router-dom"
import Title from "../../components/Title"
import { countriesByContinentVar, countryVar, filtroByContinentVar } from '../../graphql/countries/state';
import { gql, useQuery, useReactiveVar } from "@apollo/client";
import { useCountriesByContinent, useCountryByCode } from "../../graphql/countries/hooks";
import CountriesList from "../../components/CountriesList";
import Loader from "../../components/Loader";
import { useEffect } from "react";

export const teste = gql`
query continent($code: ID!){
    continent(code: $code) {
  	code
    name
    countries{
      name
      code
    }
  }
}
`
export const teste2 = gql`
query countriesByContinent($continent: String, $name: String){
  countries(filter:{continent:{eq:$continent}, name:{regex:$name}}) {
  code
  name
}
}
`

export const ContinentCountries = () => {
  const params = useParams();
  // const { data } = useQuery(teste2, {
  //   variables: {
  //     continent: params.code
  //   }
  // });

  useCountriesByContinent(params.code || "");

  const countries = useReactiveVar(countriesByContinentVar)

  useEffect(()=>{
    filtroByContinentVar('')
  }, [])

  console.log(countries)
  return (
    <>
      {
        !countries &&
        <Loader />
      }
      {
        countries &&
        <>
          <Title>
            {params.name}
          </Title>
          <CountriesList makeVar={filtroByContinentVar} countries={countries} />
        </>
      }
    </>
  )
}