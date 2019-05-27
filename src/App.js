import React, { Component } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { Id: 0, Title: "First" },
        { Id: 1, Title: "Second" },
        { Id: 2, Title: "Third" },
        { Id: 3, Title: "Fourth" }
      ],
      isEditmodeOn: false,
      newItem: "",
      Id: null
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleDelete(Id) {
    var filteredItems = this.state.items.filter(item => item.Id !== Id);
    this.setState({ items: filteredItems });
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({ newItem: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const newItem = {};
    if (this.state.isEditmodeOn == true) {
      newItem.Id = this.state.Id;
      newItem.Title = e.target.newItem.value;
    } else {
      newItem.Id = this.state.items.length + 1;
      newItem.Title = e.target.newItem.value;
    }
    const newItmes = [...this.state.items, newItem];
    this.setState({ items: newItmes, newItem: "", isEditmodeOn: false });
  }
  handleEdit(Id) {
    const itemTobeEdited = this.state.items.find(item => item.Id === Id);
    this.setState({
      newItem: itemTobeEdited.Title,
      Id: itemTobeEdited.Id,
      isEditmodeOn: true
    });
    //remove the selected record from the state
    var filteredItems = this.state.items.filter(item => item.Id !== Id);
    this.setState({ items: filteredItems });
  }

  render() {
    var style = {
      leftPanel: {
        padding: "5%"
      },
      rightPanel: {
        padding: "2%"
      }
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-xl-3">
            <div className="card">
              <div className="card-body" style={style.leftPanel}>
                <AddTodo
                  handleChange={this.handleChange}
                  newItem={this.state.newItem}
                  handleSubmit={this.handleSubmit}
                  isEditmodeOn={this.state.isEditmodeOn}
                />
              </div>
            </div>
          </div>
          <div className="col-xl-9">
            <div className="card">
              <div className="card-body" style={style.rightPanel}>
                <TodoList
                  items={this.state.items}
                  handleDelete={this.handleDelete}
                  handleEdit={this.handleEdit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
