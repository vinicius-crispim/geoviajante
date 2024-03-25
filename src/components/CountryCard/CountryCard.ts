import styled from "styled-components";


export const CountryCardStyle = styled.li`
    width: 280px;
    height: 210px;
    position: relative;
    list-style: none;
    img{
        border-radius: 10px;
        width: 100%;
        height: 100%;
    }
    
    h3{
        margin: 0;
        padding: 10px;
        background-color: rgba(237, 231, 225, .9);
        right: 0;
        left: 0;
        font-weight: 400;
        position: absolute;
        text-align: center;
        color: #000;
        font-size: 20px;
        transition: all 0.2s ease 0s;
        bottom:-10px;
        opacity:0;
    }
    
    img, h3{
        border:1px solid rgba(0,0,0,0.71);
        -webkit-box-shadow: 4px 2px 10px 1px rgba(0,0,0,0.71);
        -moz-box-shadow: 4px 2px 10px 1px rgba(0,0,0,0.71);
        box-shadow: 4px 2px 10px 1px rgba(0,0,0,0.71);
        border-radius: 10px;
    }
    h3{
        border-start-start-radius: 0;
        border-top-right-radius: 0;

    }
    &:hover{
        cursor: pointer;
        h3{
            bottom: -3px;
            opacity:1;
        }
    }

    @media (max-width: 640px) {
        width: 250px;
        height: 180px;
    }
`