import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    // eslint-disable-next-line
    const [productList, setProductList] = useState([]);
    // eslint-disable-next-line
    const [query, setQuery] = useSearchParams();

    const getProducts = async () => {
        // let url = "http://localhost:5000/products";
        let searchQuery = query.get('q') || "";
        console.log(searchQuery);
        let url = `https://my-json-server.typicode.com/raon9401/market-react/products?q=${searchQuery}`;


        let reponse = await fetch(url)
        let data = await reponse.json();

        setProductList(data);
    }

    useEffect(() => {
        getProducts();
        // eslint-disable-next-line
    }, [query]);

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((menu, index) => (
                        <Col lg={3} key={index}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductAll