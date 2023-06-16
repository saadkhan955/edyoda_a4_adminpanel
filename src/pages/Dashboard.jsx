import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment } from '../store/counterSlice';
// import { login } from '../store/userSlice';
import DataLoading from '../data/DataLoading';
import LineChartContainer from '../components/LineChartContainer';


const DashboardPage = () => {
  // const isLoggedIn=useSelector(state=>state.user.isLoggedIn);
  // const dispatch=useDispatch();
  // const counter=useSelector((state)=>state.counter.counter);

  return (
    <div className='sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1320px] mx-auto sm:px-4'>
      {/* <h2 className='text-2xl text-white font-bold bg-red-500 p-4 rounded-lg '>{counter}</h2>
      <button onClick={()=>dispatch(decrement())} className='bg-purple-400 p-2 text-2xl font-bold text-white mr-2 '>-</button>
      <button onClick={()=>dispatch(increment())} className='bg-purple-400 p-2 text-2xl font-bold text-white'>+</button>
      {!isLoggedIn && <button onClick={()=>dispatch(login(
        {user:{
          firstName:'EDYODA',
          lastName:'ADMIN'
        },
        id:'XYZ',
        token:'ABC'
      }
        ))} className='bg-green-400 p-2 text-2xl font-bold text-white'>LOGIN</button>} */}
        <div className="flex flex-wrap justify-between -mx-[20px]">
        <DataLoading />
        <LineChartContainer />
        </div>
    </div>
  )
}

export default DashboardPage   

