import * as S from './Card'
interface ICard{
    data: {
        portugues: string;
        ingles: string;
        curiosidade: string;
    }
}

const Card = ({ data }:ICard) => {
    return (
        <S.CardStyled>
            <h3>{data.portugues}</h3>
            <p>{data.curiosidade}</p>
        </S.CardStyled>
    )
}

export default Card;