import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ls from 'local-storage';
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

componentDidMount () {

  if(ls.get('todoList') !== null)
  this.setState({todoList: ls.get('todoList')});
}

handleSubmit = e => {
  
  e.preventDefault();
  let forLocalStorage = this.state.todoList;
  
  if (e.target[0].value !== "") {
    this.setState({todoList: [...this.state.todoList, {
      task: e.target[0].value,
      id: Date.now(),
      completed: false
    }]});
    ls.set('todoList', [...forLocalStorage, {
      task: e.target[0].value,
      id: Date.now(),
      completed: false}]);
  }
  
};

handleClear = _ => {
  console.log(this.state.todoList);
  const clearList = this.state.todoList.filter(todos =>{
    return todos.completed === false});
  
  let filterArr = [];
  for (let i = 0; i < this.state.searchValue ; i++) {
      filterArr = clearList.filter(todo => {
          return todo.task.charAt(i).toLowerCase().includes(this.state.searchValue.charAt(i).toLowerCase());
      }); 
    }
  
  console.log(filterArr);
  this.setState({todoList: clearList,
                searchList: filterArr});

  ls.set('todoList', clearList);

  
}

toggleCompleted = e => {
  const ID  = parseInt(e.target.getAttribute('listid'));
  console.log(this.state.todoList[0].id);
  console.log(e.target);

  this.setState(prevState => ({
    todoList: prevState.todoList.map( todo =>
      todo.id === ID ? {...todo, completed: !todo.completed} : todo
    ), searchList: prevState.searchList.map( todo =>
      todo.id === ID ? {...todo, completed: !todo.completed} : todo
  )}));

  let forLocalStore = this.state.todoList.map(todo => {
  return todo.id === ID ? {...todo, completed: !todo.completed} : todo
  });

  ls.set('todoList', forLocalStore);

  console.log(this.state.todoList);
}

handleSearch = e => {
  
  e.preventDefault();
  if(e.target[0].value !== ""){
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
