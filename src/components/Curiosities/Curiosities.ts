import styled from "styled-components";

export const CuriositiesStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul{
        width: 80%;
        display: flex;
        justify-content: space-around;
        gap:24px;
        flex-wrap: wrap;
    }

    button{
        width: 160px;
    }
`