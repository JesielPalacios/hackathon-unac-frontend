import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/UNACLogo.png";
import imgLogin from "./../../assets/illustrationLogin.png";
import styled from "styled-components";

const Login = () => {
  return (
    <div className={styles.Login}>
      <div className={styles.wrapper_login}>
        <div className={styles.container_form}>
          <div className={styles.wrapper_image_logo}>
            <Link to="/">
              <LogiImg src={imgLogo} alt="" className={styles.img_logo} />
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
            <label htmlFor="" className={styles.label_password}>
              Contraseña
            </label>
            <input
              type="text"
              className={styles.input_password}
              placeholder="Ingresa tu contraseña aquí..."
            />

            <br />

            <div className={styles.wrapper_remember}>
              <div className={styles.wrapper_checkbox}>
                <input
                  type="checkbox"
                  name=""
                  id="checkbox"
                  className={styles.input_checkbox}
                />
                <label htmlFor="checkbox" className={styles.label_checkbox}>
                  Recordar contraseña
                </label>
              </div>
              <a href="" className={styles.save_password}>
                ¿Recuperar contraseña?
              </a>
            </div>

            <LoginButton type="submit">Iniciar sesión</LoginButton>
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

const LoginButton = styled.button`
  border: none;
  height: 100%;
  margin: 0px;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  border: 1px solid #f5a800;
  /* background: #f5f5f5; */
  /* background: #eeeeee; */
  background: none;
  color: #f5a800;

  :hover {
    background-color: #f5a800;
    color: #ffffff;
  }
`;

const LogiImg = styled.img`
  width: 190px;
  cursor: pointer;

  :hover {
    background: rgba(47, 128, 237, 0.1);
    background: #9e1b1b0e;
    background: #eeeeee;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }
`;
