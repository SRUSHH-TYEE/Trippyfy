// This is the carousel under Availability status

// 23 Rides Shared🙂
// Connected with 45 colleagues😊
// Saved 23 liters of fuel😀

import React from 'react';
import { Carousel, Card, Button } from "react-bootstrap";

function CarouslUnderAvail() {

    return (
        <div className="container my-3" style={{ width: "80%" }}>

            <Carousel interval={3000}>
                <Carousel.Item style={{marginLeft:"21%",width:"60%"}}>
                    <Card className='mx-2' style={{backgroundColor:"#4c9a2a"}}>
                        <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
                            <Card.Title>
                                <h3>23</h3>
                            </Card.Title>
                            <Card.Text>
                                <h5>
                                Rides Shared 🙂
                                </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item style={{marginLeft:"21%",width:"60%"}}>
                <Card className='mx-2' style={{backgroundColor:"#2e6930"}}>
                        <Card.Body className='d-flex flex-column align-items-center justify-content-center' style={{wordWrap: "break-word"}}>
                            <Card.Title>
                                <h3>45</h3>
                            </Card.Title>
                            <Card.Text>
                                <h5>
                            Connected with 45 colleagues😊
                                </h5>
                             </Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item style={{marginLeft:"21%",width:"60%"}}>
                <Card className='mx-2' style={{backgroundColor:"#3d8c40"}}>
                        <Card.Body className='d-flex flex-column align-items-center justify-content-center'>
                            <Card.Title>
                                <h3>20</h3>
                            </Card.Title>
                            <Card.Text>
                                <h5>
                            liters of fuel saved😀
                                </h5>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouslUnderAvail