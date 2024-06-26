import styled from "styled-components";
import { Colors } from "../../style/colors";


export const CountriesListStyled = styled.div`

    form{
        margin:32px auto;
        text-align: center;

        p{
            color: rgba(149, 165, 166, 1);
            margin: 0 auto 24px;
            max-width: 420px;
            min-width: 180px;
            text-align: start;
        }
    }

    input{
        max-width: 420px;
        margin: 12px auto 8px;
        width: 100%;
        min-width: 180px;
        background-color:rgba(180, 180, 180, .15);
        border-radius: 10px;
        padding: 10px;
        border: 1px solid ${Colors.orange_light};
        outline:none;
    }

    input:focus{
        border-color: ${Colors.orange_dark};
    }

    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 64px;
    }

    .buttons{
        display: flex;
        justify-content: center;

        button{
            width: 160px;
        }
    }

    @media (max-width: 640px) {
        input{
            width: 200px;
        }
    }
`