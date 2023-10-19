'use client'

import styled from '@emotion/styled'

const Main = styled.main`
  margin: 0px auto;
  height: 100%;
  width: 800px;
  padding: 16px;
  background: #ffd166;
`

const H1 = styled.h1`
  text-align: center;
  color: #ef476f;
  padding: 40px 0px;
`
const H2 = styled.div`
  font-size: 16px;
  text-align: center;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  padding-top: 16px;
  button {
    margin-left: 8px;
  }
`

const Input = styled.input`
  width: 300px;
  border-radius: 8px;
  border: 0 none;
  outline: 1px solid #ef476f;
  padding: 0px 16px;
  height: 38px;
  &:focus {
    background-color: #eeeeee;
  }
`

const Button = styled.button<{ secondary?: boolean }>`
  background-color: ${(props) => (props.secondary ? '#9c9093' : '#ef476f')};
  color: #ffffff;
  border-radius: 8px;
  border-style: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 8px 16px;
`

const Table = styled.table`
  margin: 0px auto;
  margin-top: 40px;
  color: #073b4c;
  /* border: 1px solid #bbbbbb; */
  border-radius: 8px;
  td {
    border: none;
    padding: 5px 10px;
  }
  tbody tr {
    :nth-of-type(odd) {
      background-color: #efefef;
    }
    :nth-of-type(even) {
      background-color: #dcdcdc;
    }
    :hover {
      background-color: #fff;
    }
  }
  svg {
    cursor: pointer;
  }
`

const Message = styled.div<{ error?: boolean }>`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  color: ${(props) => (props.error ? '#ef476f' : '#073b4c')};
`

const Modal = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
  border-radius: 8px;
`

const ModalClose = styled.span`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  &:hover,
  focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`

const Center = styled.div`
  display: flex;
  justify-content: center;
`

const Loading = styled(Center)`
  padding-top: 100px;
`

const ButtonsWrapper = styled(Center)`
  flex-direction: row;
  margin-top: 20px;
  gap: 16px;
`

export {
  Main,
  H1,
  H2,
  Form,
  Input,
  Button,
  Table,
  Message,
  Modal,
  ModalContent,
  ModalClose,
  Center,
  Loading,
  ButtonsWrapper
}
