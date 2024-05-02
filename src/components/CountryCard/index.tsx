import { Link } from 'react-router-dom';
import { ICountry } from '../../interfaces/ICountry';
import * as S from './CountryCard'


interface ICountryCardProps {
    country: ICountry;
    game?: boolean;
}

const CountryCard = ({ country, game }: ICountryCardProps) => {
    return (
        <S.CountryCardStyle >
            {
                !game ?
                    <Link to={'/pais/' + country.code}>
                        <img
                            src={`https://flagcdn.com/h240/${country.code.toLowerCase()}.png`}
                            alt={country.name}
                        />
                        <h3>{country.name}</h3>
                    </Link> :
                    <>
                        <img
                            src={`https://flagcdn.com/h240/${country.code.toLowerCase()}.png`}
                            alt={country.name} /><h3>{country.name}
                        </h3>
                    </>
            }
        </S.CountryCardStyle>
    )
}

export default CountryCard;