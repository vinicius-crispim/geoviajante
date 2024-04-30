import { useReactiveVar } from "@apollo/client";
import Title from "../../components/Title";
import { countriesVar, filtroVar } from "../../graphql/countries/state";
import * as S from './MiniGame'
import { useEffect, useState } from "react";
import { useCountries } from "../../graphql/countries/hooks";
import { ICountry } from "../../interfaces/ICountry";
const MiniGame = () => {
    
    useCountries();
    const countries = useReactiveVar(countriesVar)

    const [gamecountries, setGameCountries ] = useState<ICountry[]>([])

    useEffect(() => {
        filtroVar('');

        const newArray: ICountry[] = [];
        
        for (let start = 0; start < 3; start++) {
            const randomPosition = Math.floor(Math.random() * (countries.length - start)) + start;
            newArray.push(countries[randomPosition]);
        }

        setGameCountries(newArray)
    }, [countries])
    
    console.log(gamecountries)
    return (
        <>
            <Title>
                Minigame
            </Title>
            <S.MiniGameContainer>
                <p>
                  Assinale qual é a bandeira do país indicado  
                </p>

            </S.MiniGameContainer>
        </>
    )
}

export default MiniGame;