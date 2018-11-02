import React, { Component } from "react";
import "./App.css";
import Card from "./components/Card";
import SearchField from "./components/searchField";
import CartItem from "./components/itemCart";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [],
      searched: [],
      shopping: [],
      total: 0
    };
  }

  async componentDidMount() {
    let result = await fetch("http://localhost:8082/api/books");
    let data = await result.json();
    console.log("data", data);
    this.setState({
      books: data,
      searched: data
    });
  }
  choose = item => {
    console.log(item);
    this.setState({
      shopping: [...this.state.shopping, item]
    });
    this.setState({
      total: this.state.total + item.price
    });
  };
  onChangeSearch = event => {
    event.preventDefault();
    const value = event.target.value;
    const books = this.state.books;
    const filteredBooks = this.findMatches(value, books);
    this.setState({
      searched: filteredBooks
    });
  };
  findMatches(words, books) {
    return books.filter(item => {
      const regex = new RegExp(words, "gi");
      return item.title.match(regex) || item.author.match(regex);
    });
  }

  clear = () => {
    this.setState({
      shopping: [],
      total: 0
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>All the best books and store</h1>
        </header>
        <div className="searchBar">
          <div className="topnav">
            <SearchField
              searched={this.state.searched}
              onChangeSearch={this.onChangeSearch}
            />
          </div>
        </div>
        <div className="maincont container-fluid">
          <div className="booklist">
            <Card searched={this.state.searched} choose={this.choose} />
          </div>
          <div className="shoppingCart container">
            <div className="cartBar">
              <h2> Shopping Cart</h2>
            </div>
            <div className="shoppingItems">
              <CartItem shopping={this.state.shopping} />
            </div>
            <h2>Total: ${this.state.total} </h2>
          </div>
          <button className="btn" onClick={this.clear}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default App;
