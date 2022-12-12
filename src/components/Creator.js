import React, { useContext } from "react";
import { Container, Image, Stack, Card, Button, Row, Col } from "react-bootstrap"
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../config/api";
import { UserContext } from "../context/userContext"

// import ChannelHeader from "../img/ChannelHeader.png"
// import CreatorPhoto from "../img/User2.png"

// import Thumbnail1 from "../img/Thumbnail1.png"
// import Thumbnail2 from "../img/Thumbnail2.png"
// import Thumbnail3 from "../img/Thumbnail3.png"
// import Thumbnail4 from "../img/Thumbnail4.png"

import ViewsIcon from "../img/ViewsIcon.svg"
import DateIcon from "../img/DateIcon.svg"

function Creator() {

    const { id } = useParams();

    const navigate = useNavigate()

    const [state] = useContext(UserContext)

    let { data: channel } = useQuery('channelCache', async () => {
        const response = await API.get('/channel/' + id);
        return response.data.data;
    });

    let { data: myvideos } = useQuery('myvideosCache', async () => {
        const response = await API.get('/FindMyVideos');
        return response.data.data;
    });

    return (
        <>
            <div>
                <Image src={channel?.cover} style={{ height: '18vh', width: '100%' }} />
            </div>
            <Container className="px-5 m-0 mt-4">
                <Stack direction="horizontal" className="mb-4">
                    <Image src={channel?.photo} className="me-4" style={{ width: '70px' }} />
                    <Stack direction="vertical">
                        <Card.Text className="text-white fs-3 mb-0">{channel?.channelName}</Card.Text>
                        <Card.Text style={{ color: '#F0F0F0' }}>15K Subscriber</Card.Text>
                    </Stack>
                    {state?.user.id == id ? (
                        <></>
                    ) : (
                        <Button className="py-2" style={{ backgroundColor: '#FF7A00', border: 'none', width: '15%' }}>
                            Subscribe
                        </Button>
                    )}

                </Stack>
                <hr style={{ borderTop: '3px solid #C2C2C2' }} />
                <Row lg={4} >
                    {myvideos?.length !== 0 ? (
                        <Col className="mb-1">
                            {myvideos?.map((item) => (
                                <Stack direction="vertical">
                                    <Image src={item?.thumbnail} className="mb-2 btn p-0" onClick={() => navigate('/DetailVideoPage/' + item?.id)} />
                                    <Card.Text className="text-white mb-3" style={{ fontSize: '15px' }}>{item?.title}</Card.Text>
                                    <Card.Text className="fs-6 mb-2" style={{ color: '#555555' }}>{item?.channel.channelName}</Card.Text>
                                    <Row>
                                        <Col md={4}>
                                            <Stack direction="horizontal">
                                                <div className="d-flex flex-column justify-content-center me-2">
                                                    <Image src={ViewsIcon} />
                                                </div>
                                                <Card.Text className="fs-6" style={{ color: '#555555' }}>284K</Card.Text>
                                            </Stack>
                                        </Col>
                                        <Col>
                                            <Stack direction="horizontal">
                                                <div className="d-flex flex-column justify-content-center me-2">
                                                    <Image src={DateIcon} />
                                                </div>
                                                <Card.Text className="fs-6" style={{ color: '#555555' }}>06 Sep 2020</Card.Text>
                                            </Stack>
                                        </Col>
                                    </Row>
                                </Stack>
                            ))}
                        </Col>
                    ) : (<></>)}
                </Row>
            </Container>
        </>
    )
}

export default Creator