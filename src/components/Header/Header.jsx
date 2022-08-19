import React from "react";
import styles from "./Header.module.css";
import imgLogo from "./../../assets/Home/Logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.home_header}>
      <div className={styles.home_wrapper_logo}>
        <img src={imgLogo} alt="" />
      </div>
      <div className={styles.home_wrapper_links}>
        <ul className={styles.home_list_links}>
          <li className={styles.home_item_link}>
            <Link to="/" className={styles.home_link}>
              Inicio
            </Link>
          </li>
          <li className={styles.home_item_link}>
            <Link to="/procesos" className={styles.home_link}>
              Procesos académicos
            </Link>
          </li>
          <li className={styles.home_item_link}>
            <Link to="/revisiones" className={styles.home_link}>
              Revisiones de pago
            </Link>
          </li>
          <li className={styles.home_item_link}>
            <Link to="/about_us" className={styles.home_link}>
              Conócenos
            </Link>
          </li>
          <li className={styles.home_item_link}>
            <Link to="/login" className={styles.home_link_admin}>
              <span className={styles.link_admin_span}>
                Login admin
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
