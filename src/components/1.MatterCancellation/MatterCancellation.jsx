import React, { useState } from 'react'
import styled from 'styled-components'
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
  // const [subjectToCancel, setSubjectToCancel] = useState('')
  // const [teacher, setTeacher] = useState('')
  // const [lastDateOfClassAttendance, setLastDateOfClassAttendance] = useState('')
  // const [studentSignature, setStudentSignature] = useState('')
  const [subjectToCancel, setSubjectToCancel] = useState('Matemáticas Financieras')
  const [teacher, setTeacher] = useState('Luis Eduardo')
  const [lastDateOfClassAttendance, setLastDateOfClassAttendance] = useState('2022-08-09')
  const [studentSignature, setStudentSignature] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    // if (error) {
    //   Swal.fire({
    //     title: '<strong>Faltan datos</strong>',
    //     icon: 'error',
    //     html: 'Hay un error en los datos!',
    //     showCloseButton: true,
    //     showCancelButton: true,
    //     focusConfirm: false,
    //     confirmButtonText: 'Intentar de nuevo',
    //     confirmButtonAriaLabel: 'Intentar de nuevo',
    //     cancelButtonText: 'Cancelar',
    //     cancelButtonAriaLabel: 'Cancelar',
    //   })
    // } else {
      createMatterCancellation({
        subjectToCancel,
        teacher,
        lastDateOfClassAttendance,
        studentSignature,
      })
    // }
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
              <b>Parágrafo 1</b> En los programas a distancia o en materias
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
            <small>Sólo archivos de imágen: png o jpg</small>
          </label>
          <input
            type="file"
            id="subjectToCancel"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              // e.target.files[0] = new FormData()
              StudentSignature(e.target.files[0])
            }}
            placeholder="Sólo imágenes png o jpg"
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
  }

  small {
    font-size: 10px;
    color: #ee6b4e;
    font-weight: 600;
  }
`
