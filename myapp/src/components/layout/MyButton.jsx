import React from 'react'

const MyButton = ({color='blue',text='something',test}) => {
  return (
    <button className={`bg-${color}-500 px-4 py-2 rounded-lg my-2`} onClick={test}>
        {text}
    </button>
  )
}

export default MyButton