import React from 'react'
import './style.css'

export default function ProgressBar(props) {

    let remainingGroceries = props.groceries.filter(grocery => !grocery.completed).length;
    let ratio = props.groceries.length !== 0 ? remainingGroceries / props.groceries.length : 0
    let activeClass = 'progress-count p-green'

    if (ratio > 0.5) {
        activeClass = 'progress-count p-red'
    }
    else if (ratio > 0.25) {
        activeClass = 'progress-count p-yellow'
    }

    return (
        <div className='progress-area'>
            Groceries left
            <div className={activeClass}>
                <b>{remainingGroceries}</b>
            </div>
        </div>
    )
}
