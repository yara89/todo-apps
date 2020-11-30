import React from 'react'
import './submit-form.css'


export class SubmitForm  extends React.Component {

state ={content:''};

handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state.content);
    this.setState({ content: '' });

}

render() {    
    return(
 <form onSubmit={this.handleSubmit}>
    <div className="content-wrapper">
     <div className="field">
         <label className="label">Task</label>
            <div className="control">
            <input type="text"
                className="title" 
                placeholder="title"
                value={this.state.title}
                onChange={(e) => this.setState({title: e.target.value})}
                    />
            </div>
            </div>

            <div className="field">
            <label className="label">Description</label>
            <div className="control">

                <textarea type="text"
                className="textarea" 
                placeholder="Describe task"
                value={this.state.content}
                onChange={(e) => this.setState({content: e.target.value})}></textarea>
                </div>

                <div className="field">
                <button className="button button-layout"> Submit </button>
                </div>

                </div>
                </div>

            </form> 

       )
    };
}