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

    const [count, setCount] = useState({
        correct: 0,
        incorrect: 0,
        answered: false
    });

    useEffect(() => {
        startGame(countries, gamecountries, setSelectedCountry, setGameCountries);
    }, [countries])

    function getAnswer(name: string) {
        console.log(count.answered)
        !count.answered && handleAnswer(name);
    }

    function correctAnswer(answerNoti: HTMLElement) {
        setCount({
            answered: true,
            correct: count.correct + 1,
            incorrect: count.incorrect
        })
        answerNoti!.classList.remove("incorrectAnswer");
        answerNoti!.classList.add("correctAnswer");
    }
    function incorrectAnswer(answerNoti: HTMLElement) {
        setCount({
            answered: true,
            correct: count.correct,
            incorrect: count.incorrect + 1
        })
        document.querySelector('.btnAnswer')!.classList.remove('show');
        answerNoti!.classList.remove("correctAnswer");
        answerNoti!.classList.add("incorrectAnswer");
    }

    function handleAnswer(name: string) {
        let answerNoti = document.getElementById('answer')
        selectedCountry === name ? correctAnswer(answerNoti!) : incorrectAnswer(answerNoti!);
        document.querySelector('.btnAnswer')!.classList.add('show');
    }

    function nextQuestion() {
        startGame(countries, gamecountries, setSelectedCountry, setGameCountries);
        document.querySelector('.btnAnswer')!.classList.remove('show')
        document.getElementById('answer')!.classList.remove('correctAnswer')
        document.getElementById('answer')!.classList.remove('incorrectAnswer')
        setCount({
            answered: false,
            correct: count.correct,
            incorrect: count.incorrect
        })
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
                        <S.ScoreStyled>
                            <p>Total: {count.correct + count.incorrect}</p>
                            <p>Acertos: {count.correct}</p>
                            <p>Erros: {count.incorrect}</p>
                        </S.ScoreStyled>
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

function startGame(countries: ICountry[], gameCountries: ICountry[], setSelectedCountry: React.Dispatch<React.SetStateAction<String | undefined>>, setGameCountries: React.Dispatch<React.SetStateAction<ICountry[]>>) {
    filtroVar('');
    const newArray: ICountry[] = [];

    if (countries.length > 3) {
        while (newArray.length < 3) {
            const randomIndex = Math.floor(Math.random() * countries.length);
            const randomItem = countries[randomIndex];
            if (!newArray.includes(randomItem)) {
                newArray.push(randomItem);
            }
        }
        const randomIndex = Math.floor(Math.random() * 3);
        setSelectedCountry(newArray[randomIndex].name);
    }
    setGameCountries(newArray);
}
