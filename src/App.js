import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoSearch from "./components/TodoSearch";

const GlobalStyle = createGlobalStyle`

    h2 {

      text-align: center;
    }
`;

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  
  constructor(){
    super();
    this.state = {
      todoList: [],
      searchList: [],
      searchValue: NaN
    };

  }

handleSubmit = e => {
  
  e.preventDefault();
  if (e.target[0].value !== "") {
    this.setState({todoList: [...this.state.todoList, {
      task: e.target[0].value,
      id: Date.now(),
      completed: false
    }]});
  }
};

handleClear = _ => {
  console.log(this.state.todoList);
  const clearList = this.state.todoList.filter(todos =>{
    return todos.completed === false});

  
  console.log(clearList);
  this.setState({todoList: clearList});

  let filterArr = clearList;
  for (let i = 0; i < this.state.searchValue ; i++) {
    filterArr = filterArr.filter(todo => {
        return todo.task.charAt(i).toLowerCase().includes(this.state.searchValue.charAt(i).toLowerCase());
      }); 
  }

  this.setState({searchList: filterArr});
}

toggleCompleted = e => {
  const ID  = parseInt(e.target.getAttribute('listid'));
  console.log(this.state.todoList[0].id);
  console.log(e.target);

  this.setState(prevState => ({
    todoList: prevState.todoList.map( todo =>
      todo.id === ID ? {...todo, completed: !todo.completed} : todo
    )}));

  this.setState(prevState => ({
    searchList: prevState.searchList.map( todo =>
      todo.id === ID ? {...todo, completed: !todo.completed} : todo
      )}));
  

  console.log(this.state.todoList);
}

handleSearch = e => {
  
  e.preventDefault();
  console.log(e.target[0].value);
  let filterArr = this.state.todoList;
  console.log(filterArr);
  for (let i = 0; i < e.target[0].value.length; i++) {
           
    filterArr = filterArr.filter(todo => {
        return todo.task.charAt(i).toLowerCase().includes(e.target[0].value.charAt(i).toLowerCase());
    }); 
  }

  console.log(filterArr);
  this.setState({searchList: filterArr,
                searchValue: e.target[0].value});
  console.log(this.state.searchList);
}

  
  render() {

    return (
      
      <div>
        <GlobalStyle />
        <h2>Welcome to your Todo App!</h2>
        <TodoList toggle={this.toggleCompleted} list={this.state.todoList} />
        <TodoInput clear={this.handleClear} handle={this.handleSubmit}/>
        <TodoSearch search={this.handleSearch} />
        <TodoList toggle={this.toggleCompleted} list={this.state.searchList} />
      </div>
    );
  }
}

export default App;
