import { Link } from "react-router-dom";
import styled from "styled-components";
import { Seo } from "../layout/Seo";

const AcademicProcesses = () => {
  return (
    <Container>
      <Seo
        title="Procesos académicos"
        subtitle="A continuación toda la información referente a los procesos académicos que ofrece el departamento de Admisiones de la Corporaación Universitaria Adventista - UNAC"
      />

      <Title>Procesos Académicos</Title>

      <Subtitle>
        A continuación una lista con toda la información referente a los
        diferentes procesos académicos que ofrece el departamento de Admisiones
        de la Corporaación Universitaria Adventista - UNAC.
      </Subtitle>

      <details>
        <summary>1. Formulario para solicitar cancelación de materias</summary>
        <main>
          <p>
            <h2>
              Artículo 42. TÉRMINO PARA CANCELAR LA MATRÍCULA O MATERIAS Y SUS
              CONSECUENCIAS.
            </h2>

            <ol>
              <li>
                <h3>Cancelación de matrícula</h3>
                <ul>
                  <li>
                    Si la cancelación de matrícula se hace durante los primeros
                    cinco (5) días de clase, se reembolsará al estudiante el 50%
                    del dinero que haya pagado, o el total del pago se le dejará
                    en consignación para una próxima matrícula, de conformidad
                    con lo dispuesto en el parágrafo único del artículo 41 del
                    presente reglamento.
                  </li>
                  <li>
                    Si la cancelación se hace después de los primeros cinco (5)
                    días de clase no se aplicará lo dispuesto en el numeral
                    anterior.
                  </li>
                </ul>
              </li>
              <li>
                <h3>Cancelación de materias</h3>
                <ul>
                  <li>
                    Si la cancelación de materias se realiza después de la fecha
                    límite establecida para tal efecto, de conformidad con lo
                    dispuesto en el numeral 2 del artículo 39 del presente
                    Reglamento, se registrarán las notas que el alumno tenga en
                    el acumulado porcentual hasta ese momento. Lo que quiere
                    decir que obtendrá cero punto cero (0.0) en las notas
                    faltantes.
                  </li>
                  <li>
                    Si la cancelación se hace antes de la fecha límite para
                    cancelación de materias en los términos definidos para tal
                    efecto, no se registrarán notas, y el estudiante quedará
                    como si no hubiese cursado el semestre.
                  </li>
                </ul>
              </li>
            </ol>

            <LinkRouter to="cancelar-materia">
              Solicitar cancelación de materia
            </LinkRouter>
          </p>
        </main>
      </details>

      {processes.map((process, index) => {
        return (
          <details key={index}>
            <summary>
              {index + 1}. {process.title}
            </summary>
            <main>
              <p>{process.description}</p>
            </main>
          </details>
        );
      })}
    </Container>
  );
};

export default AcademicProcesses;

export const Container = styled.div`
  padding-top: 35px;
  padding-left: 80px;
  padding-right: 80px;
  /* border: 1px solid #000; */
  /* background: red; */
  height: 100%;
  height: 100vh;
  /* width: 90%; */

  details {
    margin-bottom: 15px;
    padding-bottom: 15px;
    /* height: 100%; */
    &[open] {
      summary {
        color: #ee6b4e;
      }
    }

    summary {
      font-weight: 600;
      background-color: #eee;
      color: #444;
      cursor: pointer;
      padding: 18px;
      /* width: 100%; */
      border: none;
      text-align: left;
      outline: none;
      font-size: 15px;
      transition: 0.4s;

      main {
        padding-top: 50px;
      }

      :hover {
        background-color: #ccc;
        color: #f5a800;
        color: #ee6b4e;
      }

      :after {
        content: "\\002B";
        color: #777;
        font-weight: bold;
        float: right;
        margin-left: 5px;
      }

      :before {
        /* content: "▶"; */
        transform: rotate(0);
        transform-origin: center;
        transition: 0.2s transform ease;
      }
    }

    p {
      padding: 0 18px;
      background-color: white;
      /* max-height: 0; */
      /* max-height: fit-content; */
      /* overflow: hidden; */
    }
  }

  /* details[open] > summary:first-of-type {
    list-style-type: disclosure-open;
  } */
  details[open] {
    summary {
      background-color: #ccc;
    }
  }
`;

export const LinkRouter = styled(Link)`
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  text-decoration: none;
  color: #000;

  border: none;
  height: 100%;
  margin: 0px;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  border: 1px solid #f5a800;
  border: 1px solid #ee6b4e;
  /* background: #f5f5f5; */
  /* background: #eeeeee; */
  background: none;
  color: #f5a800;
  color: #ee6b4e;

  :hover {
    background-color: #f5a800;
    background-color: #ee6b4e;
    color: #ee6b4e;
    color: #ffffff;
  }
`;

export const Title = styled.h1`
  font-size: 45px;
  text-align: center;
  font-family: "Poppins", sans-serif;
  color: #2c2c2c;

  color: #ee6b4e;
  font-size: 50px;
  margin-bottom: 35px;
  font-weight: 600;
  line-height: 50px;
`;

export const Subtitle = styled.h2`
  line-height: 30px;
  font-weight: 500;
  font-size: 25px;
  font-family: "Poppins", sans-serif;
  margin-bottom: 35px;
`;

const processes = [
  {
    title: "Formulario para solicitar cancelación de materias.",
    description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quibusdam tempore, eius voluptas blanditiis, aperiam doloremque voluptate, saepe delectus aliquam reiciendis hic? Dolor, reiciendis labore rerum non asperiores vitae fugiat?`,
  },
  {
    title: "Formulario para solicitar habilitación de materias.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quibusdam tempore, eius voluptas blanditiis, aperiam doloremque voluptate, saepe delectus aliquam reiciendis hic? Dolor, reiciendis labore rerum non asperiores vitae fugiat?",
  },
  {
    title:
      "Formulario para solicitar homologación de materias, suficiencia de materias y materias dirigidas.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quibusdam tempore, eius voluptas blanditiis, aperiam doloremque voluptate, saepe delectus aliquam reiciendis hic? Dolor, reiciendis labore rerum non asperiores vitae fugiat?",
  },
  {
    title: "Formulario para estudiante de reingreso.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quibusdam tempore, eius voluptas blanditiis, aperiam doloremque voluptate, saepe delectus aliquam reiciendis hic? Dolor, reiciendis labore rerum non asperiores vitae fugiat?",
  },
  {
    title: "Formulario para solicitar supletorio.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quibusdam tempore, eius voluptas blanditiis, aperiam doloremque voluptate, saepe delectus aliquam reiciendis hic? Dolor, reiciendis labore rerum non asperiores vitae fugiat?",
  },
  {
    title: "Formulario para solicitar cancelación de matrícula.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quibusdam tempore, eius voluptas blanditiis, aperiam doloremque voluptate, saepe delectus aliquam reiciendis hic? Dolor, reiciendis labore rerum non asperiores vitae fugiat?",
  },
  {
    title: "Formulario para solicitud de grado.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quibusdam tempore, eius voluptas blanditiis, aperiam doloremque voluptate, saepe delectus aliquam reiciendis hic? Dolor, reiciendis labore rerum non asperiores vitae fugiat?",
  },
  {
    title: "Formulario de consentimiento informado para estudiantes.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quibusdam tempore, eius voluptas blanditiis, aperiam doloremque voluptate, saepe delectus aliquam reiciendis hic? Dolor, reiciendis labore rerum non asperiores vitae fugiat?",
  },
  {
    title: "Formulario de solicitud para modificación en las calificaciones.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quibusdam tempore, eius voluptas blanditiis, aperiam doloremque voluptate, saepe delectus aliquam reiciendis hic? Dolor, reiciendis labore rerum non asperiores vitae fugiat?",
  },
  {
    title: "Autorización de matrícula por coordinador del programa.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quibusdam tempore, eius voluptas blanditiis, aperiam doloremque voluptate, saepe delectus aliquam reiciendis hic? Dolor, reiciendis labore rerum non asperiores vitae fugiat?",
  },
  {
    title: "Formulario para solicitar inscripción de materia intensiva.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quibusdam tempore, eius voluptas blanditiis, aperiam doloremque voluptate, saepe delectus aliquam reiciendis hic? Dolor, reiciendis labore rerum non asperiores vitae fugiat?",
  },
  {
    title: "Formulario para matricular materias con otro programa.",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quibusdam tempore, eius voluptas blanditiis, aperiam doloremque voluptate, saepe delectus aliquam reiciendis hic? Dolor, reiciendis labore rerum non asperiores vitae fugiat?",
  },
];
