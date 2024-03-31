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
    return (
        <S.CountryInfoStyled>
            <S.InfosLatStyled>
                <img
                    src={`https://flagcdn.com/h240/${code?.toLowerCase()}.png`}
                    alt={country.name}
                />
                <div>
                    <h4>Nome do país: {country.name}</h4>
                    <p>Continente: {country.continent.name}</p>
                    <p>Capital: {country.capital}</p>
                    <ul className='lista'>Moeda(s):
                        {country.currencies.map((currency, index) => (
                            <li key={index}>{currency}</li>
                        ))}
                    </ul>
                    <ul className='lista'>Idioma(s):
                        {country.languages.map((language, index) => (
                            <li key={index}>{language.name}</li>
                        ))}
                    </ul>
                    <p>Código de país: +{country.phone}</p>
                    <div className='mobile'>
                        {
                            country.subdivisions.length > 0 &&
                            <ul>Subdivisões:
                                {country.subdivisions.map((sub, index) => (
                                    <li key={index}>{sub.name}</li>
                                ))}
                            </ul>
                        }
                        {
                            country.states.length > 0 &&
                            <ul>Estados:
                                {country.states.map((state, index) => (
                                    <li key={index}>{state.name}</li>
                                ))}
                            </ul>
                        }
                    </div>
                </div>
            </S.InfosLatStyled>
            <div className='desktop'>
                {
                    country.subdivisions.length > 0 &&
                    <ul>Subdivisões:
                        {country.subdivisions.map((sub, index) => (
                            <li key={index}>{sub.name}</li>
                        ))}
                    </ul>
                }
                {
                    country.states.length > 0 &&
                    <ul>Estados:
                        {country.states.map((state, index) => (
                            <li key={index}>{state.name}</li>
                        ))}
                    </ul>
                }
            </div>
        </S.CountryInfoStyled>
    )
}

export default CountryInfo;