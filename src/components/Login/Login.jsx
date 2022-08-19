import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/UNACLogo.png";
import imgLogin from "./../../assets/illustrationLogin.png";

const Login = () => {
  return (
    <div className={styles.Login}>
      <div className={styles.wrapper_login}>
        <div className={styles.container_form}>
          <div className={styles.wrapper_image_logo}>
            <Link to="/">

            <img src={imgLogo} alt="" className={styles.img_logo} />
            </Link>
          </div>
          <h1 className={styles.h1_Form}>Inicia sesión</h1>
          <form action="" className={styles.form_login}>
            <label htmlFor="" className={styles.label_email}>
              Dirección email
            </label>
            <input
              type="email"
              name=""
              id=""
              className={styles.input_email}
              placeholder="Ingresa tu email aquí..."
            />
            <br />
            <label htmlFor="" className={styles.label_password} >
              Contraseña
            </label>
            <input type="text" className={styles.input_password} placeholder="Ingresa tu contraseña aquí..." />

<br />



            <div className={styles.wrapper_remember}>
              <div className={styles.wrapper_checkbox}>
                <input type="checkbox" name="" id="checkbox" className={styles.input_checkbox} />
                <label htmlFor="checkbox" className={styles.label_checkbox}>Recordar contraseña</label>
              </div>
              <a href="" className={styles.save_password}>¿Recuperar contraseña?</a>
            </div>




            <button type="submit" className={styles.login_button_admin}>
                Iniciar sesión
            </button>
          </form>
        </div>
      </div>
      <div className={styles.wrapper_img}>
        <img src={imgLogin} alt="" />
      </div>
    </div>
  );
};

export default Login;
