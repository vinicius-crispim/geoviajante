import { useParams } from "react-router-dom"
import Title from "../../components/Title";
import { useReactiveVar } from "@apollo/client";
import Loader from "../../components/Loader";
import CountryInfo from "../../components/CountryInfo";
import { countryVar } from "../../graphql/countries/state";
import { useCountryByCode } from '../../graphql/countries/hooks';

const CountryPage = () => {
  const params = useParams()

  const country = useReactiveVar(countryVar)


  useCountryByCode(params.code!)

  return (
    <>
      {
        !country &&
        <Loader />
      }
      {
        country &&
        <section>
          <Title>
            Pais: {country?.name}
          </Title>
          <CountryInfo country={country} code={params?.code}/>
        </section>
      }
    </>
  )
}

export default CountryPage