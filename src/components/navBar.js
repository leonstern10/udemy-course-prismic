import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../css/navbar.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../utils/navLinks"
import link from "../utils/navButton"
import logo from "../images/logo.svg"
import {Dropdown,DropdownButton} from 'react-bootstrap';
import {FaAngleDown} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setNav] = useState()
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
        <Link to="/">
          <img src={logo} alt="eltop10 logo" />
          </Link>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <div  className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav} ${styles.dropdown}`
              : `${styles.navLinks} ${styles.dropdown}`
          }
        >
         <div className={styles.arrow}>  
        <DropdownButton id="dropdown-basic-button"  title="Categorias">
            <div className ={styles.linksBack}>
  <Dropdown.Item href="#/action-1">Electronica</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Health</Dropdown.Item>
  <Dropdown.Item href="#/action-3"> Deporte</Dropdown.Item>
  </div>
</DropdownButton>
<FaAngleDown/> 
</div> 

        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
            
       
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        
         <div className={styles.cta}>
         {link.map((item, index) => {
         return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
           
        </div>
        </ul>
        </div>
        
       
        
      </div>
    </nav>
  )
}

export default Navbar