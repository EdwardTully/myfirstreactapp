import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
    
  render() {
   
  //method 2 

   //let message
  // if (this.state.isLoggedIn){
  // message = <div>Welcome Bruce</div>
  // } else {
   // message = <div>Welcome Guest</div>
   //} 
  // return message
   
    //method 1

   // if (this.state.isLoggedIn == true){
      //  return <div>Welcome Bruce</div>
  //  } else {
   //     return <div>Welcome Guest</div>
  //  }
   
   //method 3 ternary

   // return this.state.isLoggedIn ? (<div>Hello Bruce</div>): (<div>Hello Guest</div>)

   //method 4 short circuit =  if true then return this, else nothing
   return this.state.isLoggedIn && <div>Hello Bruce</div>
}
  
}


export default UserGreeting
