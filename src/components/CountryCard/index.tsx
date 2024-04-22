import { Link } from 'react-router-dom';
import { ICountry } from '../../interfaces/ICountry';
import * as S from './CountryCard'


interface ICountryCardProps {
    country: ICountry;
}

const CountryCard = ({ country }: ICountryCardProps) => {
    return (
        <S.CountryCardStyle >
            <Link to={'/pais/'+country.code}>
                <img
                    src={`https://flagcdn.com/h240/${country.code.toLowerCase()}.png`}
                    alt={country.name}
                />
                <h3>{country.name}</h3>
            </Link>
        </S.CountryCardStyle>
    )
}

export default CountryCard;