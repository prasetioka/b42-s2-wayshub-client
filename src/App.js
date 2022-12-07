import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"

import SignUpPage from "./pages/SignUpPage"
import SignInPage from "./pages/SignInPage"

import SideNavbar from "./components/SideNavbar";
import TopNavbar from "./components/TopNavbar";

import VideoList from "./components/VideoList";
import FormAddVideo from "./components/FormAddVideo";
import Creator from "./components/Creator";
import MyChannel from "./components/MyChannel"
import FormEditChannel from "./components/FormEditChannel"
import VideoDetail from "./components/VideoDetail"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/SignUpPage' element={<SignUpPage />} />
          <Route exact path='/SignInPage' element={<SignInPage />} />
        </Routes>
      </Router>

      <Router>
        <Container className="p-0 m-0" style={{ maxWidth: '100%', height: '100vh' }}>
          <Row lg={2} className="p-0 m-0">

            <Col lg={3} className="p-0 m-0">
              <SideNavbar />
            </Col>

            <Col lg={9} className="p-0 m-0">
              <TopNavbar />
              <Routes>
                <Route exact path='/' element={<VideoList />} />
                <Route exact path='/AddVideo' element={<FormAddVideo />} />
                <Route exact path='/CreatorPage' element={<Creator />} />
                <Route exact path='/MyChannelPage' element={<MyChannel />} />
                <Route exact path='/EditChannel' element={<FormEditChannel />} />
                <Route exact path='/DetailVideoPage' element={<VideoDetail />} />
              </Routes>
            </Col>
          </Row>
        </Container>

      </Router>
    </>
  );
}

export default App;
