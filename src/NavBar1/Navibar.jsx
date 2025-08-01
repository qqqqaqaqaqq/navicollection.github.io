﻿import './Navibar.css';
import './btn.css'
import GuestAuthOptions from './GuestAuthOptions.jsx';
import Hamburger from './Hamburger.jsx';
import { Link } from 'react-router-dom';
import { logo, link_menupage, link_authpage, link_loginpage, link_iconpage, link_searchimage } from './datalist.jsx';
import { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';

export function Navibar() {
    const [MobileMode] = useState(() => {
        const saved = sessionStorage.getItem('isMobile');
        return saved !== null ? saved=== 'true' : isMobile;
    });

    console.log(MobileMode);
    useEffect(() => {
        if (MobileMode === true) {
            import('./MobileCSS.css');
        }
    }, [MobileMode])

    return (
        <div className="head">
            {/* 
                haed
                 -navigate
                    -left
                        -icon
                        -logo
                            -linkbox
                    -center
                        -ssearch
                        -link
                            -rectanglebtn
                                -custombtn-number1
                    -right
                        -icon
                            -rectanglebtn
                                -radiusbtn
                        -mini-dashborad
            */}
            <div className="navigate">
                <div className="left">
                    <div className="icon" >
                        <Hamburger />
                    </div>
                    <div className='logo'>
                        {logo.map((item) => (
                            <Link to={item.url} key={item.id} className="linkbox" tabIndex="0">
                                <img src={item.img_url}
                                    alt={item.name} />
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="center">
                    <form className="search">
                        {link_searchimage.map((item) => (
                            <Link to={item.url} key={item.id}>
                                <img src={item.img_url}></img>
                            </Link>
                        ))}
                        <input type="text" placeholder="Search..." />
                        <button type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                    <div className="link">
                        {link_menupage.map((item) => (
                            <Link to={item.url} key={item.id} className="rectanglebtn" tabIndex="0">
                                <img src={item.img_url}
                                    alt={item.name}
                                    className="custombtn-number1"
                                />
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="right">
                    <div className="icon" >
                        {link_iconpage.map((item) => (
                            <Link to={item.url} key={item.id} className="rectanglebtn" tabIndex="0">
                                <img src={item.img_url}
                                    alt={item.name}
                                    className="radiusbtn"
                                />
                            </Link>
                        ))}
                    </div>
                    <div className="mini-dashborad">
                        <GuestAuthOptions link_loginpage={link_loginpage} link_authpage={link_authpage} />
                    </div>
                </div>
            </div>
        </div>
    );
}

