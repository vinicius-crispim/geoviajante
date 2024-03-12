import styled from "styled-components";
import { Colors } from "../../style/colors";

export const BannerStyle = styled.section`
    padding: 80px 0;
    text-align: center;
    color: ${Colors.white_nyanza};
    letter-spacing: 2px;
    font-weight: 600;
    background-image: linear-gradient(405deg, rgba(240, 99, 99, 0.8) 0%, rgba(240, 99, 99, 0.8) 11%,rgba(230, 115, 107, 0.8) 11%, rgba(230, 115, 107, 0.8) 24%,rgba(220, 132, 114, 0.8) 24%, rgba(220, 132, 114, 0.8) 29%,rgba(210, 148, 122, 0.8) 29%, rgba(210, 148, 122, 0.8) 45%,rgba(199, 164, 129, 0.8) 45%, rgba(199, 164, 129, 0.8) 87%,rgba(189, 181, 137, .8) 87%, rgba(189, 181, 137, .8) 90%,rgba(179, 197, 144, .8) 90%, rgba(179, 197, 144, .8) 100%),linear-gradient(67.8deg, rgba(240, 99, 99, .8) 0%, rgba(240, 99, 99, .8) 11%,rgba(230, 115, 107, .8) 11%, rgba(230, 115, 107, .8) 24%,rgba(220, 132, 114, .8) 24%, rgba(220, 132, 114, .8) 29%,rgba(210, 148, 122, .8) 29%, rgba(210, 148, 122, .8) 45%,rgba(199, 164, 129, .8) 45%, rgba(199, 164, 129, .8) 87%,rgba(189, 181, 137, .8) 87%, rgba(189, 181, 137, .8) 90%,rgba(179, 197, 144, .8) 90%, rgba(179, 197, 144, .8) 100%),linear-gradient(495deg, rgba(240, 99, 99, .8) 0%, rgba(240, 99, 99, .8) 11%,rgba(230, 115, 107, .8) 11%, rgba(230, 115, 107, .8) 24%,rgba(220, 132, 114, .8) 24%, rgba(220, 132, 114, .8) 29%,rgba(210, 148, 122, .8) 29%, rgba(210, 148, 122, .8) 45%,rgba(199, 164, 129, .8) 45%, rgba(199, 164, 129, .8) 87%,rgba(189, 181, 137, .8) 87%, rgba(189, 181, 137, .8) 90%,rgba(179, 197, 144, .8) 90%, rgba(179, 197, 144, .8) 100%),linear-gradient(450deg, rgba(156, 174, 7, .8),rgba(129, 53, 44, .8)); background-blend-mode:overlay,overlay,overlay,normal;    
    h2 {
        font-size: 36px;
        margin-top: 0;
        margin-bottom: 12px;
    }
    
    h3 {
        margin-top: 0;
        font-size: 18px;
    }

    input{
        min-width: 420px;
        border-radius: 10px;
        padding: 10px;
        border: none;
        outline:none;
    }
`