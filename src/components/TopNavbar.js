import React, { useState, useRef } from "react";
import { Container, Form, Stack, Image, Card, Overlay, Popover } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import AddVideoIcon from "../img/AddVideoIcon.svg"
import ProfileIcon from "../img/ProfileIcon.svg"
import MyChannelLogo from "../img/MyChannelLogo.svg"
import LogoutIcon from "../img/LogoutIcon.svg"

function TopNavbar() {

    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const [target, setTarget] = useState(null);

    const ref = useRef(null);

    const handleClick = (event) => {
        setShow(!show);
        setTarget(event.target);
    }

    return (
        <>
            <Container className="px-5 my-4">
                <Stack direction="horizontal">
                    <Form.Group className="d-flex flex-column justify-content-center me-auto w-50" controlId="formSearch">
                        <Form.Control className="py-1 fs-5" style={{ borderColor: '#BCBCBC', borderWidth: '3px', backgroundColor: '#555555', color: 'rgb(210,210,210,0.25)' }} type="search" placeholder="Search" />
                    </Form.Group>

                    <Stack direction="horizontal" className="btn me-3" onClick={() => navigate("/AddVideo")}>
                        <div className="d-flex flex-column justify-content-center me-3">
                            <Image src={AddVideoIcon} />
                        </div>
                        <Card.Text className="text-white">Add Video</Card.Text>
                    </Stack>

                    <div ref={ref} >
                        <Image src={ProfileIcon} className="btn p-0" onClick={handleClick} />

                        <Overlay show={show} target={target} placement="bottom-end" container={ref}>
                            <Popover id="popover-contained" style={{backgroundColor:'#141414'}}>
                                <Popover.Body className="px-4">

                                    <Stack direction="horizontal" gap={3} className="mb-4 btn p-0" onClick={() => navigate("/MyChannelPage")}>
                                        <div className="d-flex flex-column justify-content-center">
                                            <Image src={MyChannelLogo} />
                                        </div>
                                        <Card.Text className="text-white">My Channel</Card.Text>
                                    </Stack>

                                    <Stack direction="horizontal" gap={3} className="btn p-0" onClick={() => navigate("/SignInPage")}>
                                        <div className="d-flex flex-column justify-content-center">
                                            <Image src={LogoutIcon} />
                                        </div>
                                        <Card.Text className="text-white">Logout</Card.Text>
                                    </Stack>

                                </Popover.Body>
                            </Popover>
                        </Overlay>
                    </div>
                </Stack>
            </Container>
        </>
    )
}

export default TopNavbar