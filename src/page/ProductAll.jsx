import React, { useEffect, useState } from 'react'
import { getProducts } from '../api/products';

const ProductAll = () => {
    // eslint-disable-next-line
    const [productList, setProductList] = useState([]);


    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div></div>
    )
}

export default ProductAll