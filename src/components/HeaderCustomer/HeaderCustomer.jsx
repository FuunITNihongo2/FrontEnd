import React from "react";
import "./HeaderCustomer.css";

function HederCustomer({title,icon,text,onShow}) {
    return (
        <div className="HederCustomer">
            <div className="header__center">
                <div className="customer__left">
                    <h3>{title}</h3>
                    <div className="left__list">
                        <a href="a">Admin</a>
                        <span><i className="fas fa-angle-right"></i></span>
                        <a className="a" href= "s">Booths</a>
                    </div>
                </div>
                <div className="customer__right">
                    <div className="button" onClick={onShow}>
                        <span><i className={icon}></i></span>
                        <div className="add">{text}</div>
                    </div>
                </div>

            </div>
        </div>
  );
}

export default HederCustomer;
