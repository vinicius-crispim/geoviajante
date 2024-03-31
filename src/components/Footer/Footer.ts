import styled from "styled-components";
import { Colors } from "../../style/colors";

export const FooterStyled = styled.footer`
    width: 100%;
    display: flex;
    bottom: 0;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    padding: 0 0 6px 0;
    flex-wrap: wrap;

    h3{
        font-size: 1.1rem;
        color: ${Colors.green_olivine};
        letter-spacing: 2px;
        margin: 0;       
    }

    div img {
        width: 100px;
    }

    p{
        width: 100%;
        margin: 4px 0 0;
        font-size: 14px;
        text-align: center;
    }
`

export const SocialMediaStyled = styled.div`
    display: flex;
    gap: 12px;
    margin: 12px;
    justify-content: center;
    align-items: center;
    .icone{
        color: ${Colors.green_olivine};
        border-radius: 50%;
        padding: 8px;
        width: 18px;
        height: 18px;
        border: 1px solid ${Colors.green_olivine};
        transition: .3s;
        cursor: pointer;
    }
    
    .icone:hover{
        background-color: ${Colors.yellow_mindaro};
    }
`
