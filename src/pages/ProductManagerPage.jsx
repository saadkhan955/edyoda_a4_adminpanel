import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

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
          if (parsedData?.productsPage?.products) {
            setProducts(parsedData.productsPage.products);
          }
          if (parsedData?.productsPage?.categories) {
            setCategories(parsedData.productsPage.categories);
          }
        }
      } catch (error) {
        console.error('Failed to retrieve data:', error);
      }
    };

    fetchData();
  }, []);

  const toggleProductSelection = (index) => {
    const newSelectedProducts = selectedProducts.includes(index)
      ? selectedProducts.filter((i) => i !== index)
      : [...selectedProducts, index];
    setSelectedProducts(newSelectedProducts);
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

  const deleteCategory = (index) => {
    const newCategories = [...categories];
    newCategories.splice(index, 1);
    setCategories(newCategories);
  };

  const onAddHandler = () => {
    const newProduct = {
      category: 'testing 1',
      unitSold: 500,
      stock: 100,
      expireDate: '05 March 2024',
      name: 'Footwear',
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div className='container mx-auto sm:px-4 mt-12'>
      <div className='flex flex-wrap tm-content-row'>
        <div className="sm:w-full pr-4 pl-4 md:w-full lg:w-2/3 xl:w-2/3 tm-block-col">
          <div className="tm-bg-primary-dark tm-block tm-block-products">
            <div className="tm-product-table-container">
              <table className='w-full table table-hover tm-table-small tm-product-table'>
                <thead className='sticky top-0 z-10'>
                  <tr>
                    <th>&nbsp;</th>
                    <th>PRODUCT NAME</th>
                    <th>UNIT SOLD</th>
                    <th>IN STOCK</th>
                    <th>EXPIRE DATE</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-slate-700 !bg-[#50697f]'>
                  {products.map((item, i) => (
                    <tr key={i}>
                      <td>
                        <label>
                          <input type="checkbox" onChange={() => toggleProductSelection(i)} checked={selectedProducts.includes(i)} />
                        </label>
                      </td>
                      <td className='tm-product-name'>{item.name}</td>
                      <td>{item.unitSold}</td>
                      <td>{item.stock}</td>
                      <td>{item.expireDate}</td>
                      <td>
                        <div className='tm-product-delete-link'>
                          <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteProduct(i)} className='tm-product-delete-icon cursor-pointer' />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button onClick={onAddHandler} className='btn btn-primary btn-block uppercase mb-3 w-full'>
              ADD NEW PRODUCT
            </button>
            <button onClick={onDeleteSelectedProducts} className='btn btn-primary btn-block uppercase w-full'>
              DELETE SELECTED PRODUCTS
            </button>
          </div>
        </div>

        <div className='sm:w-full md:w-full lg:w-1/3 xl:w-1/3 tm-block-col pr-4 pl-4'>
          <div className="tm-bg-primary-dark tm-block tm-block-product-categories">
            <h2 className='tm-block-title'>Product Categories</h2>
            <div className='tm-product-table-container'>
              <table className="w-full table tm-table-small tm-product-table">
                <tbody>
                  {categories.map((category, i) => (
                    <tr key={i}>
                      <td>{category}</td>
                      <td>
                        <div className='tm-product-delete-link'>
                          <FontAwesomeIcon icon={faTrashAlt} onClick={() => deleteCategory(i)} className='tm-product-delete-icon cursor-pointer' />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <button className='btn btn-primary btn-block uppercase mb-3 w-full'>ADD NEW CATEGORY</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;