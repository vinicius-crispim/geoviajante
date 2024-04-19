import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
query countries($name: String){
  countries(filter: { name: { regex: $name} }) {
    code
    name
  }
}
`

export const GET_COUNTRY_BY_CODE = gql`
query countries($code: ID!){
    country(code: $code) {
      name
      continent{
        name
        countries {
          name
        }
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

export const GET_COUNTRIES_BY_CONTINENT = gql`
query countriesByContinent($continent: String, $name: String){
  countries(filter:{continent:{eq:$continent}, name:{regex:$name}}) {
    code
    name
  }
}
`