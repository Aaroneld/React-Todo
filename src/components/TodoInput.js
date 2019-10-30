import React from "react";
import styled from "styled-components";

const InputCard = styled.div`

    border: 2px solid black;
    padding: 3%;
    display: flex; 
    flex-flow: column;
    margin: 2% 5%;
    
    
    button {

        margin: 1.5% 0;
        padding: 1.5% 3%;
        align-self: center;
        color: white;
        background: black;
        border: none;

        &:hover {

            color: black;
            background: white;
        }

        &:focus {

            outline: none;
        }
     }

    form {

        display: flex;
        flex-flow: column;
        align-items: center;

        input {
            
            padding: 1%; 
            font-size: 150%;
            margin-bottom: 1.5%;
        }

    }
`;

const TodoInput = props => {

 

    return(
      <InputCard>
        <form onSubmit={props.handle}>
            <input
            placeholder="...Set Todos"
            />
            <button>Update</button>
            
        </form>
        <button onClick={props.clear}>Clear Completed</button>
       
      </InputCard>
    );
  };

  export default TodoInput;