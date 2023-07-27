import React from 'react'

function InLine() {

const styles = {
    fontSize: '90px',
    color: 'green',
    padding: '50px 110px'
}
const boxStyle = {
    width: '900px',
    height: '200px',
    backgroundColor: 'black',
    margin: "auto"
}
  return (
    <div style={boxStyle}>
        <h1 style= {styles}>Inline</h1>
    </div>
  )
}

export default InLine