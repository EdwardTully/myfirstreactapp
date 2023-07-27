import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Greettwo extends React.Component{

    render() { 

        const {name, heroName}= this.props

        return <h1>Hello {name}, Also Known as {heroName}</h1>
        
    }

    
}
export default Greettwo
