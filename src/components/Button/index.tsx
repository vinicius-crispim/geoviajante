import * as S from './Button'
interface ButtonProps{
    children: React.ReactNode;
    onClick: () => false | void;
}

const Button = ({ children, onClick } : ButtonProps) => {
    return (
        <S.ButtonStyled onClick={onClick}>{children}</S.ButtonStyled>
    )
}

export default Button;