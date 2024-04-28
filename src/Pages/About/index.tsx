import Title from "../../components/Title";
import * as S from './About'

const About = () => {
    return (
        <S.AboutStyled>
            <Title>
                Sobre - Um pouco sobre o projeto
            </Title>
            <div className="container">
                <p>Este projeto tem como objetivo praticar React e tecnologias que ando estudando,
                    para desenvolvê-lo foram utilizadas duas APIs, a <strong>Countries GraphQL API</strong> relacionada
                    aos países e suas informações, disponível <a href="https://studio.apollographql.com/public/countries/variant/current/home"
                    target="_blank" rel="noreferrer">clicando aqui</a>, já para mostrar as imagens das bandeiras
                    de cada país, foi usada a API de bandeiras criada por <a href="https://flagpedia.net/"
                    target="_blank" rel="noreferrer">Flagpedia.net</a> que pode ser  
                    vista <a href='https://flagcdn.com/'target="_blank" rel="noreferrer">clicando aqui</a>.
                </p>
                <p>
                    Atualmente estou buscando minha primeira oportunidade na área para conseguir 
                    experiência e conhecimento, sigo estudando através de cursos, vídeos no YouTube 
                    e praticando por meio de projetos próprios como este, o GeoViajante, no qual realizei 
                    sozinho visando testar e fixar os conhecimentos que venho adquirindo. Caso tenha alguma 
                    observação, sugestão, crítica ou elogio, sinta-se a vontade de me <a href="mailto:vinicrispim02@hotmail.com"
                    target="_blank" rel="noreferrer">enviar um email</a> diretamente, eu ficarei muito grato.
                </p>
                <p>
                    <strong>Muito obrigado!</strong>
                </p>
            </div>
        </S.AboutStyled>
    )
}

export default About;