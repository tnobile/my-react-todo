import React, { lazy, useState } from 'react'


const TodoForm = (props) => {
    const [value, setValue] = useState("");
    function onChange(e) {
        setValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        props.addTodo(value);
        setValue("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text'
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </div>
    )

}

export default TodoForm;