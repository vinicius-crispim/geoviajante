import styled from "styled-components";

export const HeaderStyled = styled.header`
  color: black;
  padding: 20px 0;
  letter-spacing: 1px;
  .container {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  h1 {
    margin: 0;
    img {
      width: 80px;
    }
  }
  
  nav {
    position: relative;
    
    .menu {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 16px;
      font-size:16px;
    }
    
    .menu-item {
      padding: 12px 10px;
      box-sizing: border-box;
      border: 1px solid transparent;
      border-radius: 8px;
      cursor: pointer;
    }

    a {
      color: black;
      text-decoration: none;
      letter-spacing: 2px;
    }
    
    .menu-button {
      display: none;
    }
  }
  
  li:hover {
    border-color: #545863;
    a{
      color: #545863;
    }
  }

  @media (max-width: 640px) {

    padding: 10px 0;

    .container{
      max-width: 90%;
      flex-direction: row-reverse;
    }

    h1 img{
      position: relative;
      top: 5px;
      height: 38px;
      padding: 0;
      margin: 0;
    }

    nav {
      .menu {
        display: none;
        gap:0;
        position: absolute;
        top: 101%;
        left: 0;
        background: #FFF;
        flex-direction: column;
      }

      .menu-icon {
        width: 30px;
        height: 2px;
        background-color: #FFF;
        margin: 6px 0;
      }
      
      .menu-item {
        margin: 0;
        padding: 12px 20px;
        background-color: #f0f0f0;
      }
      a {
        color: #000;
      }

      .menu-button {
        display: block;
        background: linear-gradient(97.54deg, #FFB347 35.49%, #FF4500 165.37%);
        color: #fff;
        padding: 4px 10px;
        margin-right: 0;
        border: none;
        cursor: pointer;
      }

      .show {
        display: block;
      }

      li:hover {
        border-color: none;
        a{
          color: #000;
        }
      }
    }
  }

  @media (max-width: 330px) {
    nav .menu-item {
        padding: 10px 12px;
    }

    nav li {
      font-size:14px;
    }
  }
`