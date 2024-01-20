
const Header = ({changeMode, darkMode}) => {

    const showMenu = ()=>{
        document.querySelector(".nav__menu").classList.toggle("show__menu")
    }

    const closeMenu = ()=>{
        document.querySelector(".nav__menu").classList.remove("show__menu")
    }
    
    return (
        <header className="header">
            <nav className="nav container">
                <a className="nav__logo">
                    {
                        darkMode ? <img src="/Logo.png" alt="" className="logo--icon"/> : <img src="/react.png" alt="" className="logo--icon"/>
                    }
                </a>
                {/* nav__menu */}
                <div className="nav__menu" onClick={closeMenu}>
                    {/* btn--close */}
                    <button type="button" className="btn--close">
                        <i className='bx bx-x'></i>
                    </button>
                    {/* nav__list */}
                    <ul className="nav__list">
                        {/* nav__link */}
                        <i onClick={changeMode} className={`nav__link transition-colors bx ${darkMode ? "bx-sun": "bx-moon dark"}`} ></i>
                        <li><a href="#SectionHome" className="nav__link transition-colors"><i className='bx bx-home-alt-2'></i></a></li>
                        <li><a href="#SectionAboutMe" className="nav__link transition-colors"><i className='bx bx-user'></i></a></li>
                        <li><a href="#SectionWorkExperience" className="nav__link transition-colors"><i className='bx bx-code-alt'></i></a></li>
                        <li><a href="#SectionWorkExperience" className="nav__link transition-colors"><i className='bx bx-folder-open'></i></a></li>
                        <li><a href="#SectionWorkExperience" className="nav__link transition-colors"><i className='bx bx-conversation'></i></a></li>
                    </ul>
                </div>
                <div className="nav__buttons">
                    <button type="button" className="nav__btn btn--menu" onClick={showMenu}>
                        <i className='bx bx-menu'></i>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header