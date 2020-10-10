import React, { Component } from 'react';

export default class TaskForm extends Component {
    state = {
        title: '',
        description: ''
    }

    onSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        this.props.addTask(this.state.title, this.state.description);
    }

    onChange = (event) => {
        console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        return (
            <form onSubmit={this.onSubmit}>
                <input name='title' type='text' placeholder='write a new task' onChange={this.onChange} value={this.state.title}></input>
                <br/>
                <input name= 'description' type='textarea' placeholder= 'write a description' onChange={this.onChange} value={this.state.description}></input>
                <br/>
                <input type='submit' value='add new Task' />
            </form>
        )
    }
}
