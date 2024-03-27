import React, { useEffect, useState } from 'react'
import { getProducts } from '../api/products';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);


    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div></div>
    )
}

export default ProductAll