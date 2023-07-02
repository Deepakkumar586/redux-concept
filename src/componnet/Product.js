import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

function Product() {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);


    useEffect(() => {
        dispatch(fetchProducts());


        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');
        //     const data = await res.json();
        //     console.log(data)
        //     setProducts(data)
        // }
        // fetchProducts();

    }, [])

    // add product
    const handleAdd = (product) => {
        // product ko store ke ander store karna hoga
        // agar hm cart me data ko add karte hai to hme useDispatch ka us ekarna hoga
        dispatch(add(product));

    }

    // loading
    if (status === STATUSES.LOADING) {
        return <h2>Loading.....</h2>
    }


    // error
    if (status === STATUSES.ERROR) {
        return <h1>Something Went wrong...</h1>
    }
    return (
        <div className='productsWrapper'>
            {
                products.map(product => (
                    <div className='card' key={product.id}>
                        <img src={product.image} alt='' />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <h6>{product.description}</h6>
                        <button onClick={() => handleAdd(product)} className='btn'>AddToCart</button>
                    </div>
                ))
            }


        </div>
    )
}

export default Product
