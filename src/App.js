import React from 'react'
import './App.css';
import { AppWrapper } from './components/app-wrapper/app-wrapper.component';
import { Header } from './components/header/header.component';
import { TodoList } from './components/todo-list/todolist.component'
import { SubmitForm } from './components/submit-form/submit-form.component';
;

class App extends React.Component {

 state = {
   tasks : []
  };

   handleDelete = (index) => {
    const newArr = [...this.state.tasks];
    newArr.splice(index,1) ;
    this.setState({tasks: newArr})
   }

   handlesubmit = (content, title) => {
     this.setState({tasks: [...this.state.tasks, content]})
   }

/*    handleUpdate = (index, title, content) => {
    const newArr = [...this.state.tasks];
    const task = newArr[index];
    task.title = title;
    task.content = content
    ;this.setState({ tasks: newArr });
   }
 */
  render () {
    return (
      <div className="App">
  
             <AppWrapper>
                <Header numberTodos={this.state.tasks.length}></Header>
                <SubmitForm onCreate={this.handlesubmit}> </SubmitForm>
                <TodoList tasks={this.state.tasks} onDeleteTask={this.handleDelete}  /* onUpdate={this.handleUpdate} */ ></TodoList>
            </AppWrapper>
     

      </div>
    );
  }
  
}

export default App;
