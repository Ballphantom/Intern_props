import React from 'react'
import Menu from '../components/Menu'
import {} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Item  from '../components/Item'

function Home() {
    return (
        <div>
            <div className="first-meet">
                <h1 style={{textAlign: 'center',marginTop:'2rem'}}>Hey!</h1>
                <p style={{textAlign: 'center',marginTop:'1rem'}}>Let's makes your cat happy.</p>
            </div>

            <Menu/>
            <Item/>   
        </div>
    )
}

export default Home