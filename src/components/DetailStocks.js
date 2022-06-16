import React from 'react'
import { Button , Row, Col, Container, Card} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';

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
                            <Card.Img src="https://lzd-img-global.slatic.net/live/th/p/oem-cat-condo-dogga-lite-brown-7324-9350101-1.jpg_720x720q80.jpg_.webp" />
                            <Card.Body>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '30rem' }}>
                            <Card.Body>
                                <h1>{props.name}</h1>
                                <hr/>
                                <Card.Text className="text-left">
                                        <p>- เสาทุกต้นลับเล็บได้หมด</p>
                                        <p>- มีกล่องและเปลให้เจ้าเหมียวสามารถซุกตัวเพื่อพักผ่อนได้</p>
                                        <p>- ประกอบง่ายพร้อมคู่มือการติดตั้ง</p>
                                        <p>- เช็ดทำความสะอาดด้วยผ้าเปียก (Pet Wipe) 1-2 ครั้ง/สัปดาห์</p>
                                        <p>- เหมาะสำหรับผู้เลี้ยงแมว 1-3 ตัว</p> 
                                </Card.Text>
                                <hr/>
                                <h1>Price: {props.price}$</h1>
                                <hr/>
                                <br/>
                                <Button onClick={()=>{
                                    Swal.fire({
                                        title: 'Add to cart',
                                        text: 'You one to your cart',
                                        icon: 'success',
                                        button: 'Continue'
                                    })
                                }} >ADD TO CART</Button><span> | </span>
                                <Button onClick={()=>{
                                    Swal.fire({
                                        title: 'Payment',
                                        text: 'Paypal : 0912381312',
                                        icon: 'info',
                                        button: 'Success'
                                    })
                                }} >BUY NOW</Button>
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