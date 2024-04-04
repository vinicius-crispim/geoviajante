import * as S from "./Footer"
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from '../../images/Logo.png'

const Footer = () => {
    return (
        <S.FooterStyled>
            <div>
                <img src={Logo} alt="DevFit" />
            </div>
            <div>
                <S.SocialMediaStyled>
                    <FaInstagram className="icone" />
                    <FaGithub className="icone" />
                    <FaLinkedin className="icone" />
                </S.SocialMediaStyled>
            </div>
            <p>Desenvolvido por Vinicius Crispim &copy; 2024</p>
        </S.FooterStyled>
    )
}

export default Footer;