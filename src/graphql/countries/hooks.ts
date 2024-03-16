import { useQuery } from "@apollo/client"
import { GET_COUNTRIES } from "./queries"
import { countriesVar } from "./state"

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
    return (
        useQuery(GET_COUNTRIES, {
            onCompleted(data) {
                if (data?.countries) {
                    // console.log(data.countries)
                    const shuffleCountries = shuffle(data.countries);
                    countriesVar(shuffleCountries);
                }
            }
        })
    )
}