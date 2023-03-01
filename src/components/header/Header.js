import React, { useState } from "react";
import './Header.css';

const Menu = ({ navLabels, showMenuMobile }) => {
    return <div className={"nav__menu " + (showMenuMobile ? "nav__mobile" : "")}>
        <ul className="nav__list grid">
            {
                navLabels.map(label => {
                    return <li className="nav__items">
                        <a href={`#${label.toLowerCase()}`} className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i>

                            {label}
                        </a>
                    </li>
                })
            }
        </ul>
    </div>
}

const Header = () => {

    // Toggle Menu Bar
    const [showMenuMobile, setShowMenuMobile] = useState(false);

    const navLabels = [
        "Home",
        "About",
        "Skills",
        "Services",
        "Contact"
    ]

    return (

        <header className="header">
            <nav className="nav container">
                <span href="index.html" className="nav__logo_head">AKSHAY</span>
                {
                    <Menu navLabels={navLabels} />
                }
                <div className="nav__toggle"
                    onClick={() => {
                        setShowMenuMobile(!showMenuMobile)
                    }}>
                    {
                        showMenuMobile
                            ? <i class="uil uil-multiply"></i>
                            : <i class="uil uil-apps"></i>
                    }
                </div>
            </nav>
            {
                showMenuMobile &&
                <Menu navLabels={navLabels} showMenuMobile={showMenuMobile} />
            }
        </header>
    );
}

export default Header;
