import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

const API = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {

  state = {
      transactions: [],
      searchTerm: ''
    }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      searchTerm: event.target.value
    })
  }

  filteredTransaction = () => {
    return this.state.transactions.filter(transaction => transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || transaction.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()))  
  }

  componentDidMount() {
  fetch(API)
  .then(resp => resp.json())
  .then(data => this.setState({
    transactions: data
  }))
  }

  render() {
    console.log(this.filteredTransaction());

    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
        <TransactionsList transactions={this.filteredTransaction()}/>
      </div>
    )
  }
}

export default AccountContainer
