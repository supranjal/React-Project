import React from 'react'

const Person = (props) => {
    // props -properties
    // <person name ="ram" age={22}
    // props : {name:'ram' age:22}
    // destructuring props
    // let {name,age} = props
  return (
    <div className='p-3 border w-50 my-2'> 
    <h1>Name:{props.name}</h1>
    <h2>Age:{props.age}</h2>
    </div>
  )
}

export default Person