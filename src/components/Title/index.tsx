import { TitleStyled } from "./Title";

interface TitleProps{
    children: React.ReactNode;
}

const Title = ({ children } : TitleProps) => {
    return(
        <TitleStyled>
            {children}
        </TitleStyled>
    )
}

export default Title;