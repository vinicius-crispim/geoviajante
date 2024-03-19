import * as S from './Loader'

const Loader = () => {
    return (

        <S.LoaderContainer>
            <p>Carregando</p>
            <S.Loader/>
        </S.LoaderContainer>
        // <S.LoaderStyled>
        //     <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        // </S.LoaderStyled>
    )
}

export default Loader;