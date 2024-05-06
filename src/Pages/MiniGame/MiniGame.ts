import styled from "styled-components";
import { Colors } from "../../style/colors";

export const MiniGameContainer = styled.div`
    margin: 12px auto;
    text-align: center;

    p{
        margin: 20px 0;
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
        margin: 40px 0;
    }
    
    ul{
        display: flex;
        justify-content: space-between;
        gap: 32px;
        margin: 20px 0;
        flex-wrap: wrap;

        h3{
            display:none;
        }
    
    }   

    .correctAnswer{
        background-color: green;
    }

    .incorrectAnswer{
        background-color: red;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 32px auto;
    }
    
    .btnAnswer{
        display: none;
    }
    
    .show{
        display: block;
    }
`