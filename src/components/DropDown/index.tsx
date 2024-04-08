import { useEffect, useState } from 'react';
import * as S from './DropDown'

interface DropDownProps{
    isOpenProp: boolean
    title: string
}

const Dropdown = ({ isOpenProp, title } : DropDownProps) => {
    const [isOpen, setIsOpen] = useState(isOpenProp);

    useEffect(()=> {
        setIsOpen(isOpenProp)
    }
    ,[isOpenProp])

    console.log(isOpen) 
    const handleItemClick = () => {
      // handle item click logic here
      setIsOpen(false);
    };
  
    return (
      <S.DropdownContainer>
        <S.DropdownToggle>{title}</S.DropdownToggle>
        {isOpen && (
          <S.DropdownList>
            <S.DropdownItem onClick={handleItemClick}>Option 1</S.DropdownItem>
            <S.DropdownItem onClick={handleItemClick}>Option 2</S.DropdownItem>
            <S.DropdownItem onClick={handleItemClick}>Option 3</S.DropdownItem>
          </S.DropdownList>
        )}
      </S.DropdownContainer>
    );
  };
  
  export default Dropdown;