import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import CheckmarkSvg from '../assets/CheckmarkSvg';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    // Fetch data from local storage
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem('projectData');
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          if (
            parsedData &&
            parsedData.productsPage &&
            parsedData.productsPage.products
          ) {
            const productData = parsedData.productsPage.products;
            setProducts(productData);
          }
          if (
            parsedData &&
            parsedData.productsPage &&
            parsedData.productsPage.categories
          ) {
            const categoryData = parsedData.productsPage.categories;
            setCategories(categoryData);
          }
        }
      } catch (error) {
        console.error('Failed to retrieve data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleProductSelection = (index) => {
    const selectedProductIndex = selectedProducts.indexOf(index);
    if (selectedProductIndex > -1) {
      const newSelectedProducts = [...selectedProducts];
      newSelectedProducts.splice(selectedProductIndex, 1);
      setSelectedProducts(newSelectedProducts);
    } else {
      setSelectedProducts([...selectedProducts, index]);
    }
  };

  const deleteProduct = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
    setSelectedProducts([]);
  };

  const onDeleteSelectedProducts = () => {
    const newProducts = products.filter((_, i) => !selectedProducts.includes(i));
    setProducts(newProducts);
    setSelectedProducts([]);
  };

  const onAddHandler = () => {
    const newProduct = {
      category: 'testing 1',
      unitSold: 500,
      stock: 100,
      expireDate: '05 March 2024',
      name: 'Foot wear',
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div className='bg-[#4e657a] h-[100vh] py-8 flex justify-center gap-10'>
      <div className='bg-[#435c70] w-[735px] p-5 h-[700px] flex flex-col gap-4'>
        <div className='h-[80%] overflow-auto'>
          <div className='grid grid-cols-6 text-white bg-[#486177] p-3 font-bold'>
            <div className='w-fit'></div>
            <div className='col-span-1'>PRODUCT NAME</div>
            <div className='col-span-1'>UNIT SOLD</div>
            <div className='col-span-1'>IN STOCK</div>
            <div className='col-span-1'>EXPIRE DATE</div>
            <div className='col-span-1'></div>
          </div>
          {products.map((item, i) => (
            <div key={i} className='grid grid-cols-6 text-white bg-[#486177] p-3 font-bold justify-center items-center'>
              <div className='w-fit relative'>
                <input
                  className='w-[24px] h-[24px] cursor-pointer appearance-none bg-[#394e64] relative rounded-full bg-center transition-all duration-[100ms] ease-linear'
                  type='checkbox'
                  onChange={() => toggleProductSelection(i)}
                  checked={selectedProducts.includes(i)}
                />
                {selectedProducts.includes(i) && (
                  <div className='absolute h-[24px] w-[24px] top-[1px] -left-[2px]'>
                    <CheckmarkSvg/>
                  </div>
                )}
              </div>
              <div className='col-span-1 flex items-center gap-4'>
                <p>{item.name}</p>
              </div>
              <div className='col-span-1'>{item.unitSold}</div>
              <div className='col-span-1'>{item.stock}</div>
              <div className='col-span-1'>{item.expireDate}</div>
              <div className='col-span-1 rounded-full bg-[#394e64] inline-flex h-[40px] w-[40px] p-[10px] text-center justify-center items-center'>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  onClick={() => deleteProduct(i)}
                  className='cursor-pointer'
                />
              </div>
            </div>
          ))}
        </div>
        <button onClick={onAddHandler} className='bg-[#f5a623] text-center w-full text-white text-lg font-bold p-2'>
          ADD NEW PRODUCT
        </button>
        <button onClick={onDeleteSelectedProducts} className='bg-[#f5a623] w-full text-white text-lg font-bold p-2'>
          DELETE SELECTED PRODUCTS
        </button>
      </div>
      <div className='bg-[#435c70] w-[350px] p-5 h-[700px] flex flex-col gap-4'>
        <h4 className='text-lg font-bold text-white'>Product Categories</h4>
        <div className='h-[80%] overflow-auto'>
          {categories.map((item, i) => (
            <div className='text-white bg-[#486177] p-3 font-bold' key={i}>
              {item}
            </div>
          ))}
        </div>
        <div>
          <button className='bg-[#f5a623] w-full text-white text-lg font-bold p-2'>ADD NEW CATEGORY</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
