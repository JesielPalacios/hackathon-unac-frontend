import styled from 'styled-components'
import Select  from 'react-select'

export const SelectForm = styled(Select)`
  /* border: none;
    border: unset;
  width: 100%;

  font-family: 'Nunito';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  Text

  color: #030229;

  opacity: 0.7;

  background: #e5e9ec;

  padding: 10px;
  margin-top: 5px;
  border-radius: 10px; */

  /* height: 5px; */
  .Select__control {
    /* --------------------------------------------------- */
    /* height: 40px; */
    /* width: 100%; */
    border: 1px solid #a1a1a1;
    border-radius: 0;
    cursor: pointer;

    /* display: inline; */
  }

  .Select__control:hover {
    border-color: #a1a1a1;
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px black;
    outline: none;
  }

  .Select__indicator-separator {
    display: none;
  }

  .Select__menu {
    color: #3c3d3e;
  }
`

  export const customStyles = {
    control: () => ({
      // none of react-select's styles are passed to <Control />
      // width: 200
      border: 'none',
      // border: 'unset',
      // width: '100%',
      height: '45px',
      cursor: 'pointer',

      // fontFamily: 'Nunito',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '15px',
      lineHeight: '19px',

      color: '#030229',

      // opacity: '0.7',

      background: '#e5e9ec',

      padding: '5px',
      marginTop: '5px',
      borderRadius: '10px',
      display: 'flex',

      // ':hover': {
      //   cursor: 'pointer'
      // }

      // height: '500px'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1
      const transition = 'opacity 300ms'

      return { ...provided, opacity, transition }
    },
  }