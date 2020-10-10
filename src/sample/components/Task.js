import React, { Component } from 'react';

class Task extends Component {

    render() {
        const { task } = this.props;
        return <div>
            {task.id} - {task.title} - {task.description}
            <input type="checkbox" />
            <button style={btnDelete}> x</button>
        </div>
    }

}
const btnDelete = {
    fontSize: '20px'
}
export default Task;