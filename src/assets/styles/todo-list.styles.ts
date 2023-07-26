import styled from "styled-components";
 
export const Background = styled.div`
margin: 0
display: flex;
background-color: #120722;
color: #fff;
min-width: 320px;
min-height: 100vh;
overflow-x: hidden;
`

export const ContainerTodo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

export const ContainerTaskAdd = styled.div`
  width: 800px;
  height: 120px;
  background-color: transparent;
  border: 2px solid #200648;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  align-items: center;
  box-shadow: -4px -4px 6px #160122, 4px 4px 10px #0c0015;
  margin-bottom: 30px;
`

export const Label = styled.label`
    display: block;
`

export const Input = styled.input`
  height: 30px;
  width: 400px;
  border-radius: 10px;
  flex: 1;
  outline: none;
  padding: 0.8rem 0.6rem;
  border: 2px solid #200648;
  background: none;
  color: white;
  font-size: 16px;
  letter-spacing: 0.3ch;
  box-shadow: -4px -4px 6px #160122, 4px 4px 10px #0c0015;
`

export const AddDiv = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContainerTodoItem = styled.div`
  width: 800px;
  height: 50px;
  background-color: transparent;
  border: 2px solid #200648;
  box-shadow: -4px -4px 6px #160122, 4px 4px 10px #0c0015;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px;
`

export const ContainerButtons = styled.div`
    width: 200px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
`

export const TitleStyle = styled.h1`
  margin-bottom: 10px;
  font-family: 'sans-serif';
  font-weight: 600;
  font-size: 20px;
  color: white;
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  export input {
    width: 18px;
    height: 18px;
    margin-right: 8px;
  }

  export p {
    margin: 0px;
  }
`

export const ContainerEditBlock = styled.div`
width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`
export const InputEdit = styled.input`
height: 15px;
flex: 1;
outline: none;
padding: 0.8rem 0.6rem;
border: 1px solid #200648;
background: none;
color: white;
border-radius: 10px;
font-size: 16px;
letter-spacing: 0.3ch;
box-shadow: -4px -4px 6px #160122, 4px 4px 10px #0c0015;
margin-bottom: 5px;
`

export const ButtonEdit = styled.button`
font-size: large;
margin-left: 10px;
padding: 7px;
outline: none;
border: none;
border: 1px solid #200648;
background: none;
color: #b486f8;
border-radius: 10px;
transition: 0.4s;
box-shadow: -4px -4px 7px #160122, 4px 4px 7px #0c0015;
cursor: pointer;
  &:hover {
    background-color: #b486f8;
    color: #200648;
    border: none;
  }
`
export const ButtonStyle = styled.button`
      width: 90px;
      height: 30px;
      background: none;
      box-shadow: -4px -4px 7px #160122, 4px 4px 7px #0c0015;
      color: #b486f8;
      border: 2px solid #200648;
      border-radius: 10px;
      cursor: pointer;
      font-size: large;
      padding: 3px;
      &:hover {
        background-color: #b486f8;
        color: #200648;
        border: none;
      }
`
export const ButtonCategory = styled.button`
      width: 115px;
      height: 50px;
      background: none;
      box-shadow: -4px -4px 7px #160122, 4px 4px 7px #0c0015;
      color: #b486f8;
      border: 2px solid #200648;
      border-radius: 10px;
      cursor: pointer;
      font-size: large;
      margin-right: 15px;
      &:hover {
        background-color: #b486f8;
        color: #200648;
        border: none;
      }
`