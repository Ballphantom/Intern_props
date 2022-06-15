import React from 'react'
import { Navbar, Container, Nav} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {  } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'

function Navb() {
    let warp = useNavigate()
    return (
    <div className='text-center'>
        <div>
            <Navbar>
                <Container>
                <Navbar.Brand className='Title' href="/Home">MyPetS</Navbar.Brand>
                <Nav>
                    <Nav.Link onClick={()=>{
                        warp('/Home', {replace: true})
                    }}>Home</Nav.Link>
                    <Nav.Link onClick={()=>{
                        warp('/Market', {replace: true})
                    }}>Market</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
    </div>
    )
}

export default Navb