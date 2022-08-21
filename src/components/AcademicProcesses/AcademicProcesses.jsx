import { useState } from "react";
import styled from "styled-components";
import { Seo } from "../layout/Seo";

const AcademicProcesses = () => {
  const [accordeon, setAccordeon] = useState(false);

  const toggle = () => {
    setAccordeon(!accordeon);
  };

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

      <ol>
        <li>
          <h3>Formulario para solicitar cancelación de materias.</h3>
        </li>
        <li>
          <h3>Formulario para solicitar habilitación.</h3>
        </li>
        <li>
          <h3>
            Formulario para solicitar homologación, suficiencia y materia
            dirigida.
          </h3>
        </li>
        <li>
          <h3>Formulario para estudiante de reingreso.</h3>
        </li>
        <li>
          <h3>Formulario para solicitar supletorio.</h3>
        </li>
        <li>
          <h3>Formulario para solicitar cancelación de matrícula.</h3>
        </li>
        <li>
          <h3>Formulario para solicitud de grado.</h3>
        </li>
        <li>
          <h3>Formulario de consentimiento informado para estudiantes.</h3>
        </li>
        <li>
          <h3>Formulario de Autorización Coordinador.</h3>
        </li>
        <li>
          <h3>Formulario de Inscripción Materia Intensiva.</h3>
        </li>
        <li>
          <h3>Formulario de Inscripción Materia Intensiva.</h3>
        </li>
        <li>
          <h3>Formulario de Materias con otro programa.</h3>
        </li>
      </ol>

      <AcademicProccess accordeon={accordeon} onClick={toggle}>
        Formulario para solicitar cancelación de materias
      </AcademicProccess>
      <AcademicProccessInfo>
        <p>
          Artículo 42. TÉRMINO PARA CANCELAR LA MATRÍCULA O MATERIAS Y SUS
          CONSECUENCIAS. 1. Cancelación de matrícula a. Si la cancelación de
          matrícula se hace durante los primeros cinco (5) días de clase, se
          reembolsará al estudiante el 50% del dinero que haya pagado, o el
          total del pago se le dejará en consignación para una próxima
          matrícula, de conformidad con lo dispuesto en el parágrafo único del
          artículo 41 del presente reglamento. b. Si la cancelación se hace
          después de los primeros cinco (5) días de clase no se aplicará lo
          dispuesto en el numeral anterior. 2. Cancelación de materias a. Si la
          cancelación de materias se realiza después de la fecha límite
          establecida para tal efecto, de conformidad con lo dispuesto en el
          numeral 2 del artículo 39 del presente Reglamento, se registrarán las
          notas que el alumno tenga en el acumulado porcentual hasta ese
          momento. Lo que quiere decir que obtendrá cero punto cero (0.0) en las
          notas faltantes. b. Si la cancelación se hace antes de la fecha límite
          para cancelación de materias en los términos definidos para tal
          efecto, no se registrarán notas, y el estudiante quedará como si no
          hubiese cursado el semestre.
        </p>
      </AcademicProccessInfo>

      {/* <Wrapper></Wrapper> */}
    </Container>
  );
};

export default AcademicProcesses;

const Container = styled.div`
  padding-top: 35px;
  padding-left: 60px;
  padding-right: 60px;
  /* border: 1px solid #000; */
  /* background: red; */
  height: 100%;
`;

const Title = styled.h1`
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

const Subtitle = styled.h2`
  font-weight: 500;
  font-size: 25px;
  font-family: "Poppins", sans-serif;
`;

const AcademicProccess = styled.button`
  background-color: ${({ accordeon }) => (accordeon ? "#eee" : "#ccc")};
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;

  :hover {
    background-color: #ccc;
  }

  ${({ accordeon }) =>
    accordeon
      ? `:after {
        content: "\\2212";
      }
      `
      : `:after {
          content: '\\002B';
          color: #777;
          font-weight: bold;
          float: right;
          margin-left: 5px;
        }`}

`;

const AcademicProccessInfo = styled.div`
  padding: 0 18px;
  background-color: white;

  /* max-height: 0; */

  ${({ accordeon }) => (accordeon ? "max-height: 0;" : "")}
  overflow: hidden;
  transition: max-height 0.2s ease-out;
`;
