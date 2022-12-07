import React from "react"
import { Container, Row, Col, Stack, Image, Form, Button, Card } from "react-bootstrap"
import WaysHub from "../img/WaysHub.png"
import { useNavigate } from "react-router-dom"

function SignUpPage() {

    const navigate = useNavigate()

    return(
        <>
            <Container className="p-3 mt-4">
                <Row>
                    <Col className="d-flex flex-column justify-content-center">
                        <Stack direction="vertical" className="d-flex flex-column justify-content-center">
                            <Image className="w-75" src={WaysHub} />
                            <Card.Text className="text-white fs-5 fw-light w-75" >Join now, share your creations with another people and enjoy other creations</Card.Text>
                            <Button onClick={() => navigate("/SignInPage")} variant="primary" type="submit" style={{backgroundColor:'#FF7A00', border: 'none', width:'30%'}} className="mt-5 py-2 fw-bold fs-5 text-white">
                                Sign In
                            </Button>
                        </Stack>
                    </Col>
                    <Col>
                        <Container className="rounded-4 p-5" style={{backgroundColor:'#161616'}} >
                            <Form>
                                <Form.Label className="fs-1 mb-3 fw-bold text-white">Sign Up</Form.Label>

                                <Form.Group controlId="formEmail">
                                    <Form.Control className="mb-3 py-2 fs-5" style={{borderColor:'#BCBCBC', borderWidth:'3px', backgroundColor:'#555555', color:'rgb(210,210,210,0.25)'}} type="email" placeholder="Email" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formPassword">
                                    <Form.Control className="py-2 fs-5" style={{borderColor:'#BCBCBC', borderWidth:'3px', backgroundColor:'#555555', color:'rgb(210,210,210,0.25)'}} type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formChannelName">
                                    <Form.Control className="py-2 fs-5" style={{borderColor:'#BCBCBC', borderWidth:'3px', backgroundColor:'#555555', color:'rgb(210,210,210,0.25)'}} type="text" placeholder="Channel Name" />
                                </Form.Group>

                                <Form.Group className="mb-4" controlId="formChannelDescription">
                                    <Form.Control className="py-2 fs-5" style={{borderColor:'#BCBCBC', borderWidth:'3px', backgroundColor:'#555555', color:'rgb(210,210,210,0.25)'}} as="textarea" rows={3} placeholder="Channel Description" />
                                </Form.Group>

                                <Button variant="primary" type="submit" style={{backgroundColor:'#FF7A00', border: 'none'}} className="py-2 fw-bold fs-5 w-100 text-white">
                                Sign Up
                                </Button>

                            </Form>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SignUpPage