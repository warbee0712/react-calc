import React from 'react'
import styled from 'styled-components'

const NumPadWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  background-color: #2B2A2A;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  z-index: 1;
  position: relative;
  top: -20px;
`

const Button = styled.span`
  width: ${props => props.double ? '150px' : '75px'};
  line-height: 60px;
  color: ${props => props.isNumber ? 'white' : '#999999'};
  text-align: center;
  transition: all .2s;
  &:hover {
    cursor: pointer;
    background-color: #4B4A4A;
  }
`

const NumPad = ({ handleInput, solveEquation }) => {
  const standard = [{ text: 'C' }, { text: 'del' }, { text: '%' }, { text: '/' }, { text: '7' }, { text: '8' }, { text: '9' }, { text: '*' }, { text: '4' }, { text: '5' }, { text: '6' }, { text: '-' }, { text: '1' }, { text: '2' }, { text: '3' }, { text: '+' }, { text: '0' }, { text: '.' }, { text: '=', double: true }]
  return (
    <NumPadWrapper>
      {standard.map((button, i) => <Button key={i} double={button.double} isNumber={!isNaN(button.text)} onClick={() => handleInput(button.text)}>{button.text}</Button>)}
    </NumPadWrapper>
  )
}

export default NumPad
