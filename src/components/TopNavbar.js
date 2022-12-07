import React from "react";
import { Container, Form, Stack, Image, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import AddVideoIcon from "../img/AddVideoIcon.svg"
import ProfileIcon from "../img/ProfileIcon.svg"

function TopNavbar() {

    const navigate = useNavigate()

    return(
        <>
            <Container className="px-5 my-4">
                <Stack direction="horizontal">
                    <Form.Group className="d-flex flex-column justify-content-center me-auto w-50" controlId="formSearch">
                        <Form.Control className="py-1 fs-5" style={{borderColor:'#BCBCBC', borderWidth:'3px', backgroundColor:'#555555', color:'rgb(210,210,210,0.25)'}} type="search" placeholder="Search" />
                    </Form.Group>

                    <Stack direction="horizontal" className="btn me-3" onClick={() => navigate("/AddVideo")}>
                        <div className="d-flex flex-column justify-content-center me-3">
                            <Image src={AddVideoIcon}/>
                        </div>
                        <Card.Text className="text-white">Add Video</Card.Text>
                    </Stack>

                    <div className="btn m-0 p-0" onClick={() => navigate("/MyChannelPage")}>
                        <Image src={ProfileIcon}/>
                    </div>
                </Stack>
            </Container>
        </>
    )
}

export default TopNavbar