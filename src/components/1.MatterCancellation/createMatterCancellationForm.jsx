import styled from 'styled-components'
import { Button } from '../shared/SendButton/SendButton'

export function CreateMatterCancellationForm({
  handleSubmit,
  setSubjectToCancel,
  setTeacher,
  setLastDateOfClassAttendance,
  setStudentSignature,
}) {
  return (
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
      <Button type="submit" onClick={handleSubmit} value="Enviar formulario" />
    </Form>
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
