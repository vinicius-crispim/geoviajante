import { HeaderStyled } from './Header';
import Logo from '../../images/Logo.png'
import Dropdown from '../DropDown/index';
import { useState } from 'react';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleDropDown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };
    console.log(window.innerWidth)
    return (
        <HeaderStyled>
            <div className="container container-space">
                <h1><img src={Logo} alt="Geo Viajante" /></h1>
                <nav>
                    <button className="menu-button"
                        onClick={() => {
                            const menu = document.getElementById('menu');
                            menu?.classList.contains('show') ? menu?.classList.remove('show') : menu?.classList.add('show');
                        }} >
                        <div className='menu-icon'></div>
                        <div className='menu-icon'></div>
                        <div className='menu-icon'></div>
                    </button>
                    <ul className="menu" id='menu'>
                        {window.innerWidth < 600 && <>aaaaaaaa</>}
                        {/* <li className="menu-item"><Link to={'continents'}>Continentes</Link></li> */}
                        <li className="menu-item dropdown" onClick={handleDropDown} 
                        onMouseLeave={closeDropdown}>
                                <Dropdown isOpenProp={isOpen} title='Continentes'/>
                        </li>
                        <li className="menu-item"><a href="#minigame">Minigame</a></li>
                        <li className="menu-item"><a href="#about">Sobre</a></li>
                    </ul>
                </nav>
            </div>
        </HeaderStyled>
    )
}

export default Header;