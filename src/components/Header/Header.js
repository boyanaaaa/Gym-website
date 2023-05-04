import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/gym1.png'
import Menu from '../../assets/menu.png'
import {Link} from "react-scroll";

const Header = () => {
    const mobile = window.innerWidth<=768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className="header"> 
            <img src={Logo} className="logo" />
            {menuOpened === false && mobile ===true? (
                <div onClick={()=>setMenuOpened(true)}><img src={Menu} style ={ { width: '2.5rem', height: '2.5rem'}} /></div>
            ) : (<ul className="header-menu">
            
            <li ><Link onClick={() => setMenuOpened(false)} to="hero" span={true} smooth={true}>Home</Link></li>
            <li ><Link onClick={() => setMenuOpened(false)} to="programs" span={true} smooth={true}>Programs</Link></li>
            <li ><Link onClick={() => setMenuOpened(false)} to="reasons" span={true} smooth={true}>Why Us?</Link></li>
            <li ><Link onClick={() => setMenuOpened(false)} to="plans" span={true} smooth={true}>Plans</Link></li>
            <li ><Link onClick={() => setMenuOpened(false)} to="testimonials" span={true} smooth={true}>Testimonials</Link></li>
        </ul>)}
            
        </div>
    )
}

export default Header
