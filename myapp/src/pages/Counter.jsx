import { Button } from '@mui/material'
import React, { useEffect, useState, useContext } from 'react'
import MyButton from '../components/layout/MyButton'
import { MyContext } from '../pages/Mycontext'

const Counter = () => {
    let[count,setCount] = useState(0)
    let [data,setData] = useState(100)
    let info = useContext(MyContext)
    useEffect(()=> { alert('value updated')},[count,data])
    const increase = () =>
    {
        setCount(++count)
    }
    const decrease = () =>
    {
        setCount(--count)
    }
    
  return (
    <div>
        <h1>{info}</h1>
        count: {count}
        <MyButton color='green' text='UP' test={increase}/>
        <Button onClick={increase}>Increase</Button>
        <Button onClick={decrease}>Decrease</Button>
        {
             count != 0 && <Button onClick={()=>{
            setCount(0)
        }}>Reset</Button>
        }
        <br></br>
        Data: {data}
        <Button onClick={()=>setData(data+10)}>Increasedata</Button>
        <Button onClick={()=>setData(data-10)}>decrease</Button>
        {
             data != 100 && <Button onClick={()=>{
            setData(100)
        }}>Reset</Button>
        }
       
    </div>
  )
}

export default Counter