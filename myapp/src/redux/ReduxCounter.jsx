import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounter = () => {
    let [countValue, setCount] = useState(0)
    let [nameInput, setNameInput] = useState('')
    let [ageInput, setAgeInput] = useState('')
    
    const counterStore = useSelector((store) => store.counterStore);
    const personStore = useSelector((store) => store.personStore);
    const count = counterStore.count;
    const dispatch = useDispatch();
    
    return (
        <div className='py-8 px-4 max-w-4xl mx-auto'>
            {/* Counter Section */}
            <div className='bg-white rounded-xl shadow-md p-6 mb-8'>
                <h2 className='text-2xl font-bold mb-4'>Counter</h2>
                <div className='text-4xl mb-4'>count: {count}</div>
                <div className='flex flex-wrap gap-2'>
                    <button
                        className='px-6 py-2 rounded-lg shadow-md bg-green-500 hover:bg-green-600 text-white transition-colors duration-200'
                        onClick={() => {
                            dispatch({ type: "Increase" });
                        }}
                    >
                        Increase Counter
                    </button>
                    <button
                        className='px-6 py-2 rounded-lg shadow-md bg-red-500 hover:bg-red-600 text-white transition-colors duration-200'
                        onClick={() => {
                            dispatch({ type: "Decrease" });
                        }}
                    >
                        Decrease Counter
                    </button>
                    <button
                        className='px-6 py-2 rounded-lg shadow-md bg-gray-200 hover:bg-gray-300 text-gray-800 transition-colors duration-200'
                        onClick={() => {
                            dispatch({ type: "Reset" });
                        }}
                    >
                        Reset Counter
                    </button>
                </div>
                <div className='mt-4 flex flex-wrap gap-2 items-center'>
                    <input
                        type='text'
                        className='px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500'
                        onChange={e => setCount(e.target.value)}
                        placeholder='Set value'
                    />
                    <button
                        className='bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200'
                        onClick={() => dispatch({ type: "SET", payload: countValue })}
                    >
                        Set count
                    </button>
                </div>
            </div>
            
            {/* Person Section */}
            <div className='bg-white rounded-xl shadow-md p-6'>
                <h2 className='text-2xl font-bold mb-4'>Person Information</h2>
                
                <div className='bg-gray-100 p-4 rounded-md mb-6'>
                    <p className='text-xl'><strong>Name:</strong> {personStore.name || 'Not set'}</p>
                    <p className='text-xl'><strong>Age:</strong> {personStore.age || 'Not set'}</p>
                </div>
                
                <div className='mb-4'>
                    <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>Name:</label>
                    <div className='flex flex-wrap gap-2'>
                        <input 
                            type='text' 
                            id='name'
                            value={nameInput} 
                            onChange={(e) => setNameInput(e.target.value)} 
                            placeholder='Enter name'
                            className='flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500'
                        />
                        <button 
                            onClick={() => dispatch({ type: "UPDATE_NAME", payload: nameInput })}
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        >
                            Update Name
                        </button>
                    </div>
                </div>
                
                <div>
                    <label htmlFor='age' className='block text-gray-700 font-bold mb-2'>Age:</label>
                    <div className='flex flex-wrap gap-2'>
                        <input 
                            type='text' 
                            id='age'
                            value={ageInput} 
                            onChange={(e) => setAgeInput(e.target.value)} 
                            placeholder='Enter age'
                            className='flex-grow px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500'
                        />
                        <button 
                            onClick={() => dispatch({ type: "UPDATE_AGE", payload: ageInput })}
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                        >
                            Update Age
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReduxCounter