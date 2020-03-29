import React from 'react'
import './style.css'

export default function ToggleButtons(props) {
    return (
        <div className="button-area">
            <button value='All'
                className={'active-' + (props.filterType === 'All' ? 'btn' : '')}
                onClick={props.changeFilter}>All</button>
            <button value='Active'
                className={'active-' + (props.filterType === 'Active' ? 'btn' : '')}
                onClick={props.changeFilter}>Active</button>
            <button value='Complete'
                className={'active-' + (props.filterType === 'Complete' ? 'btn' : '')}
                onClick={props.changeFilter}>Complete</button>
        </div>
    )
}
