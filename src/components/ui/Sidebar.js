import React, { useState } from 'react'
import '../../styles/ui/sidebar.scss'

import { HiMenuAlt3, HiMenuAlt2, HiTemplate } from "react-icons/hi";

export default function Sidebar({setIsActive, isActive}) {

  const handlerSidebar = () => {
    setIsActive(!isActive)
  }
  
  return (
    <div className={`sidebar ${isActive ? 'sidebar-active' : ''}`}>
        <div className={isActive ? `sidebar-icon show` : 'hide'}>
         <h2>Educa</h2>
        </div>
        <div className='sidebar-title' onClick={handlerSidebar}>
          {
            isActive
              ? <HiMenuAlt3 size="25px"/>
              : <HiMenuAlt2 size="25px"/>

          }
        </div>
        <ul>
          <li>
            <a>
                <HiTemplate />
                <span className="title">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <HiTemplate />
              <span className="title">Stars</span>
            </a>
          </li>
          <li>
            <a href="#">
              <HiTemplate />
              <span className="title"> Forms</span>
            </a>
          </li>
          <li>
            <a href="#">
              <HiTemplate />
              <span className="title"> Pages</span>
            </a>
          </li>
        </ul>
    </div>
  )
}
