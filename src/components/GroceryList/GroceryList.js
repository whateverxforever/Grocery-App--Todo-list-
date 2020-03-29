import React from 'react'
import GroceryItem from '../GroceryItem'
import './style.css'
export default function GroceryList(props) {
    if (props.items.length < 1 && props.totalCount < 1) {
        return (
            <div className="grocery-list-area initial-text">
               <br/>
                Hey there! Why don't you add some groceries to the list. <br/>
                Once you've got the grocery, just click on it to mark it taken. <br/>
                Use the left tab to switch between different filters.   
            </div>
        )
    }

    return (
        <div className="grocery-list-area">
            {
                props.items.map(item => {
                    return (
                        <GroceryItem key={item.id} item={item} removeItem={props.removeItem}
                            toggleItem={() => props.toggleStatus(item.id)} />
                    )
                })
            }
        </div>
    )
}
