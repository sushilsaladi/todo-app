import React, { Component } from "react";

export default class CreateTodos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo_description: "",
      todo_priority: "",
      todo_responsible: "",
      todo_completed: false
    };
    this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
    this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
    this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeTodoDescription(e) {
    this.setState({
      todo_description: e.target.value
    });
  }
  onChangeTodoResponsible(e) {
    this.setState({
      todo_responsible: e.target.value
    });
  }
  onChangeTodoPriority(e) {
    this.setState({
      todo_priority: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Form Submit`);
    console.log(`Todo Description : ${this.state.todo_description}`);
    console.log(`Todo Responsible : ${this.state.todo_responsible}`);
    console.log(`Todo Priority : ${this.state.todo_priority}`);
    console.log(`Todo Completed: ${this.state.todo_completed}`);

    this.setState({
      todo_description: "",
      todo_priority: "",
      todo_responsible: "",
      todo_completed: false
    });
  }
  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Create Todo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Description</label>
            <input
              className="form-control"
              type="text"
              onChange={this.onChangeTodoDescription}
              value={this.state.todo_description}
            ></input>
          </div>
          <div className="form-group">
            <label>Responsible</label>
            <input
              className="form-control"
              type="text"
              onChange={this.onChangeTodoResponsible}
              value={this.state.todo_responsible}
            ></input>
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Low"
                checked={this.state.todo_priority === "Low"}
                onChange={this.onChangeTodoPriority}
              ></input>

              <label className="form-check-label">Low</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Medium"
                checked={this.state.todo_priority === "Medium"}
                onChange={this.onChangeTodoPriority}
              ></input>
              <label className="form-check-label">Medium</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="High"
                checked={this.state.todo_priority === "High"}
                onChange={this.onChangeTodoPriority}
              ></input>
              <label className="form-check-label">High</label>
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Todo"
              className="btn btn-primary"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}
