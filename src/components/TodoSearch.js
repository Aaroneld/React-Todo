import React from 'react';
import styled from 'styled-components';

const SearchCard = styled.div`

    margin: 2% 5%;
    border: 2px solid black;
    display: flex;
    justify-content: center;

    form {

        padding: 3%;
        
        input {

            font-size: 150%;
        }
    }
`;

const TodoSearch = props => {


    return (
        <SearchCard>
            <form onSubmit={props.search}>
                <input placeholder="search Todos"/>
                <button type="submit">Search</button>
            </form>
        </SearchCard>
    );
}

export default TodoSearch;