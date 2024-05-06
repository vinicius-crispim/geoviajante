import { useReactiveVar } from "@apollo/client";
import Title from "../../components/Title";
import { countriesVar, filtroVar } from "../../graphql/countries/state";
import * as S from './MiniGame'
import { useEffect, useState } from "react";
import { useCountries } from "../../graphql/countries/hooks";
import { ICountry } from "../../interfaces/ICountry";
import CountryCard from "../../components/CountryCard";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../../components/Button";
const MiniGame = () => {

    const countries = useReactiveVar(countriesVar)
    useCountries();

    const [gamecountries, setGameCountries] = useState<ICountry[]>([]);

    const [selectedCountry, setSelectedCountry] = useState<String>();

    useEffect(() => {
        startGame(countries, setSelectedCountry, setGameCountries);
    }, [countries])

    function getAnswer(name: string) {
        let answerNoti = document.getElementById('answer')


        selectedCountry === name && correctAnswer(answerNoti!);
    }

    function correctAnswer(answerNoti: HTMLElement) {
        document.querySelector('.btnAnswer')!.classList.add('show');
        answerNoti!.classList.add("correctAnswer");
    }

    function nextQuestion() {
        startGame(countries, setSelectedCountry, setGameCountries);
        document.querySelector('.btnAnswer')!.classList.remove('show')
        document.getElementById('answer')!.classList.remove('correctAnswer')
    }

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
                            <h3 id="answer">{selectedCountry}</h3>
                        </div>
                        <ul>
                            {
                                gamecountries.map(country => {
                                    return (
                                        <div onClick={() => getAnswer(country.name)} key={country.code}>
                                            <CountryCard key={country.code} game={true} country={country} />
                                        </div>
                                    )
                                })
                            }
                        </ul>
                        <div className="btnAnswer">
                            <Button onClick={() => {
                                nextQuestion()
                            }}>Próximo
                                <IoIosArrowForward />
                            </Button>
                        </div>
                    </>
                }
            </S.MiniGameContainer>
        </>
    )
}

export default MiniGame;

function startGame(countries: ICountry[], setSelectedCountry: React.Dispatch<React.SetStateAction<String | undefined>>, setGameCountries: React.Dispatch<React.SetStateAction<ICountry[]>>) {
    filtroVar('');
    const newArray: ICountry[] = [];

    if (countries[0]) {
        for (let start = 0; start < 3; start++) {
            const randomPosition = Math.floor(Math.random() * (countries.length - start)) + start;
            newArray.push(countries[randomPosition]);
        }
        const randomIndex = Math.floor(Math.random() * 3);
        setSelectedCountry(newArray[randomIndex].name);
    }

    setGameCountries(newArray);
}
