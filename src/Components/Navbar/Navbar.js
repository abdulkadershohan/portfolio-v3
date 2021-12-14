import React,{useState} from "react";
import logo from '../../images/protfolio-logo.svg'
import {Link} from 'react-scroll'
import './Navbar.css'

function Navbar() {
    const [nav,setNav]=useState(false)
    const changeBackground =()=>{
        if(window.scrollY >=50) {
            setNav(true)
        }
        else{
            setNav(false)
        }
        window.addEventListener('scroll',changeBackground)

    }
    return(
        <nav className={nav ? "active":"nav"}>
            <Link to ='main' className='logo' smooth={true} duration={1000}>
                <img src={logo} alt=''/>
            </Link>
            <input type="checkbox" className="menu-btn" id='menu-btn'/>
            <label for="menu-btn" className="menu-icon">
                <span className="nav-icon"></span>
            </label>
            <ul className="menu">
                <li><Link to="main" smooth={true} duration={1000}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={1000}>ABOUT</Link></li>
                <li><Link to="skills" smooth={true} duration={1000}>Skills</Link></li>
                <li><Link to="portfolio" smooth={true} duration={1000}>Portfolio</Link></li>
                <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>

            </ul>


        </nav>
    )

}
export default Navbar