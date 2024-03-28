import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ProductDetail = () => {
    return (
        <Container style={{ width: "50%" }}>
            <Row>
                <Col lg={6}>
                    <img alt="product img" />
                </Col>
                <Col lg={6}>
                    <div></div>
                    <div></div>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetail