import { HeaderStyled } from './Header';
import Logo from '../../images/Logo.png'
import Dropdown from '../DropDown/index';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const continents = [
        {
            name: 'África',
            slug: 'AF',
        },
        {
            name:'Antártica',
            slug:'AN'
        },
        {
            name:'Ásia',
            slug:'AS'
        },
        {
            name:'Europa',
            slug:'EU'
        },
        {
            name:'Oceania',
            slug:'OC'
        },
        {
            name:'América do Norte',
            slug:'NA'
        },
        {
            name:'América do Sul',
            slug:'SA'
        }
    ]

    const handleDropDown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };
    return (
        <HeaderStyled>
            <div className="container container-space">
                <h1><Link to='/'><img src={Logo} alt="Geo Viajante" /></Link></h1>
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
                    <Link to="/"><li className="menu-item">Início</li></Link>
                        <li className="menu-item dropdown" onClick={handleDropDown}
                            onMouseLeave={closeDropdown}>
                            <Dropdown isOpenProp={isOpen} title='Continentes' options={continents} />
                        </li>
                        <Link to="/minigame"><li className="menu-item">Minigame</li></Link>
                        <Link to="/sobre"><li className="menu-item">Sobre</li></Link>
                    </ul>
                </nav>
            </div>
        </HeaderStyled>
    )
}

export default Header;