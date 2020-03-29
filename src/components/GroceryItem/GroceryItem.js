import React, { Component } from 'react'
import './style.css'

export default class GroceryItem extends Component {
    render() {
        return (
            <div style={{ display: "flex" }}>
                <div className='grocery-item' onClick={this.props.toggleItem}
                    style={{
                        textDecoration: this.props.item.completed ? "line-through" : "",
                        backgroundColor: this.props.item.completed ? "rgba(255,0,0,.2)" : ""
                    }}
                >{this.props.item.item} </div >
                <button className="delete-btn"
                    onClick={() => this.props.removeItem(this.props.item.id)}>
                    <img src="https://img.icons8.com/material-outlined/24/000000/delete-forever.png " alt="X" /></button>
            </div>

        )
    }
}
