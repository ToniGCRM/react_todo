import React, { Component } from 'react';

class Form extends Component {
  state = { title: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    //this prevents refresh and other defaults
    e.preventDefault()
    //this calls in our props from app.js
    this.props.addTodo(this.state)
    //clearing out the form after
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          required 
          placeholder='add todo'
          name = 'title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;