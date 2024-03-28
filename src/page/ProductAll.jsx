import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../component/ProductCard';

const ProductAll = () => {
    // eslint-disable-next-line
    const [productList, setProductList] = useState([]);

    const getProducts = async () => {
        // let url = "http://localhost:5000/products";
        let url = "https://my-json-server.typicode.com/raon9401/market-react/products";


        let reponse = await fetch(url)
        let data = await reponse.json();

        setProductList(data);
    }

    useEffect(() => {
        getProducts();
    }, []);

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