import * as S from './Loader'

interface LoaderProps {
    children?:React.ReactNode;
}

const Loader = ({ children = 'Carregando' }:LoaderProps) => {
    return (

        <S.LoaderContainer>
            <p>{children}</p>
            <S.Loader/>
        </S.LoaderContainer>
        // <S.LoaderStyled>
        //     <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        // </S.LoaderStyled>
    )
}

export default Loader;