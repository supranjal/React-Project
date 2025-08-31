import React from 'react'
import Person from './Person' // Make sure this file exists

const Room = () => {
  return (
    <div>
      <Person name="ram" age={22} />
      <Person name="sita" age={12} />
    </div>
  )
}

export default Room