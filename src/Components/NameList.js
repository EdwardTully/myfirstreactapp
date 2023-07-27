import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['bruce','clark','diana','bruce']
    const persons = [
        {id: 1,
        name: 'Bruce',
        age: 30,
        skill: 'React'},
        {id: 2,
            name: 'Clark',
            age: 30,
            skill: 'Angular'},
            {id: 3,
                name: 'Diana',
                age: 25,
                skill: 'Vue'}
        
    ]
    //const personList = persons.map(person=> (<Person key = {person.name} person = {person}/>) )
    const nameList = names.map((name,index)=> <h2 key={index}>{index}{name}</h2>)

  return (

    //2nd method of map use
    <div>{nameList}</div>


    //1st method using map
  // <div>
      // {names.map((name)=> <h2>{name}</h2>)}
  // </div>
  )
}

export default NameList