import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { NavLink, useParams } from 'react-router-dom'
function Sidebar() {
  const param = useParams()
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
            <NavLink to="/admin/booths"> <span><i class="fas fa-address-book"></i></span> Booths</NavLink>
          </li>
          <li>
            <NavLink to={`/admin/booth/${param.id}/products`}> <span><i class="fas fa-address-book"></i></span>Products</NavLink>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Sidebar
