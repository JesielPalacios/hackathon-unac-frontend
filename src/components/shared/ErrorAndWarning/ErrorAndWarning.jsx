import styled from 'styled-components'

export const ErrorAndWarning = styled.div`
  color: #${({ warning }) => {
      return warning === true ? 'FF6C00' : 'e20f'
    }};
  padding: 20px 0;
  border: 1px solid;
  border-color: #${({ warning }) => {
      return warning === true ? 'FF6C00' : 'e20f'
    }};
  text-align: center;
  margin: 20px;
`
