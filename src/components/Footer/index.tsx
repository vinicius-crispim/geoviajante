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
                    <a href="https://github.com/vinicius-crispim" target="_blank" rel="noreferrer">
                        <FaGithub className="icone" />
                    </a>
                    <a href="https://www.linkedin.com/in/vinicius-crispim-de-azevedo-349a05219/" target="_blank" rel="noreferrer">
                        <FaLinkedin className="icone" />
                    </a>
                    <a href="https://www.instagram.com/vini_crispim02/" target="_blank" rel="noreferrer">
                        <FaInstagram className="icone" />

                    </a>
                </S.SocialMediaStyled>
            </div>
            <p>Desenvolvido por Vinicius Crispim &copy; 2024</p>
        </S.FooterStyled>
    )
}

export default Footer;