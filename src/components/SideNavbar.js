import React from "react";
import { Container, Stack, Image, Card } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import WaysHubIcon from "../img/WaysHubIcon.png"
import HomeIcon from "../img/HomeIcon.svg"
import SubscriptionIcon from "../img/SubscriptionIcon.svg"

import UserIcon1 from "../img/UserIcon1.png"
import UserIcon2 from "../img/UserIcon2.png"
import UserIcon3 from "../img/UserIcon3.png"

function SideNavbar() {

    const navigate = useNavigate()

    return(
        <>  
            <Container className="p-5 m-0" style={{height:'100vh', width:'100%', backgroundColor:'#161616'}}>
                <Stack direction="vertical">
                    <Image src={WaysHubIcon} className="w-75 mb-4" />

                    <Stack direction="horizontal" className="mb-4 btn ps-0" onClick={() => navigate("/")}>
                        <div className="d-flex flex-column justify-content-center me-3">
                            <Image src={HomeIcon} />
                        </div>
                        <Card.Text className="text-white">Home</Card.Text>
                    </Stack>

                    <Stack direction="horizontal" className="mb-5 btn ps-0">
                        <div className="d-flex flex-column justify-content-center me-3">
                            <Image src={SubscriptionIcon} />
                        </div>
                        <Card.Text className="text-white">Subscription</Card.Text>
                    </Stack>

                    <Card.Text className="text-white fs-4">Channel</Card.Text>

                    <Stack direction="horizontal" className="mb-3 btn ps-0">
                        <div className="d-flex flex-column justify-content-center me-3">
                            <Image src={UserIcon1} />
                        </div>
                        <Card.Text className="text-white">Sample 1</Card.Text>
                    </Stack>

                    <Stack direction="horizontal" className="mb-3 btn ps-0">
                        <div className="d-flex flex-column justify-content-center me-3">
                            <Image src={UserIcon2} />
                        </div>
                        <Card.Text className="text-white">Sample 2</Card.Text>
                    </Stack>

                    <Stack direction="horizontal" className="mb-3 btn ps-0">
                        <div className="d-flex flex-column justify-content-center me-3">
                            <Image src={UserIcon3} />
                        </div>
                        <Card.Text className="text-white">Sample 3</Card.Text>
                    </Stack>

                    <Card.Text className="text-white fs-6 text-center">Show More</Card.Text>
                </Stack>
            </Container>
        </>
    )
}

export default SideNavbar