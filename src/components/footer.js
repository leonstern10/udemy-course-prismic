import React from "react";
import {Link} from "gatsby";
import styles from "../css/footer.module.css";
import links from "../utils/footerLinks"

const Footer = () => {
  
  return (<div className={styles.footerWrap}>
      <div className={styles.footerLinks}>

        {links.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            )
          })}
        </div>
      
              <div className={styles.aviso}>
                <p>
                  Aviso: Los redactores de eltop10 no están asociados con los
                  fabricantes de los productos recomendados. Sin embargo,
                  publicamos enlaces de diferentes tiendas online que nos
                  aprovisionan. 
                </p>
                <p className ={styles.pia}>PIA is the best!</p>
              </div>
              <div className={styles.copyright}>
                <p>Copyright ©2020 Dynamic Intent</p>
              </div>
  
  </div>
  )
}

export default Footer
