import styled from "styled-components";

export const CardStyled = styled.li`
    list-style: none;
    width: 280px;
    min-height: 180px;
    text-align: center;
    
    border:1px solid rgba(0,0,0,0.71);
    -webkit-box-shadow: 4px 2px 10px 1px rgba(0,0,0,0.71);
    -moz-box-shadow: 4px 2px 10px 1px rgba(0,0,0,0.71);
    box-shadow: 4px 2px 10px 1px rgba(0,0,0,0.71);
    border-radius: 10px;
    
    padding: 12px 16px;
    margin: 8px 0;

    h3{
        letter-spacing: 3px;
        margin-bottom: 0;
        margin-top: 28px;
    }

    p{
        letter-spacing: 1px;
        margin-top: 16px;
        line-height: 1.5;
    }
`