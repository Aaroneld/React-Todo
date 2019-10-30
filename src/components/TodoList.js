import React from 'react';
import styled from 'styled-components';


const TodoList = props => {

    const ListCard = styled.div`

    display: ${ _ => {
        if (props.list.length === 0)
        return "none";
        else
        return "flex";
    }};
    margin: 2% 5%;
    

    ul {

        width: 100%;
        display: flex;
        flex-flow: column;
        list-style-type: none;
        align-items: stretch;
        padding: 0;
        margin: 0;
        

        li {

            align-self: stretch;
            padding: 1.5% 2%;
            border: 1px solid darkgrey;
            
        }
    }
`;


    return (

        <ListCard>
            <ul>
                {props.list.map(todo => {
                    return <li listid={todo.id} 
                    key={todo.id} 
                    onClick={props.toggle}
                    style={{
                    backgroundColor: todo.completed ?  'green' : 'lightgrey',
                    }}
                    >{todo.task}</li>
                })}
            </ul>
        </ListCard>
    );
}

export default TodoList;