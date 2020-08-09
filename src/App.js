import React from "react";
import ReactDOM from "react-dom";
import icon from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: [],
    };
  }
  addItem(todoTopic) {
    if (todoTopic === "") return;

    const newItem = {
      id: Date.now(),
      value: todoTopic,
      isChecked: false,
    };
    const list = [...this.state.list];
    list.push(newItem);

    this.setState({
      newItem: "",
      list: list,
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updateList = list.filter((i) => i.id !== id);
    this.setState({
      list: updateList,
    });
  }

  updateInput(input) {
    this.setState({
      newItem: input,
    });
  }

  render() {
    return (
      <div>
        <img src={icon} width="100" height="100" className="logo" />
        <h1 className="app-title">TODO App</h1>
        <div className="container">
          Add an Item...
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Write a TODO"
            required
            value={this.state.newItem}
            onChange={(e) => this.updateInput(e.target.value)}
          />
          <button
            className="add-btn"
            onClick={() => {
              this.addItem(this.state.newItem);
            }}
            disabled={!this.state.newItem.length}
          >
            Add TODO
          </button>
          <div className="list">
            <ul>
              {this.state.list.map((i) => {
                return (
                  <li key={i.id}>
                    <input
                      type="checkbox"
                      name="isDone"
                      checked={i.isChecked}
                      onChange={() => {}}
                    />
                    {i.value}
                    <button
                      className="btn"
                      onClick={() => {
                        this.deleteItem(i.id);
                      }}
                    >
                      Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
