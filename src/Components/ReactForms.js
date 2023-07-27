import React, { Component } from 'react'

class ReactForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username: '',
         comments: '',
         topic: 'react'
      }
    }
   
    handleUsernameChange=(event)=>{
        this.setState({
            username: event.target.value
        })
    }
    handleUserComments=(event)=>{
        this.setState({
            comments: event.target.value
        })
    }
    handleTopic=(event)=>{
        this.setState({
            topic: event.target.value
        })
    }
    handleSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
    
  render() {
    return (
      <div>
        <form className='formA' onSubmit={this.handleSubmit}>
            <label>Username</label>
            <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} onChange={this.handleUserComments}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopic}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='view'>View</option>
                </select>
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
        </form>
        
      </div>
    )
  }
}

export default ReactForm
