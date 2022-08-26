import styled from 'styled-components'
import Select from 'react-select'

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

  width: 60%;
  margin-bottom: 35px;
`

export const Wrapper = styled.div`
  width: 100%- 30px;
  /* height: 100%; */
  background-color: green;
  background: #e5e9ec;
  border: 5px solid ·000;
  /* margin-top: 35px; */
  border-radius: 10px;
  padding: 30px;
  position: relative;
  overflow: hidden;

  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 15px;
  grid-row-gap: 30px;

  /* :first-child {
    background-color: #223622;
    background: '#e5e9ec';
  } */
  /* padding: 5px; */
`

export const ProcessCard = styled.div`
  overflow: hidden;
  padding: 5px;
  background: #fff;
  /* background-color: #223622; */
  width: 95%;
  border-radius: 10px;
  height: 200px;

  display: grid;
  grid-template-rows: 15% 65% 20%;

  div {
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    /* padding: 0px 5px 0px 5px; */
    padding: 7px;
  }

  font-family: 'Poppins', sans-serif;
  b {
    padding-right: 5px;
  }
`

export const CardHeader = styled.div`
  align-items: flex-start;
  font-weight: 800;
  color: #000000a2;

  small {
    flex: 1;
    font-size: 12.5px;
  }
`

export const CardMain = styled.div`
  b {
    padding-right: 5px;
  }

  flex-direction: column;
  /* gap: 5px; */

  div:first-of-type {
    border-top: 1px solid #00000021;
  }

  div:last-of-type {
    border-bottom: 1px solid #00000021;
  }
`

export const CardFooter = styled.div`
  margin-bottom: 7px;
  align-items: center;
  font-size: 20px;

  justify-content: space-around;

  span,
  a {
    /* flex: 1; */
    text-align: center;
  }

  a {
    text-decoration: none;
    color: #000;

    border-radius: 0.5rem;
    padding: 0.4rem 1.5rem;
    border: 1px solid #000000a2;
    border: 1px solid #00000021;
    background-color: #00000016;

    :hover {
      border: 1px solid #ee6b4e;
      background-color: #f5a800;
      background-color: #ee6b4e;
      color: #ee6b4e;
      color: #ffffff;
    }
  }
`

export const customStyles = {
  control: () => ({
    // width: '60%',
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
    // margin: '0 auto;'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1
    const transition = 'opacity 300ms'

    return { ...provided, opacity, transition }
  },
}
