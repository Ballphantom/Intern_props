
import React from 'react'
import { Card, Button, Col} from 'react-bootstrap'


const Stocks =(props)=> {

    return (
        <div className="Stocks">
        {/* {data_item.map( (sell,i)=>{
            console.log(sell.name);
        } )} */}

            <div>
                <a href="/Detail">
                    <Col key={props.i}>
                        <Card className="stocks-item" style={{ width: '18rem' ,height:'28rem'}}>
                            <Card.Img variant="top" style={{marginTop:'2rem'}} src="https://lzd-img-global.slatic.net/live/th/p/oem-cat-condo-dogga-lite-brown-7324-9350101-1.jpg_720x720q80.jpg_.webp" />
                            <Card.Body>
                                <Card.Title>{props.name}</Card.Title>
                                <Card.Text>
                                </Card.Text>
                                <Button variant="primary">{props.price}$</Button>
                            </Card.Body>
                        </Card>                    
                    </Col>                    
                </a>

            </div>
        </div>
    )
}

export default Stocks