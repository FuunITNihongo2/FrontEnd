import React from 'react';
import './HeaderCustomer.scss';

function HederCustomer({title,icon,text,clickShow}) {
    return (
        <div className="HederCustomer">
            <div className="header__center">
                <div className="customer__left">
                    <h3>{title}</h3>
                    <div className="left__list">
                        <a href="a">Dashboard</a>
                        <span><i className="fas fa-angle-right"></i></span>
                        <a href="a">Management</a>
                        <span><i className="fas fa-angle-right"></i></span>
                        <a className="a" href= "s">Customers</a>
                    </div>
                </div>
                <div className="customer__right">
                    <div className="button" onClick={clickShow}>
                        <span><i className={icon}></i></span>
                        <div className="add">{text}</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HederCustomer
