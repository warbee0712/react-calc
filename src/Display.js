import React from 'react'
import styled from 'styled-components'

const DisplayWrapper = styled.div`
  background-color: #EFEFEF;
  color: #2B2A2A;
  padding: 1.5rem;
  width: 450px;
  height: 150px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  text-align: right;
  @media only screen and (max-width: 768px) {
    width: calc(100vw - 80px);
  }
`

const Equation = styled.p`
  color: #999999;
  line-height: 40px;
  height: 40px;
  margin: 0;
  letter-spacing: 3px;
`

const Result = styled.p`
  color: #2B2A2A;
  line-height: 80px;
  font-size: 5rem;
  margin: 0;
  @media only screen and (max-width: 768px) {
    line-height: 80px;
    font-size: 3rem;
  }
`

const Display = ({ equation, result }) => {
  return (
    <DisplayWrapper>
      <Equation>{ equation }</Equation>
      <Result>{ result }</Result>
    </DisplayWrapper>
  )
}

export default Display
