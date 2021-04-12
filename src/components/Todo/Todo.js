import React from 'react';
import classes from './Todo.module.css';

const Todo = (props) => {
    return (
        <div className={[classes.todo, props.completed ? classes.completed : ' '].join(' ')} key={props.todo.id}>
            {props.todo.text}
            <div>
                <button onClick={() => props.completeTodo(props.index)}>Complete</button>
            </div>
        </div>
    )
}

export default Todo;