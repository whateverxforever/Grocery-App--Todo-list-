import './style.css';
import React, { useState } from 'react';

export default function InputForm(props) {

    const [item, setItem] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        props.addItem({
            id: Date.now(),
            item,
            completed: false
        })
        setItem('')
    }

    return (
        <form className="item-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="item"
                value={item}
                placeholder="Add grocery ..."
                onChange={e => { setItem(e.target.value) }} />
            <button
                type="submit"
            >Add Grocery</button>
        </form>
    )
}
