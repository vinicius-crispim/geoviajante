import { useParams } from "react-router-dom"
import Title from "../../components/Title";
import { gql, useQuery } from "@apollo/client";
import Loader from "../../components/Loader";
import CountryInfo from "../../components/CountryInfo";

const getCountry = gql`
query countries($code: ID!){
    country(code: $code) {
      name
      continent{
        name
      }
      capital
      currencies
      languages{
        name
      }
      phone
      states{
        name
      }
      subdivisions{
        name
      }
    }
}
`


const CountryPage = () => {
  const params = useParams()
  const { data } = useQuery(getCountry, {
    variables: { code: params?.code },
  })
  console.log(params);
  return (
    <>
      {
        !data &&
        <Loader />
      }
      {
        data &&
        <section>
          <Title>
            Pais: {data?.country.name}
          </Title>
          <CountryInfo country={data?.country} code={params?.code}/>
        </section>
      }
    </>
  )
}

export default CountryPage