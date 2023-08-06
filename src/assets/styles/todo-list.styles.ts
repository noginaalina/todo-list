import styled from "styled-components";
 
export const Background = styled.div`
margin: 0;
display: flex;
justify-content: center;
background-color: #120722;
color: #fff;
min-width: 320px;
min-height: 100vh;
overflow-x: hidden;
`;

export const TodoListContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

export const TodoContainer = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`
export const Input = styled.input`
    height: 30px;
  width: 400px;
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
`
export const ButtonAdd = styled.button`
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
    width: 90px;
`;

export const ButtonFilter = styled.button`
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
`;

export const Task = styled.div`
width: 1000px;
flex: 1;
    outline: none;
    padding: 0.8rem 0.6rem;
    border: 1px solid #200648;
    background: none;
    border-radius: 10px;
    font-size: 16px;
    letter-spacing: 0.3ch;
    box-shadow: -4px -4px 6px #160122, 4px 4px 10px #0c0015;
    display: flex;
  justify-content: space-between;
    
`;
export const EditInput = styled.input`
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
`;

export const ContainerTaskAdd = styled.div`
  width: 800px;
  height: 120px;
  background-color: none;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  align-items: center;
  border: 1px solid #200648;
  box-shadow: -4px -4px 6px #160122, 4px 4px 10px #0c0015;
  `;

export const Label = styled.label`
display: block;
`;

export const AddDiv = styled.div`
  width: 550px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContainerTodo = styled.div`
  width: 800px;

  grid-template-columns: 1fr 1fr;
  background-color: transparent;
  border: 1px solid #200648;
  box-shadow: -4px -4px 6px #160122, 4px 4px 10px #0c0015;
  display: grid;
  grid-gap: 330px; 
  align-items: center;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 20px;
`
// export const ContainerTodo = styled.div`
//   display: grid;
//   grid-template-columns: min-content auto auto; /* Adjust the columns as needed */
//   align-items: center;
//   width: 100%;
//   background-color: transparent;
//   border: 1px solid #200648;
//   box-shadow: -4px -4px 6px #160122, 4px 4px 10px #0c0015;
//   border-radius: 10px;
//   margin-bottom: 10px;
//   padding: 20px;
// `;

export const ContainerEditBlock = styled.div`
width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const ContainerBtn = styled.div`
    width: 200px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 5px;
`

export const TruncatedTask = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 220%;
`;


export const ExpandedTask = styled.div`
  white-space: normal;
  word-wrap: break-word;
  display: block;
  /* Add the container with a fixed height and overflow */
  max-height: 150px; /* Set the desired height based on your design */
  overflow: hidden; /* or overflow: hidden if you prefer hiding the overflow */
  width: 220%;
`;

export const ButtonSaveEdit = styled.button`
    font-size: large;
    margin-left: 150px;
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
    width: 90px;
`;
