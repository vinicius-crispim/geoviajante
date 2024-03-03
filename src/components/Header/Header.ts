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
    
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: flex;
      gap: 16px;
      font-size:16px;
    }
    
    li {
      padding: 10px 8px;
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
    .container{
      max-width: 90%;
    }
    nav {

      ul {
        display: none;
        gap:0;
        position: absolute;
        top: 100%;
        right: 0;
        background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
        flex-direction: column;
      }

      .menu-icon {
        width: 35px;
        height: 4px;
        background-color: #FFF;
        margin: 6px 0;
      }
      
      li {
        margin: 0;
        padding: 16px 24px;
      }
      a {
        color: #fff;
      }

      .menu-button {
        display: block;
        background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
        color: #fff;
        padding: 10px;
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
          color: #FFF;
        }
      }
    }
  }
`