import React, { useEffect, useState } from 'react'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom'
function Sidebar() {
  const [dropShow, setDropShow] = useState([{ arrow: false },
  { arrow: false }, { arrow: false }, { arrow: false }])

  const handlerShowDropMenu = (num) => {
    const newDrop = [...dropShow];
    newDrop[num - 1].arrow = !newDrop[num - 1].arrow;
    setDropShow(newDrop)
  }
  useEffect(() => {

    return () => {

    };
  }, []);
  return (
    <div className="sidebar">
      <div className="user-card">
        <div className="user-border">
          <img src="https://material-kit-pro-react.devias.io/static/mock-images/avatars/avatar-jane_rotanson.png" alt="" />
          <div className="user-text">
            <h4>Jane Rotanson</h4>
            <h6>Your plan: <span>Premium</span></h6>
          </div>
        </div>
      </div>

      <div className="sidebar-list">
        <h2 className="title-sidebar">GENERAL</h2>
        <ul className="list-overview">
          <li>
            <NavLink to="/dashboard"> <span><i class="fas fa-address-book"></i></span> Overview</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard"> <span><i class="fas fa-chart-pie"></i></span> Analytics</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard"> <span><i class="fas fa-wallet"></i></span> Finance</NavLink>
          </li>
          <li>
            <NavLink to="/account"> <span><i class="fas fa-user"></i></span> Account</NavLink>
          </li>
        </ul>
        <h2 className="title-sidebar">MANAGEMENT</h2>
        <ul className="list-overview view2">

          <li className="itemOverview" >
            <h4 onClick={() => handlerShowDropMenu(1)} ><span><i class="fas fa-user-friends"></i></span> <p>Customers</p>  <span className={dropShow[0].arrow ? 'active' : ''}><i class="fas fa-angle-down"></i></span> </h4>
            <div className={dropShow[0].arrow ? 'dropmenu show' : 'dropmenu'} >
              <NavLink to="/customers/list"> <p>List</p> </NavLink>
              <NavLink to="/customers/detail"> <p>Detail</p></NavLink>
              <NavLink to="/customers/edit"> <p>Edit</p> </NavLink>
            </div>
          </li>
          <li className="itemOverview" >
            <h4 onClick={() => handlerShowDropMenu(2)}><span><i class="fas fa-shopping-cart"></i></span> <p>Products</p>  <span className={dropShow[1].arrow ? 'active' : ''}><i class="fas fa-angle-down"></i></span> </h4>
            <div className={dropShow[1].arrow ? 'dropmenu show' : 'dropmenu'} >
              <NavLink to="/product/list"> <p>List</p> </NavLink>
              <NavLink to="/product/create"> <p>Create</p></NavLink>
     
            </div>
          </li>
          <li className="itemOverview" >
            <h4 onClick={() => handlerShowDropMenu(3)} ><span><i class="fas fa-folder-open"></i></span> <p>Orders</p>  <span className={dropShow[2].arrow ? 'active' : ''}><i class="fas fa-angle-down"></i></span> </h4>
            <div className={dropShow[2].arrow ? 'dropmenu show' : 'dropmenu'} >
              <NavLink to="/orders/list"> <p>List</p> </NavLink>
              <NavLink to="/orders/detail"> <p>Detail</p></NavLink>
            </div>
          </li>
          <li className="itemOverview" >
            <h4 onClick={() => handlerShowDropMenu(4)} ><span><i class="fas fa-file-alt"></i></span> <p>Invoices</p>  <span className={dropShow[3].arrow ? 'active' : ''}><i class="fas fa-angle-down"></i></span> </h4>
            <div className={dropShow[3].arrow ? 'dropmenu show' : 'dropmenu'} >
              <NavLink to="/invoices/list"> <p>List</p> </NavLink>
              <NavLink to="/invoices/detail"> <p>Detail</p></NavLink>
            </div>
          </li>


        </ul>
      </div>

    </div>
  )
}

export default Sidebar
