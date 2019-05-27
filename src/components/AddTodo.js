import React, { Component } from "react";

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <h2>Add New Item</h2>
        <hr />
        <form onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            className="form-control"
            placeholder="Add New Item"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="newItem"
            value={this.props.newItem}
            onChange={this.props.handleChange}
          />
          <br />
          <button type="submit" className="btn btn-primary float-right">
            {this.props.isEditmodeOn ? "Save " : "Add New"}
          </button>
        </form>
      </div>
    );
  }
}
