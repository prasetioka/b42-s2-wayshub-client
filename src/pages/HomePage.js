import React from "react"
import { Container, Row, Col, Stack } from "react-bootstrap"

import SideNavbar from "../components/SideNavbar"
import VideoList from "../components/VideoList"
import TopNavbar from "../components/TopNavbar"

function HomePage() {

    return (
        <>
            <Container className="p-0 m-0" style={{ maxWidth: '100%', height: '100vh' }}>
                <Row lg={2} className="p-0 m-0">
                    <Col lg={3} className="p-0 m-0">
                        <SideNavbar />
                    </Col>
                    <Col lg={9} className="p-0 m-0">
                        <TopNavbar />
                        <VideoList />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePage