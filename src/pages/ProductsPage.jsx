import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ProductsPage = () => {
  const [products,setProducts]=useState([]);
  const [categories,setCategories]=useState([]);
  useEffect(() => {
    const fetchData=async()=>{
      const response=await axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json');
      setProducts(response.data.productsPage.products)
      // console.log(response.data.productsPage.categories)
      setCategories(response.data.productsPage.categories)
    }
    fetchData();
  }, [])

  const onDeleteHandler=(index)=>{
    const newProducts=products.filter((_,i)=>i!==index);
    setProducts(newProducts)
  }

  const onAddHandler=(index)=>{
    const newProduct={
      category:'testing 1',
      unitSold:500,
      stock:100,
      expireDate:'05 March 2024',
      name:'Foot wear'
    }
    setProducts([...products,newProduct])
  }
  
  return (
    <div className='bg-[#4e657a] h-[100vh] py-8 flex justify-center  gap-10'>
      <div className='bg-[#435c70] w-[735px] p-5  h-[700px] flex flex-col gap-4'>
        <div className='h-[80%] overflow-auto'>
        <div className='grid grid-cols-6 text-white bg-[#486177] p-3 font-bold'>
          <div className='col-span-2'>PRODUCT NAME</div>
          <div className='col-span-1'>UNIT SOLD</div>
          <div className='col-span-1'>IN STOCK</div>
          <div className='col-span-1'>EXPIRE DATE</div>
          <div className='col-span-1'></div>
        </div>
        {products.map((item,i)=>
        <div key={i} className='grid grid-cols-6 text-white bg-[#486177] p-3 font-bold '>
          <div className='col-span-2 flex items-center gap-4'>
            <input className='w-5 h-5' type='checkbox'/>
            <p>{item.name}</p>
            </div>
          <div className='col-span-1'>{item.unitSold}</div>
          <div className='col-span-1'>{item.stock}</div>
          <div className='col-span-1'>{item.expireDate}</div>
            <button onClick={()=>onDeleteHandler(i)} className='bg-red-500 p-1'>DELETE</button>
          <div className='col-span-1'></div>
        </div>
        )}
        </div>
        <button onClick={onAddHandler} to='/add_new_product' className='bg-[#f5a623] text-center w-full text-white text-lg font-bold p-2'>ADD NEW PRODUCT</button>
        <button className='bg-[#f5a623] w-full text-white text-lg font-bold p-2'>DELETE SELECTED PRODUCTS</button>
      </div>
      <div className='bg-[#435c70] w-[350px] p-5  h-[700px] flex flex-col gap-4'>
        <h4 className='text-lg font-bold text-white'>Product Categories</h4>
        <div className='h-[80%] overflow-auto'>
          {categories.map((item,i)=><div className='text-white bg-[#486177] p-3 font-bold'>{item}</div>)}
        </div>

        <div>
        <button className='bg-[#f5a623] w-full text-white text-lg font-bold p-2'>ADD NEW CATEGORY</button>

        </div>
      </div>
    </div>
  )
}

export default ProductsPage