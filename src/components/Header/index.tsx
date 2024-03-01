import { HeaderStyled } from './Header';

const Header = () => {
    return (
        <HeaderStyled>
            <div className="container container-space">
                <h1>GeoViajante</h1>
                <nav>
                    <button className="menu-button"
                    onClick={() =>{
                        const  menu = document.getElementById('menu');
                        menu?.classList.contains('show') ? menu?.classList.remove('show') : menu?.classList.add('show');
                    }} >
                        <div className='menu-icon'></div>
                        <div className='menu-icon'></div>
                        <div className='menu-icon'></div>
                    </button>
                    <ul className="menu" id='menu'>
                        <li><a href="#countries">Paises</a></li>
                        <li><a href="#continents">Continentes</a></li>
                        <li><a href="#continents">Jogo</a></li>
                    </ul>
                </nav>
            </div>
        </HeaderStyled>
    )
}

export default Header;