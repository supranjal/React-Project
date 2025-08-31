import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const PersonForm = () => {
  const [nameInput, setNameInput] = useState('')
  const [ageInput, setAgeInput] = useState('')
  
  // Get person data from Redux store
  const personStore = useSelector((store) => store.personStore)
  const dispatch = useDispatch()

  // Handle input changes and dispatch actions
  const handleNameChange = (e) => {
    setNameInput(e.target.value)
  }
  
  const handleAgeChange = (e) => {
    setAgeInput(e.target.value)
  }
  
  const updateName = () => {
    dispatch({ type: "UPDATE_NAME", payload: nameInput })
  }
  
  const updateAge = () => {
    dispatch({ type: "UPDATE_AGE", payload: ageInput })
  }

  return (
    <div className='p-8 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-10'>
      <h1 className='text-2xl font-bold text-center mb-6'>Person Information</h1>
      
      <div className='mb-6'>
        <h2 className='text-xl font-semibold mb-2'>Current Values:</h2>
        <div className='bg-gray-100 p-4 rounded-md'>
          <p><strong>Name:</strong> {personStore.name || 'Not set'}</p>
          <p><strong>Age:</strong> {personStore.age || 'Not set'}</p>
        </div>
      </div>
      
      <div className='mb-4'>
        <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>Name:</label>
        <div className='flex'>
          <input 
            type='text' 
            id='name'
            value={nameInput} 
            onChange={handleNameChange} 
            placeholder='Enter name'
            className='flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          <button 
            onClick={updateName}
            className='ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Update
          </button>
        </div>
      </div>
      
      <div className='mb-4'>
        <label htmlFor='age' className='block text-gray-700 font-bold mb-2'>Age:</label>
        <div className='flex'>
          <input 
            type='text' 
            id='age'
            value={ageInput} 
            onChange={handleAgeChange} 
            placeholder='Enter age'
            className='flex-grow shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          />
          <button 
            onClick={updateAge}
            className='ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          >
            Update
          </button>
        </div>
      </div>
    </div>
  )
}

export default PersonForm
