import { useQuery, useReactiveVar } from "@apollo/client"
import { GET_COUNTRIES, GET_COUNTRY_BY_CODE } from "./queries"
import { countriesByContinentVar, countriesVar, countryVar, filtroByContinentVar, filtroVar } from "./state"

const shuffle = (array: any) => {
    const newArray = [...array];
    const length = newArray.length;

    for (let start = 0; start < length; start++) {
        const randomPosition = Math.floor(Math.random() * (length - start)) + start;
        const randomItem = newArray[randomPosition];
        newArray[randomPosition] = newArray[start];
        newArray[start] = randomItem;
    }

    return newArray;
}

export const useCountries = () => {
    const filtro = useReactiveVar(filtroVar);
    return (
        useQuery(GET_COUNTRIES, {
            variables: {
                name: filtro
            },
            onCompleted(data) {
                if (data?.countries) {
                    const shuffleCountries = shuffle(data.countries);
                    countriesVar(shuffleCountries);
                }
            }
        })
    )
}

export const useCountriesByContinent = (continent: string) => {
    const filtro = useReactiveVar(filtroByContinentVar);
    return (
        useQuery(GET_COUNTRIES, {
            variables: {
                name: filtro,
                continent: continent
            },
            onCompleted(data) {
                if (data?.countries) {
                    const shuffleCountries = shuffle(data.countries);
                    countriesByContinentVar(shuffleCountries);
                }
            }
        })
    )
}

export const useCountryByCode = (code: string) => {
    return (
        useQuery(GET_COUNTRY_BY_CODE,
            {
                variables: { code },
                onCompleted(data) {
                    if (data) {
                        countryVar(data.country)
                    }
                },
            })
    )
}