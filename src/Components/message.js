import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Message extends React.Component{

    constructor(){
        super()
        this.state={
            message: 'Welcome visitor'

        }
    }
    changeMessage() {
        this.setState(
           { message: 'Thank you very much'}
        
           
        )
    }

    render() { 
        
        return( <>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changeMessage()}>Subscribe</button>
       
            </>)
    }

    
}
export default Message