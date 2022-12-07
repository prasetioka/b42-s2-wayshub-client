import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import SideNavbar from "../components/SideNavbar"
import TopNavbar from "../components/TopNavbar"
import SideVideoList from "../components/SideVideoList"
import DetailVideo from "../components/DetailVideo"

function DetailVideoPage() {

    return (
        <>
            <Container className="p-0 m-0" style={{ maxWidth: '100%', height: '100vh' }}>
                <Row lg={2} className="p-0 m-0">
                    <Col lg={3} className="m-0 p-0">
                        <SideNavbar />
                    </Col>
                    <Col lg={9} className="m-0 p-0">
                        <TopNavbar />
                        <Container direction="vertical" className="p-0 m-0">
                            <Row lg={2} className="m-0 p-0">
                                <Col lg={8} className="m-0 p-0">
                                    <DetailVideo />
                                </Col>
                                <Col lg={4} className="m-0 p-0">
                                    <SideVideoList />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default DetailVideoPage