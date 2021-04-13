import React from 'react';
import classes from './Todo.module.css';

const Todo = (props) => {
    return (
        <div className={[classes.todo, props.todo.isCompleted ? classes.completed : ''].join(' ')} key={props.todo.id}>
            {props.todo.text}
            <div>
                <button
                    style={{ background: "red" }}
                    onClick={() => props.removeTodo(props.index)}>x</button>
                <button
                    disabled={props.todo.isCompleted}
                    onClick={() => props.completeTodo(props.index)}>Complete</button>
            </div>
        </div>
    )
}

export default Todo;