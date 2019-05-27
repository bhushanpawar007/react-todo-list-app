import React, { Component } from "react";

export default class TodoList extends Component {
  renderListItem() {
    const { items, handleDelete, handleEdit } = this.props;
    return items.map(item => {
      return (
        <li className="list-group-item" key={item.Id}>
          {item.Title}
          <button
            type="button"
            className="btn btn-danger float-right "
            onClick={() => handleDelete(item.Id)}
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-secondary float-right mr-3"
            onClick={() => handleEdit(item.Id)}
          >
            Edit
          </button>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>List of Todo Items</h2>
        <hr />
        <ul className="list-group">{this.renderListItem()}</ul>
      </div>
    );
  }
}
