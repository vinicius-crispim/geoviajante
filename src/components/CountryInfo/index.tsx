import { ICountry } from '../../interfaces/ICountry';
import * as S from './CountryInfo'
/*
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
*/
interface CountryProp {
    country: ICountry;
    code: string | undefined;
}

const CountryInfo = ({ country, code }: CountryProp) => {
    console.log(country.continent.countries[1].name)
    return (
        <S.CountryInfoStyled>
            <S.InfosLatStyled>
                <img
                    src={`https://flagcdn.com/h240/${code?.toLowerCase()}.png`}
                    alt={country.name}
                />
                <div>
                    <h4>Nome do país: {country.name}</h4>
                    <p><strong>Continente:</strong> {country.continent.name}</p>
                    <p><strong>Capital:</strong> {country.capital}</p>
                    <ul className='lista'><strong>Moeda(s):</strong>
                        {country.currencies.map((currency, index) => (
                            index + 1 === country.currencies.length ?
                                <li key={index}>{currency}</li>
                                :
                                <li key={index}>{currency}, </li>
                        ))}
                    </ul>
                    <ul className='lista'><strong>Idioma(s):</strong>
                        {country.languages.map((language, index) => (
                            index + 1 === country.languages.length ?
                                <li key={index}>{language.name}</li>
                                :
                                <li key={index}>{language.name}, </li>

                        ))}
                    </ul>
                    <p><strong>Código de país:</strong> +{country.phone}</p>
                    <div className='mobile'>
                        {
                            country.subdivisions.length > 0 &&
                            <ul className='lista'><strong>Subdivisões:</strong>
                                {country.subdivisions.map((sub, index) => (
                                    index + 1 === country.subdivisions.length ?
                                        <li key={index}>
                                            {sub.name}
                                        </li> :
                                        <li key={index}>
                                            {sub.name},
                                        </li>
                                ))}
                            </ul>
                        }
                        {
                            country.states.length > 0 &&
                            <ul><strong>Estados:</strong>
                                {country.states.map((state, index) => (
                                    index + 1 === country.states.length ?
                                        <li key={index}>
                                            {state.name}
                                        </li>
                                        :
                                        <li key={index}>
                                            {state.name},
                                        </li>
                                ))}
                            </ul>
                        }
                        {
                            country.continent.countries.length > 0 &&
                            <ul>
                                <strong>
                                    Países do mesmo continente:
                                </strong>
                                {country.continent.countries.map((countryCont, index) => (
                                    index + 1 === country.continent.countries.length ?
                                        <li key={index}>
                                            {countryCont.name}
                                        </li>
                                        :
                                        <li key={index}>
                                            {countryCont.name},
                                        </li>
                                ))}
                            </ul>
                        }
                    </div>
                </div>
            </S.InfosLatStyled>
            <div className='desktop'>
                {
                    country.subdivisions.length > 0 &&
                    <ul><strong>Subdivisões:</strong>
                        {country.subdivisions.map((sub, index) => (
                            index + 1 === country.subdivisions.length ?
                                <li key={index}>{sub.name}</li>
                                :
                                <li key={index}>{sub.name}, </li>
                        ))}
                    </ul>
                }
                {
                    country.states.length > 0 &&
                    <ul><strong>Estados:</strong>
                        {country.states.map((state, index) => (
                            index + 1 === country.states.length ?
                                <li key={index}>{state.name}</li>
                                :
                                <li key={index}>{state.name}, </li>
                        ))}
                    </ul>
                }
                {
                    country.continent.countries.length > 0 &&
                    <ul>
                        <strong>
                            Países do mesmo continente:
                        </strong>
                        {country.continent.countries.map((countryCont, index) => (
                            index + 1 === country.continent.countries.length ?
                                <li key={index}>
                                    {countryCont.name}
                                </li>
                                :
                                <li key={index}>
                                    {countryCont.name},
                                </li>
                        ))}
                    </ul>
                }
            </div>
        </S.CountryInfoStyled>
    )
}

export default CountryInfo;