import React from "react";
import styles from "./Reviews.module.css";
import imgReviews from "../../assets/send_mail_icon_154536.png";
import { Link } from "react-router-dom";

const Reviews = () => {
  return (
    <div className={styles.Reviews}>
      <div className={styles.wrapper_content_reviews}>
        <div className={styles.wrapper_img_reviews}>
          <img src={imgReviews} alt="" className={styles.img_reviews} />
        </div>
        <form action="" className={styles.form_reviews}>
          <input type="text" className={styles.input_form} placeholder="Ingresa el id que llegó a tu correo" />
          <button className={styles.button_form}>Enviar</button>
        </form>
        <div className={styles.content_reviews}>
          <h1 className={styles.h1_reviews}>A continuación revisa tu correo</h1>
          <p className={styles.p_reviews}>
            En este paso debes revisar el correo que te llegó una vez ingresaste
            los datos cuando solicitaste tu proceso, si no te has registrado lo puedes hacer <Link to="/procesos" className={styles.link_procces}>aquí.</Link>
          </p>

          
        </div>
      </div>
    </div>
  );
};

export default Reviews;
