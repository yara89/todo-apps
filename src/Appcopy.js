import React, {useState} from 'react'
import './App.css';
import { AppWrapper } from './components/app-wrapper/app-wrapper.component';
import { Header } from './components/header/header.component';
import { TodoList } from './components/todo-list/todolist.component'
import { SubmitForm } from './components/submit-form/submit-form.component';


function App() {

const [tasks,setTask] = useState(['task1', 'task2', 'task3', 'task4']);

/*  state = {
   tasks: ['task1', 'task2', 'task3', 'task4']
  } */

   function handleDelete (index) {
    const newArr = [...tasks];
    newArr.splice(index,1) ;
    setTask(newArr);
   }

   function handlesubmit(content) {
     setTask([...tasks, content]);
   }

/*    handleUpdate = (index, title, content) => {
    const newArr = [...this.state.tasks];
    const task = newArr[index];
    task.title = title;
    task.content = content
    ;this.setState({ tasks: newArr });
   }
 */
    return (
      <div className="App">
  
             <AppWrapper>
                <Header numberTodos={Tasks.length}></Header>
                <SubmitForm onCreate={handlesubmit}> </SubmitForm>
                <TodoList tasks={tasks} onDeleteTask={handleDelete}  /* onUpdate={this.handleUpdate} */ ></TodoList>
            </AppWrapper>
     

      </div>
    );
  }
  
}

export default App;
