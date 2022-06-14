import React from 'react'
import Stocks from './Stocks'
import { Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Item() {
    const data_item = [
        { name : "Condo", price: "200" },
        { name : "Big Condo", price: "300" },
        { name : "Small Condo", price: "200" }
    ]
    return (
        <div>
            <Row md={4}>
                {
                    // eslint-disable-next-line array-callback-return
                    data_item.map((item,i)=>{
                    return <Stocks key={i} name={item.name} price={item.price}/>  
                })
                }
            </Row>
        </div>
    )
}

export default Item