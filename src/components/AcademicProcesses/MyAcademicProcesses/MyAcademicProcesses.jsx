import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useMatterCancellation } from '../../../core/hooks/useMatterCancellation'
import { fetchAllMatterCancellations } from '../../../core/redux/actions/matterCancellationsActions '
import { Seo } from '../../layout/Seo'
import { ErrorAndWarning } from '../../shared/ErrorAndWarning/ErrorAndWarning'
import { Loading } from '../../shared/Loading/Loading'
import { Container, processes, Subtitle, Title } from '../AcademicProcesses'
import { customStyles, SelectForm } from './MyAcademicProcesses.styles'
// import AcademicProcessesDetail from '../AcademicProcessesDetail/AcademicProcessesDetail'

// const MyAcademicProcesses = (props, { academicProcesses, loading, error }) => {
const MyAcademicProcesses = (
  props,
  { matterCancellations, loading, error }
) => {
  const [academicProcessName, setAcademicProcessName] = useState(
    'Ninguna opción seleccionada'
  )
  let academicProcesses = matterCancellations

  const putContent = () => {
    // if (academicProcesses.length > 0 && academicProcesses[0] != null) {
    //   // return <AcademicProcessesDetail academicProcesses={academicProcesses} />
    return (
      <ul>
        {props?.matterCancellations.map((matterCancellation) => {
          return <li>{matterCancellation.subjectToCancel}</li>
        })}
      </ul>
    )
    // }
    // if (
    //   academicProcesses.length === 0 &&
    //   academicProcesses[0] == null &&
    //   !error &&
    //   !loading
    // ) {
    //   return (
    //     <Error warning={true}>
    //       {/* En estos momentos no hay ninguna cancelación de materias en estado de
    //       espera o por revisión. */}
    //       En estos momentos no hay ningun proceso académico para el usuario, si
    //       desea una solicitud de proceso académico dirijase a la sección de
    //       procesos académicos y elija el que necesite:{' '}
    //       <Link to="procesos-academicos">
    //         Ir a sección de solicitud de procesos académicos
    //       </Link>
    //       .
    //     </Error>
    //   )
    // }
  }
  // -------------------------------------
  // const { getMatterCancellation } = useMatterCancellation()
  // useEffect(() => {
  //   getMatterCancellation()
  // }, [])
  // -------------------------------------
  // useEffect(() => {
  //   fetchAllMatterCancellations()
  // }, [])
  // -------------------------------------

  return (
    <>
      {loading && <Loading />}

      {error && (
        <ErrorAndWarning>
          Lastimosamente algo salió mal en la petición al servidor.
        </ErrorAndWarning>
      )}

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

        <SelectForm
          id="academicProcessesSelect"
          options={processes}
          defaultValue={processes[0].title}
          onChange={({ value }) => setAcademicProcessName(value)}
          // isClearable={true}
          placeholder="Escriba para buscar"
          styles={customStyles}
          noOptionsMessage={({inputValue}) => <b>No existe dicho proceso académico</b>}
        />

        <h4>{academicProcessName}</h4>
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
