import React, { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import './header.css'

function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    function showmenu(e) {
        e.preventDefault();
        setSidebarOpen(true)
    }

    function closemenu(e){
        e.preventDefault();
        setSidebarOpen(false)
    }
    return (
        <header>
            <img src='images/logo.svg' alt='Logo' />

            <ul>
                <li><a href='#'>Model S</a></li>
                <li><a href='#'>Model 3</a></li>
                <li><a href='#'>Model X</a></li>
                <li><a href='#'>Model Y</a></li>
                <li><a href='#'>Solor Roof</a></li>
                <li><a href='#'>Solor Panels</a></li>
            </ul>

            <ul>
                <li><a href='#'>Shop</a></li>
                <li><a href='#'>Amount</a></li>
                <li><a href='#' onClick={showmenu}>Menu</a></li>
            </ul>

            <ul className='sidebar' style={{right:(sidebarOpen ==true) ? 0 : "-250px"}}>
                <li className='cancle'><a href='#'>Model S</a>
                <CancelIcon onClick={closemenu} />
                </li>
                <li><a href='#'>Model 3</a></li>
                <li><a href='#'>Model X</a></li>
                <li><a href='#'>Model Y</a></li>
                <li><a href='#'>Solor Roof</a></li>
                <li><a href='#'>Solor Panels</a></li>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade In</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>Powerwall</a></li>
                <li><a href='#'>Commercial Energy</a></li>
            </ul>
        </header>
    )
}

export default Header