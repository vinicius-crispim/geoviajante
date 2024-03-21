import styled from 'styled-components';

export const ButtonStyled = styled.button`
    padding: 10px;
    background-color:rgba(180, 180, 180, .4);
    margin: 20px;
    border-radius: 10px;
    border: 1px solid black;
    outline: none;
    letter-spacing: 1px;
    &:hover{
        cursor: pointer;
        background-color:rgba(180, 180, 180, .75);
    }
`