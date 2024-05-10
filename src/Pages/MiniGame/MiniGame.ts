import styled from "styled-components";

export const MiniGameContainer = styled.div`
    margin: 12px auto;
    text-align: center;
    
    p{
        margin: 8px 20px;
    }

    h3{
        display: inline;
        letter-spacing: 2px;
        font-size: 26px;
        border: 1px solid transparent;
        box-shadow: 0 0 6px rgba(0, 0, 0, .4);
        border-radius: 8px;
        padding: 8px 16px;
        width: auto;
        cursor: auto;
    }

    .title-div{
        margin: 28px 24px 20px 24px;
    }
    
    ul{
        display: flex;
        justify-content: center;
        margin: 8px 0;
        flex-wrap: wrap;
        gap: 0;
        h3{
            display:none;
        }
    
        li{
            margin: 16px 24px;
        }
    }   

    .correctAnswer{
        background-color: rgb(80, 200, 120, .7);
    }

    .incorrectAnswer{
        background-color: rgb(128, 0, 32, .5);
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px auto;
    }
    
    .btnAnswer{
        display: none;
    }
    
    .show{
        display: block;
    }

    @media (max-width:690px) {
        
        ul{
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }
    }
`

export const ScoreStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    p{
        margin: 0 24px;
        font-size: 18px;
        line-height: 1.5;
    }

    @media (max-width:400px) {
        
        p{
            margin: 0 8px;
        }
    }
`