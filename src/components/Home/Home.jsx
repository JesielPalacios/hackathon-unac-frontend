import React from "react";
import styles from "./Home.module.css";
import imgHero from "../../assets/Home/Group2099.png";
import * as bootstrap from "bootstrap";
import { Seo } from "../layout/Seo";

const Home = () => {
  const processes = [
    {
      title: "Admisiones y registro",
      description:
        "En este sitio podrá encontrar toda la información necesaria de los procesos académicos que maneja la Corporación Universitaria Adventista – UNAC. Así mismo, una serie de indicaciones paso a paso de cómo puede diligenciar todos y cada uno de los diferentes formatos para Homologaciones, habilitaciones y cancelación de matriculas y materias.",
    },
    {
      title: "Transferencia interna",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae voluptas magnam dolores aut aliquam cumque nostrum",
    },
    {
      title: "Derecho de grado",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae voluptas magnam dolores aut aliquam cumque nostrum",
    },
    {
      title: "Habilitaciones",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae voluptas magnam dolores aut aliquam cumque nostrum",
    },
    {
      title: "Supletorios",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae voluptas magnam dolores aut aliquam cumque nostrum",
    },
    {
      title: "Cancelación de matrículas",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae voluptas magnam dolores aut aliquam cumque nostrum",
    },
    {
      title: "SABER PRO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis repudiandae voluptas magnam dolores aut aliquam cumque nostrum",
    },
  ];

  // console.log(processes);
  return (
    <div className={styles.Home}>
      <Seo title="Inicio" subtitle='Sistema Virtual de Peticiones para el departamento de admisiones de la UNAC'/>

      <section className={styles.Hero}>
        <div className={styles.hero_wrapper_content}>
          <div className={styles.hero_content}>
            <h1 className={styles.hero_h1}>{processes[0].title}</h1>
            <h3 className={styles.hero_h2}>Procesos académicos</h3>
            <p className={styles.hero_paragraph}>{processes[0].description}</p>
          </div>
        </div>
        <div className={styles.hero_wrapper_img}>
          <img src={imgHero} alt="" className={styles.img_Hero} />
        </div>
      </section>
    </div>
  );
};

export default Home;
