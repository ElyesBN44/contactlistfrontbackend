import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <>
  <p data-item="Contact App">Contact App</p>
  <section>
    
    <nav>
      <ul className="menuItems">
        <li>
          <a href="#" data-item="Home">
            <Link to={'/'}>Home</Link>
          </a>
        </li>
        <li>
          <a href="/list" data-item="Contact List">
            Contact List
          </a>
        </li>
        <li>
          <a href="/add" data-item="Add Contact">
            Add Contact
          </a>
        </li>
        <li>
          <a href="/register" data-item="Login/Logout">
            Login/Logout
          </a>
        </li>
        
      </ul>
    </nav>
  </section>
</>

  )
}

export default NavBar
