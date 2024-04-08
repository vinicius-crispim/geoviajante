import { useEffect, useState } from 'react';
import * as S from './DropDown'

interface DropDownProps {
  isOpenProp: boolean
  title: string
  options: {
    name: string
    slug?: string
  }[]
}

const Dropdown = ({ isOpenProp, title, options }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(isOpenProp);

  useEffect(() => {
    setIsOpen(isOpenProp)
  }, [isOpenProp])

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
          {options.map((option, index) => {
              return (
                <S.DropdownItem key={index} onClick={handleItemClick}>{option.name}</S.DropdownItem>
              )
            })
          }
        </S.DropdownList>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;