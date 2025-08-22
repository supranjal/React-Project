import React from 'react'
import { Link } from 'react-router-dom'


const NotFound = () => {
return (
    <div className='h-[80vh] bg-slate-100 flex justify-center items-center'>
            The page doesnt exist.
            Go to <Link to='/' className='text-pink-400 hover:text-blue-600 hover:underline'> Home</Link>
    </div>
)
}

export default NotFound