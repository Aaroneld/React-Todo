import React from 'react';
import styled from 'styled-components';

const SearchCard = styled.div`

    margin: 2% 5%;
    border: 2px solid black;
    display: flex;
    justify-content: center;

    form {

        padding: 3%;
        display: flex;
        flex-flow: column; 
        
        
        input {

            font-size: 150%;
        }

        button {

            margin: 3% 0 0 25%;
            padding: 3.5% 3%;
            max-width: 50%;
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
`;

const TodoSearch = props => {


    return (
        <SearchCard>
            <form onSubmit={props.search}>
                <input placeholder="...Search Todos"/>
                <button type="submit">Search</button>
            </form>
        </SearchCard>
    );
}

export default TodoSearch;