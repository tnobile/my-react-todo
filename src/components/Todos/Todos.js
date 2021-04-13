import React from 'react';
import Todo from '../Todo/Todo';
import TodoForm from '../TodoForm/TodoForm'
import classes from './Todos.module.css';

const Todos = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.header}>
                TODO LIST ({props.remaining}/{props.todos.length}))
            </div>
            <div className={classes['todo-list']}>
                {props.todos.map((t, i) => {
                    return <Todo todo={t}
                        removeTodo={props.removeTodo}
                        completeTodo={props.completeTodo}
                        key={i}
                        index={i} />
                })}
                <TodoForm addTodo={props.addTodo} />
            </div>
        </div>
    )

}

export default Todos;