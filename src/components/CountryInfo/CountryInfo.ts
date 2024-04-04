import styled from "styled-components";

export const CountryInfoStyled = styled.section`
    display: flex;
    margin: 32px auto;
    align-items: center;
    width: 90%;
    flex-direction: column;
    justify-content: center;
    h4, p, ul{
            margin: 10px 0;
            font-size: 18px;
        }
        
    h4{
        font-size: 20px;
    }

    .mobile{
        display: none;
    }

    ul{
        list-style: none;
        
        li{
            display: inline-block;
            margin: 6px 8px;
            line-height: 1;
        }
    }
    
    .vizinhos, .desktop{
        display: flex;
        align-items: start;
        width:70%;
        flex-direction: column;
        max-width: 800px;
        text-align:start;
        margin-top: 12px;
        ul{
            margin: 12px 0;
        }
    }

    .lista{
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        
        li{
            margin: 0 4px;
        }
    }

    @media (max-width: 860px) {
        .desktop{
            display: none;
        }
        .vizinhos{
            width: 100%;
            text-align:start;
            ul{
                width:80%;
                margin: 0 auto;
            }
            li{
                margin: 0 4px;
                line-height: 1.5;
            }
        }
    }
    
    @media (max-width: 520px) {
        margin: 24px auto;
    }
    `

export const InfosLatStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:40px;
    align-items: center;
    justify-content: center;
    
    div{
        display: flex;
        flex-direction: column;
        height: 100%; 
    }
    
    img {
        max-width:55%;   
        height:310px;
        border:1px solid rgba(0,0,0,0.71);
        -webkit-box-shadow: 4px 2px 10px 1px rgba(0,0,0,0.71);
        -moz-box-shadow: 4px 2px 10px 1px rgba(0,0,0,0.71);
        box-shadow: 4px 2px 10px 1px rgba(0,0,0,0.71);
        border-radius: 10px;
    }
    
    @media (max-width: 860px) {
        flex-direction:column;
        text-align: center;
        gap: 12px;
        img {
            max-width:100%;
            height: 260px;
        }
        div{
            width:60%; 
            margin: 8px 0;
            text-align: start;
        }
        .mobile{
            display: flex;
            width: 100%;
            text-align:start;
            flex-direction: column;

            li{
                margin: 0 4px;
                line-height: 1.5;
            }
        }
    }
    
    @media (max-width: 460px) {
        img{
            max-width:100%;
            width: 100%;
            height: 230px;
        }
        div{
            width:100%;
        }
    }
    
    `