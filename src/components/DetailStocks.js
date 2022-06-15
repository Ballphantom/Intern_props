import React from 'react'
import { Button , Row, Col, Container, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const DetailStocks =(props)=> {
    return (
        <div className="pages">
            <div className="Detail-container">
                {/* 
                <div className="text-detail">
                    <h1>Large Condo</h1>
                    <p>lorem idn urp dopad pawi dpaid adf gfeadg h ksdkf fksjdl df ju j lsjdfi ljf jiahfifa </p>
                    <p>lorem idn urp dopad pawi dpaid adf gfeadg h ksdkf fksjdl df ju j lsjdfi ljf jiahfifa </p>
                    <p>lorem idn urp dopad pawi dpaid adf gfeadg h ksdkf fksjdl df ju j lsjdfi ljf jiahfifa </p>
                    <h2>Total price : 100$</h2>
                </div>
                <div>
                    <Button onClick={this} variant="primary">PAY</Button>                          
                </div>
         */}
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Img variant="top" src="https://lzd-img-global.slatic.net/live/th/p/oem-cat-condo-dogga-lite-brown-7324-9350101-1.jpg_720x720q80.jpg_.webp" />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <h1>{props.name}</h1>
                                <Card.Subtitle className="mb-2 text-muted">for cats</Card.Subtitle>
                                <br/>
                                <Card.Text className="text-left">
                                    cat meow neko neko define you oh defined you i saw you dancing in a crowned room
                                you look so happy when i'm not with you a single tears droping on your eyes

                                </Card.Text>
                                <br/>
                                <span>8 DEGREE TITLED DESIGN FOOD BOWL
                                $16.99
                                Pay in 4 interest-free installments for orders over $50 with credit cards 
                                </span>
                                
                                <hr/>
                                <h1>Price: {props.price}$</h1>
                                <br/>
                                <Card.Link href="#">ADD TO CART</Card.Link>
                                <Card.Link href="#">BUY NOW</Card.Link>
                            </Card.Body>
                        </Card>                    
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
    )
}

export default DetailStocks