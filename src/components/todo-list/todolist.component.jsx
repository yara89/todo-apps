import {Todo} from '../todo/todo.component'
import './todolist.css'

export function TodoList(props) {
   
  //  const todos = props.tasks.map( (task,  index) => console.log(task +index));
    return (
        <div className="list-wrapper">
    {
  props.tasks.map((task, index) => <Todo key={index} index={index} task={task} title={task.title} onDelete={props.onDeleteTask}></Todo>
  )}
    
        </div>
        );
}