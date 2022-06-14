import React from 'react'

import Stocks from '../components/Stocks'
import { Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Market() {
    return (
        <div>
            <Row md={5}>
                <Stocks name="Small Condo" price="50"/>
                <Stocks name="Normal Condo" price="100"/>
                <Stocks name="Big Condo" price="150"/>                
            </Row>

        </div> 
    )
}

export default Market