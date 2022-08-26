import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useMatterCancellation } from '../../../core/hooks/useMatterCancellation'
import { fetchAllMatterCancellations } from '../../../core/redux/actions/matterCancellationsActions '
import { Seo } from '../../layout/Seo'
import { ErrorAndWarning } from '../../shared/ErrorAndWarning/ErrorAndWarning'
import { Loading } from '../../shared/Loading/Loading'
import { Container, processes, Subtitle, Title } from '../AcademicProcesses'
import {
  CardFooter,
  CardHeader,
  CardMain,
  customStyles,
  ProcessCard,
  SelectForm,
  Wrapper,
} from './MyAcademicProcesses.styles'

const MyAcademicProcesses = (
  props,
  { matterCancellations, loading, error }
) => {
  const [academicProcessName, setAcademicProcessName] = useState(
    'Ninguna opción seleccionada'
  )
  let academicProcesses = matterCancellations

  // const putContent = () => {
  //   // if (academicProcesses.length > 0 && academicProcesses[0] != null) {
  //   //   // return <AcademicProcessesDetail academicProcesses={academicProcesses} />
  //   return (
  //     <ul>
  //       {props?.matterCancellations.map((matterCancellation) => {
  //         return <li>{matterCancellation.subjectToCancel}</li>
  //       })}
  //     </ul>
  //   )
  //   // }
  //   // if (
  //   //   academicProcesses.length === 0 &&
  //   //   academicProcesses[0] == null &&
  //   //   !error &&
  //   //   !loading
  //   // ) {
  //   //   return (
  //   //     <Error warning={true}>
  //   //       {/* En estos momentos no hay ninguna cancelación de materias en estado de
  //   //       espera o por revisión. */}
  //   //       En estos momentos no hay ningun proceso académico para el usuario, si
  //   //       desea una solicitud de proceso académico dirijase a la sección de
  //   //       procesos académicos y elija el que necesite:{' '}
  //   //       <Link to="procesos-academicos">
  //   //         Ir a sección de solicitud de procesos académicos
  //   //       </Link>
  //   //       .
  //   //     </Error>
  //   //   )
  //   // }
  // }
  useEffect(() => {
    console.log(props)
    console.log(props.matterCancellations)
    console.log(matterCancellations)
  }, [])

  function showReviewDate(createdAt, updatedAt) {
    if (createdAt != updatedAt) {
      return (
        <small>
          Última revisión: {updatedAt.slice(8, 10)}/{updatedAt.slice(5, 7)}/
          {updatedAt.slice(0, 4)}
        </small>
      )
    }
  }

  return (
    <>
      <Container>
        <Seo
          title="Mis procesos académicos"
          subtitle="Todos mis procesos académicos activos"
        />
        <Title>Mis procesos académicos</Title>
        <Subtitle>
          A continuación una lista de todos sus procesos académicos activos,
          donde podrá ver el estado actual, requisitos y/o información
          suministrada por el centro de admisiones de la corporación
          universitaria adventista UNAC. <b>enviar formulario</b>.
        </Subtitle>

        <label htmlFor="academicProcessesSelect">
          <h3>Seleccione la opción del tipo de proceso académico:</h3>
        </label>

        <div>
          <SelectForm
            id="academicProcessesSelect"
            options={processes}
            defaultValue={processes[0].title}
            isClearable={true}
            placeholder="Escriba aquí para buscar"
            styles={customStyles}
            noOptionsMessage={({ inputValue }) => (
              <b>No existe dicho proceso académico</b>
            )}
            onChange={({ value }) => setAcademicProcessName(value)}
          />
        </div>

        {loading && <Loading />}

        {error && (
          <ErrorAndWarning>
            Lastimosamente algo salió mal en la petición al servidor.
          </ErrorAndWarning>
        )}

        <Wrapper>
          {props.matterCancellations.map((m) => {
            return (
              <ProcessCard>
                <CardHeader>
                  <small>
                    <b>Fecha de solicitud:</b>
                    {m.createdAt.slice(8, 10)}/{m.createdAt.slice(5, 7)}/
                    {m.createdAt.slice(0, 4)}
                  </small>

                  {showReviewDate(m.createdAt, m.updatedAt)}
                </CardHeader>

                <CardMain>
                  <div>
                    <b>Materia a cancelar: </b>
                    {m.subjectToCancel.replace(/^\w/, (c) => c.toUpperCase())}
                  </div>
                  <div>
                    <b>Docente: </b>
                    {m.teacher.replace(/\w\S*/g, (w) =>
                      w.replace(/^\w/, (c) => c.toUpperCase())
                    )}
                  </div>
                  <div>
                    <b>Última fecha de asistencia a clases: </b>
                    {m.lastDateOfClassAttendance.slice(8, 10)}/
                    {m.lastDateOfClassAttendance.slice(5, 7)}/
                    {m.lastDateOfClassAttendance.slice(0, 4)}
                  </div>
                </CardMain>
                <CardFooter>
                  <span>
                    <b>Estado:</b> <span /> {m.status}
                  </span>
                  <Link>Ver más detalles</Link>
                </CardFooter>
              </ProcessCard>
            )
          })}

          <ProcessCard></ProcessCard>
          <ProcessCard></ProcessCard>
          <ProcessCard></ProcessCard>
          <ProcessCard></ProcessCard>
        </Wrapper>
      </Container>
    </>
  )
}

const mapStateToProps = (reducers) => {
  return reducers.matterCancellationsReducers
}
export default connect(
  mapStateToProps,
  fetchAllMatterCancellations
)(MyAcademicProcesses)
