import React from "react";
import './todoitem.css'


export function Todo(props) {
    return (<div className="list-item">
               {props.task}
               {props.index}
               {props.title}


    <button className="delete is-pulled-right" onClick = {() => {props.onDelete(props.index)}}> </button>
    </div>)

}

