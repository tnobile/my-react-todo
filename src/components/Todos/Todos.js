import React from 'react';
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm'
import classes from './Todos.module.css';

const Todos = (props) => {
    return (
        <div>
            <div className={classes['todo-list']}>
                {props.todos.map((t,i) => {
                    return <Todo todo={t} completeTodo={props.completeTodo} index={i}/>
                })}
            </div>
            <TodoForm addTodo={props.addTodo}/>
        </div>
    )

}

export default Todos;