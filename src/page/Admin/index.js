import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Admin.scss'

function Admin(props) {
    return (
        <div className="wrapper">
            <Header />
            <div className="container-app">
                <div className="content-app">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Admin
