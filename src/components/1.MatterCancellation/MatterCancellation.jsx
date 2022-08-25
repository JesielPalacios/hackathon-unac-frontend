import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { useMatterCancellation } from '../../core/hooks/useMatterCancellation'
import {
  Container,
  Subtitle,
  Title,
} from '../AcademicProcesses/AcademicProcesses'
import { Seo } from '../layout/Seo'
import { CreateMatterCancellationForm } from './createMatterCancellationForm'

export const MatterCancellation = () => {
  // --------------------------------------------------------------------------
  // const [subjectToCancel, setSubjectToCancel] = useState(null)
  // const [teacher, setTeacher] = useState(null)
  // const [lastDateOfClassAttendance, setLastDateOfClassAttendance] =
  //   useState(null)
  // const [studentSignature, setStudentSignature] = useState(null)
  // --------------------------------------------------------------------------
  const [subjectToCancel, setSubjectToCancel] = useState(
    'Matemáticas Financieras'
  )
  const [teacher, setTeacher] = useState('Luis Eduardo')
  const [lastDateOfClassAttendance, setLastDateOfClassAttendance] =
    useState('2022-08-09')
  const [studentSignature, setStudentSignature] = useState(null)
  // --------------------------------------------------------------------------

  const { createMatterCancellation, loading, error } = useMatterCancellation()

  const handleSubmit = (e) => {
    e.preventDefault()

    // console.log('--------------------------------------------------------------------------')
    // console.log('subjectToCancel')
    // console.log(subjectToCancel)
    // console.log('teacher')
    // console.log(teacher)
    // console.log('lastDateOfClassAttendance')
    // console.log(lastDateOfClassAttendance)
    // console.log('studentSignature')
    // console.log(studentSignature)
    // console.log('--------------------------------------------------------------------------')

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

      <CreateMatterCancellationForm
        handleSubmit={handleSubmit}
        setSubjectToCancel={setSubjectToCancel}
        setTeacher={setTeacher}
        setLastDateOfClassAttendance={setLastDateOfClassAttendance}
        setStudentSignature={setStudentSignature}
      />

      {/* {loading && <span className={styles.label_checkbox}>Cargando</span>}

      {error && (
        <span className={styles.label_checkbox} style={{ color: 'red' }}>
          Error, intente nuevamente
        </span>
      )} */}
    </Container>
  )
}
