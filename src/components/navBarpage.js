import React, { useState } from "react"
import { Link } from "gatsby"
import styles from "../css/navbarpage.module.css"
import { FaAlignRight } from "react-icons/fa"
import links from "../utils/navLinks"
import link from "../utils/navButton"
import logoColor from "../images/logoColor.svg"
const Navbarpage = () => {
  const [isOpen, setNav] = useState()
  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
        <Link to="/">
          <img src={logoColor} alt="eltop10 logo" className={styles.image} />
          </Link>
          <button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
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
    </nav>
  )
}

export default Navbarpage