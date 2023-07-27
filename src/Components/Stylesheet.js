import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary': 'secondary'
  return (
    <div className = 'container'>
        <h1 className = 'tertiary'>Stylesheets</h1>
    </div>
  )
}

export default Stylesheet