import styled from "styled-components";
import { Colors } from "../../style/colors";

export const LoaderContainer = styled.div`
    display: flex;
    flex-direction:column;
    gap:8px;
    justify-content: center;
    align-items: center;

    p{
        font-size: 18px;
        letter-spacing: 2px;
    }
`

export const Loader = styled.div`  
  border: 12px solid ${Colors.orange_light}; 
  border-top: 12px solid ${Colors.white_nyanza};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`