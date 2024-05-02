import { useReactiveVar } from "@apollo/client";
import Title from "../../components/Title";
import { countriesVar, filtroVar } from "../../graphql/countries/state";
import * as S from './MiniGame'
import { useEffect, useState } from "react";
import { useCountries } from "../../graphql/countries/hooks";
import { ICountry } from "../../interfaces/ICountry";
import CountryCard from "../../components/CountryCard";
const MiniGame = () => {
    const countries = useReactiveVar(countriesVar)
    useCountries();

    const [gamecountries, setGameCountries] = useState<ICountry[]>([]);

    const [selectedCountry, setSelectedCountry] = useState<String>();

    useEffect(() => {
        filtroVar('');
        const newArray: ICountry[] = [];

        if (countries[0]){
            for (let start = 0; start < 3; start++) {
                const randomPosition = Math.floor(Math.random() * (countries.length - start)) + start;
                newArray.push(countries[randomPosition]);
            }
            const randomIndex = Math.floor(Math.random() * 3);
            setSelectedCountry(newArray[randomIndex].name);
        }

        setGameCountries(newArray);

}, [countries])

return (
    <>
        <Title>
            Minigame
        </Title>
        <S.MiniGameContainer>
            <p>
                Assinale qual é a bandeira do país indicado
            </p>
            {
                gamecountries[0] &&
                <>
                    <div className="title-div">
                        <h3>{selectedCountry}</h3>
                    </div>
                    <ul>
                        {
                            gamecountries.map(country => {
                                return (
                                    <CountryCard key={country.code} game={true} country={country} />
                                )
                            })
                        }
                    </ul>
                </>
            }
        </S.MiniGameContainer>
    </>
)
}

export default MiniGame;