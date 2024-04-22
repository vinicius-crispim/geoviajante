import styled from "styled-components";

export const NotFound = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  margin: 24px 0;
    .voltar {
      margin: 0 auto;
      display: flex;
      justify-content: flex-start;
      margin-bottom: 4px;
      button {
        background-color: transparent;
        border: none;
        color: $red;
        cursor: pointer;
        font-size: 1.5rem;
        font-weight: bold;
      }
    }

    .img {
        max-width: 520px;
    }
`