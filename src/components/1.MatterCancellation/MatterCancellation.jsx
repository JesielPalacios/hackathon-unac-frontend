import React, { useState } from 'react'
import styled from 'styled-components'
import Swal from 'sweetalert2'
import { useMatterCancellation } from '../../core/hooks/useMatterCancellation'
import {
  Container,
  Subtitle,
  Title,
} from '../AcademicProcesses/AcademicProcesses'
import { Seo } from '../layout/Seo'
import { Button } from '../shared/SendButton/SendButton'

export const MatterCancellation = () => {
  const { createMatterCancellation, loading, error } = useMatterCancellation()
  const [subjectToCancel, setSubjectToCancel] = useState(null)
  const [teacher, setTeacher] = useState(null)
  const [lastDateOfClassAttendance, setLastDateOfClassAttendance] =
    useState(null)
  const [studentSignature, setStudentSignature] = useState(null)

  // const [subjectToCancel, setSubjectToCancel] = useState(
  //   'Matemáticas Financieras'
  // )
  // const [teacher, setTeacher] = useState('Luis Eduardo')
  // const [lastDateOfClassAttendance, setLastDateOfClassAttendance] =
  //   useState('2022-08-09')
  // const [studentSignature, setStudentSignature] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      subjectToCancel != null &&
      teacher != null &&
      lastDateOfClassAttendance != null &&
      studentSignature != null
    ) {
      if (
        studentSignature.name.endsWith('.png') ||
        studentSignature.name.endsWith('.jpg') ||
        studentSignature.name.endsWith('.jpeg')
      ) {
        createMatterCancellation({
          subjectToCancel,
          teacher,
          lastDateOfClassAttendance,
          studentSignature,
        })
      } else {
        Swal.fire({
          title: '<strong>Error de archivo</strong>',
          icon: 'error',
          html: 'No se puede aceptar este tipo de archivo, elija una imágen del tipo indicado!',
          showCloseButton: true,
          showCancelButton: false,
          focusConfirm: false,
          confirmButtonText: 'Aceptar',
          confirmButtonAriaLabel: 'Aceptar',
        })
      }
    } else {
      Swal.fire({
        title: '<strong>Faltan datos</strong>',
        icon: 'error',
        html: 'Verifique la infromación suministrada!',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Intentar de nuevo',
        confirmButtonAriaLabel: 'Intentar de nuevo',
        cancelButtonText: 'Cancelar',
        cancelButtonAriaLabel: 'Cancelar',
      })
    }
  }

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

      <details>
        <summary>
          Tenga en cuenta lo siguiente acerca de la cancelación de materias
        </summary>
        <main>
          {/* <p> */}
          <ul>
            <li>
              Si la cancelación de materias se realiza después de la fecha
              límite establecida para tal efecto, de conformidad con lo
              dispuesto en el numeral 2 del artículo 39 del presente Reglamento,
              se registrarán las notas que el alumno tenga en el acumulado
              porcentual hasta ese momento. Lo que quiere decir que obtendrá
              cero punto cero (0.0) en las notas faltantes.
            </li>
            <li>
              Si la cancelación se hace antes de la fecha límite para
              cancelación de materias en los términos definidos para tal efecto,
              no se registrarán notas, y el estudiante quedará como si no
              hubiese cursado el semestre.
            </li>
            <li>
              <b>Parágrafo 1: </b> En los programas a distancia o en materias
              cursadas de manera modular o intensiva, el plazo de cancelación de
              matrícula vence una vez cumplido el 75% del tiempo estipulado en
              el cronograma descrito en el plan de curso para la respectiva
              materia.
            </li>
          </ul>
          {/* </p> */}
        </main>
      </details>

      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="subjectToCancel">Asignatura a cancelar</label>
          <input
            type="text"
            id="subjectToCancel"
            placeholder="Escriba aquí el nombre de la asignatura"
            onChange={(e) => setSubjectToCancel(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="teacher">Profesor</label>
          <input
            type="text"
            id="teacher"
            placeholder="Escriba aquí el nombre del profesor"
            onChange={(e) => setTeacher(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastDateOfClassAttendance">
            Última fecha de asistencia a clases
          </label>
          <input
            type="date"
            id="lastDateOfClassAttendance"
            onChange={(e) => setLastDateOfClassAttendance(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="subjectToCancel">
            Firma del estudiante{' '}
            <small>Sólo archivos de imágen: png, jpg o jpeg</small>
          </label>
          <input
            type="file"
            id="subjectToCancel"
            accept="image/png, image/jpg, image/jpeg"
            onChange={(e) => setStudentSignature(e.target.files[0])}
            placeholder="Sólo imágenes png, jpg o jpeg"
          />
        </div>
        <Button
          type="submit"
          onClick={handleSubmit}
          value="Enviar formulario"
        />
      </Form>

      {/* {loading && <span className={styles.label_checkbox}>Cargando</span>}

      {error && (
        <span className={styles.label_checkbox} style={{ color: 'red' }}>
          Error, intente nuevamente
        </span>
      )} */}
    </Container>
  )
}

const Form = styled.form`
  width: 95%;
  /* display: flex; */
  display: grid;
  grid-template-columns: 50% 50%;
  /* margin: 0 auto; */
  margin-bottom: 50px;

  gap: 30px;

  label {
    margin-bottom: 10px;
    width: 100%;
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: 500;

    display: flex;
    gap: 5px;
    align-items: center;
  }

  input {
    border: none;
    font-family: 'Poppins', sans-serif;
    font-size: 10px;
    background-color: #f7f7f7;
    width: 100%;
    height: 40px;
    border-radius: 10px;
    padding-left: 15px;
    background-color: -internal-light-dark(
      rgb(232, 240, 254),
      rgba(70, 90, 126, 0.4)
    ) !important;
  }

  /* input[type="file" i] { */
  input[type='file'] {
    padding: 10px 1px 15px 15px;
    cursor: pointer;
    height: 15px;
  }

  input[type='submit'] {
    width: 50%;
  }

  small {
    font-size: 10px;
    color: #ee6b4e;
    font-weight: 600;
  }
`
