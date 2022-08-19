import React from "react";
import Header from "./../Header/Header";
import styles from "./About.module.css";
import imgAbout from "./../../assets/imgAbout.png";

const About = () => {
  return (
    <div className={styles.About}>
      <Header />
      <div className={styles.wrapper_about}>
        <div className={styles.wrapper_h1}>
          <h1 className={styles.h1_About}>Sobre nosotros</h1>
        </div>
        <div className={styles.wrapper_content_about}>
          <div className={styles.wrapper_paragraph}>
            <p className={styles.p_about}>
              <strong className={styles.strong_color}>Con nosotros</strong>{" "}
              podrás realizar tu proceso de matrículad e una manera mucho más{" "}
              <strong>rápida, eficiente</strong> y sin tantas complicaciones.
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
              <strong>Dolores officia ipsa</strong>, expedita alias quidem
              soluta velit rerum tenetur, reprehenderit vitae ipsum quibusdam
              sunt maiores voluptate in. Eos voluptas blanditiis sapiente!
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore labore quia fuga provident, recusandae,
              <strong>
                {" "}
                eaque laborum a voluptatibus quasi dolorem ipsam?
              </strong>{" "}
              Animi nisi officia impedit.
            </p>
            <a
            className={styles.emailLink}
            href="mailto:juand.cabanat@unac.edu.co"
            rel="noopener noreferrer"
            target="_blank"
          >
            Enviar email
          </a>
          </div>
          <div className={styles.wrapper_image_about}>
            <img src={imgAbout} alt="" className={styles.img_about} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
