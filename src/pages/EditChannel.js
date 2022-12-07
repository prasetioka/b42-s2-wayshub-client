import React from "react"
import { Container, Row, Col, Stack } from "react-bootstrap"

import SideNavbar from "../components/SideNavbar"
import TopNavbar from "../components/TopNavbar"
import FormEditChannel from "../components/FormEditChannel"

function EditChannel() {
    return(
        <>
            <Container className="p-0 m-0" style={{ maxWidth: '100%', height: '100vh' }}>
                <Row lg={2} className="p-0 m-0">
                    <Col lg={3} className="p-0 m-0">
                        <SideNavbar />
                    </Col>
                    <Col lg={9} className="p-0 m-0">
                        <TopNavbar />
                        <FormEditChannel />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default EditChannel