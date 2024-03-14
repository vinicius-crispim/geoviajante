import { ICountry } from '../../interfaces/ICountry';
import * as S from './CountryCard'


interface ICountryCardProps {
    country: ICountry;
}

const CountryCard = ({ country }: ICountryCardProps) => {
    console.log(country.code)

    return (
        <S.CountryCardStyle>
            <img
                src={`https://flagcdn.com/h240/${country.code.toLowerCase()}.png`}
                alt="Bandeira da Ucrânia"
            />
                <h3>{country.name}</h3>
        </S.CountryCardStyle>
    )
}

export default CountryCard;