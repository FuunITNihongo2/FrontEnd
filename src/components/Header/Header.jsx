import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import './Header.scss';
import {Link} from 'react-router-dom'


function Header() {
    const [active,setActive]=useState(false);
    return (
        <div className="header">
             <div className="header__logo">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Apple_Computer_Logo_rainbow.svg" width="40px" alt="" />
             </div>
             <ul className="header__menu">
                 <li><img src="https://material-kit-pro-react.devias.io/static/icons/uk_flag.svg" alt="" /> </li>
                 <li><span><i className="fas fa-search"></i></span></li>
                 <li><span><i class="fas fa-user-friends"></i></span></li>
                 <li><span><i class="fas fa-bell"></i></span></li>
                 <li className="flag" onClick={()=>setActive(!active)}><img src="https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-jane_rotanson.png" alt="" />
                     <div className={active?"logout-popup active":"logout-popup"}>
                        <div className="itemv">
                        <h2>Jane Rotanson</h2>
                         <p>Devias IO</p>
                        </div>
                         <div className="card__item">
                             <h4> <span><i className="fas fa-user"></i></span> Profile </h4>
                             <h4><span><i className="fas fa-cog"></i></span> Settings</h4>
                         </div>
                         <Link to="/login" className="loginv">Logout</Link>
                     </div>
                 </li>
             </ul>
            <Sidebar />
        </div>
    )
}

export default Header
