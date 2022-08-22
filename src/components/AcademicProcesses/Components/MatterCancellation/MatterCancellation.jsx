import React, { useState } from "react";
import styled from "styled-components";
import { Seo } from "../../../layout/Seo";
import { Container, Subtitle, Title } from "../../AcademicProcesses";
import { Button } from "../SendButton/SendButton";

export const MatterCancellation = () => {

  const [subjectToCancel, setSubjectToCancel] = useState('')
  const [teacher, setTeacher] = useState("");
  const [lastDateOfClassAttendance, setLastDateOfClassAttendance] = useState('')

  return (
    <Container>
      <Seo
        title="Cancelación de materia"
        subtitle="Formulario de cancelación de materias"
      />

      <Title>Formulario de cancelación de materias</Title>

      <Subtitle>
        A continuación diligencie la información del formulario con información
        verídica y una vez completado con todos los datos solicitados de click
        en <b>enviar formulario</b>.
      </Subtitle>

      <p>
        <h3>
          Tenga en cuenta lo siguiente acerca de la cancelación de materias:{" "}
        </h3>
        <ul>
          <li>
            Si la cancelación de materias se realiza después de la fecha límite
            establecida para tal efecto, de conformidad con lo dispuesto en el
            numeral 2 del artículo 39 del presente Reglamento, se registrarán
            las notas que el alumno tenga en el acumulado porcentual hasta ese
            momento. Lo que quiere decir que obtendrá cero punto cero (0.0) en
            las notas faltantes.
          </li>
          <li>
            Si la cancelación se hace antes de la fecha límite para cancelación
            de materias en los términos definidos para tal efecto, no se
            registrarán notas, y el estudiante quedará como si no hubiese
            cursado el semestre.
          </li>
          <li>
            <b>Parágrafo 1</b> En los programas a distancia o en materias
            cursadas de manera modular o intensiva, el plazo de cancelación de
            matrícula vence una vez cumplido el 75% del tiempo estipulado en el
            cronograma descrito en el plan de curso para la respectiva materia.
          </li>
        </ul>
      </p>

      <Form>
        <div>
          <label htmlFor="subjectToCancel">Asignatura a cancelar</label>
          <input type="text" name="" id="subjectToCancel" />
        </div>
        <div>
          <label htmlFor="teacher">Profesor</label>
          <input type="text" name="" id="teacher" />
        </div>
        <div>
          <label htmlFor="lastDateOfClassAttendance">
            Última fecha de asistencia a clases
          </label>
          <input type="date" name="" id="lastDateOfClassAttendance" />
        </div>
        <div>
          <label htmlFor="subjectToCancel">Firma del estudiante</label>
          <input type="text" name="" id="subjectToCancel" />
        </div>
      </Form>
      <Button>Enviar formulario</Button>
    </Container>
  );
};

const Form = styled.form`
  /* display: flex; */
  display: grid;
  grid-template-columns: 50% 50%;
  /* margin: 0 auto; */
  margin-bottom: 50px;
  
  gap: 30px;

  label {
    margin-bottom: 10px;
    width: 100%;
    font-family: "Poppins", sans-serif;
    font-size: 15px;
    font-weight: 500;
  }

  input {
    border: none;
    font-family: "Poppins", sans-serif;
    font-size: 10px;
    background-color: #f7f7f7;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    padding-left: 10px;
  }
`;
