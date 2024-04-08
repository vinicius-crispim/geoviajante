import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;

  &:hover {  
    button{
        border-color: #545863;
        color: #545863;
    }
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: -8px;
  background-color: #fff;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  top: 30px;
  margin: 0;
  z-index: 1;
  width: 135px;
  gap: 0;

  @media (max-width: 640px) {
    left: 140px;
    top: -10px;
  }

  @media (max-width: 330px) {
    left: 130px;
    top: -10px;
    width: 110px;
  }
`;

export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 640px) {
    background-color: #f0f0f0;
  }

  @media (max-width: 330px) {
    padding: 10px 8px;
    font-size: 12px;
  }
`;

export const DropdownToggle = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  font-size: 16px;
  letter-spacing: 2px;
  cursor: pointer;
`;
