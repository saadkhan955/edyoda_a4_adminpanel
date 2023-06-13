import React from 'react'
import { useSelector } from 'react-redux'


const AccountsPage = () => {
  
  const counter=useSelector(state=>state.counter.counter)
  return (
    <h2 className='text-2xl text-white font-bold bg-red-500 p-4 rounded-lg m-4'>{counter}</h2>
    
  )
}

export default AccountsPage