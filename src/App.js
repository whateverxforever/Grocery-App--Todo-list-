import React, { Component } from 'react';
import './App.css';
import InputForm from './components/InputForm';
import GroceryList from './components/GroceryList';
import ToggleButtons from './components/ToggleButtons';
import ProgressBar from './components/ProgressBar';

export default class App extends Component {

  state = {
    groceries: [],
    filterType: 'All'
  }

  addGroceries = grocery => {
    this.setState({
      groceries: [grocery, ...this.state.groceries]
    })
  }

  removeGrocery = id => {
    this.setState({
      groceries: this.state.groceries.filter(grocery => grocery.id !== id)
    })
    console.log(this.state);
  }

  changeFilter = e => {
    this.setState({
      filterType: e.target.value
    })
    console.log(this.state.filterType)
  }

  toggleComplete = id => {
    this.setState({
      groceries: this.state.groceries.map(grocery => {
        if (grocery.id === id) {
          return {
            id: grocery.id,
            item: grocery.item,
            completed: !grocery.completed
          }
        }
        else {
          return (grocery)
        }

      })
    })
  }


  render() {

    let groceries = []
    if (this.state.filterType === 'All') {
      groceries = this.state.groceries
    } else if (this.state.filterType === 'Active') {
      groceries = this.state.groceries.filter(grocery => !grocery.completed)
    } else if (this.state.filterType === 'Complete') {
      groceries = this.state.groceries.filter(grocery => grocery.completed)
    }

    return (
      <div className="App">
        <div className="container-main">
          <div className="heading">
            What's in your cart today?
          </div>

          <InputForm addItem={this.addGroceries} />

          <div className="display-area">
            <ToggleButtons filterType={this.state.filterType} changeFilter={this.changeFilter} />
            <GroceryList items={groceries} totalCount={this.state.groceries.length} toggleStatus={this.toggleComplete} removeItem={this.removeGrocery} />
            <ProgressBar groceries={this.state.groceries} />
          </div>
        </div>

      </div>

    )
  }
}


