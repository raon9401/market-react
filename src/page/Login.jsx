import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Login = ({ setAuthenticate }) => {
    const navigate = useNavigate();

    const loginUser = (event) => {
        // preventDefault 를 통해서 refresh를 막아준다
        event.preventDefault();
        setAuthenticate(true);
        navigate('/');
    }

    return (
        <Container style={{ width: '30%' }}>
            <Form onSubmit={(event) => loginUser(event)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Login
                </Button>
            </Form>
        </Container >
    )
}

export default Login