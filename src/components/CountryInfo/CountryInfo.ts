import styled from "styled-components";

export const CountryInfoStyled = styled.section`
    display: flex;
    margin: 48px auto;
    align-items: center;
    width: 90%;
    flex-direction: column;
    justify-content: center;
    
    h4, p, ul{
            margin: 10px 0;
    }

    .mobile{
        display: none;
    }

    ul{
        list-style: none;
        
        li{
            display: inline;
            margin: 12px;
            line-height: 2;
        }
    }
    
    .desktop{
        display: block;
        width: 100%;
        text-align:center;
        ul{
            margin: 24px 0;
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
        width:40%;   
    }

    img {
        max-width:50%;   
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

        div{
            width:80%; 
            margin: 8px 0;
            align-items: start;
        }
        .mobile{
            display: block;
            width: 100%;
            margin: 0 auto;
            text-align:start;
        }
    }

`