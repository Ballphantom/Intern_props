import React from 'react'
import Menu from '../components/Menu'
import {} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Item  from '../components/Item'
import ReactTypingEffect from 'react-typing-effect'

function Home() {
    return (
        <div>
            <div className="first-meet">
                <h1 style={{textAlign: 'center',marginTop:'2rem'}}>Hey!</h1>
                <p style={{textAlign: 'center',marginTop:'1rem'}}><ReactTypingEffect text={['Lets makes your cat happy.']} speed={100} eraseDelay={200} className="typingeffect" /></p>
                
            </div>

            <Menu/>
            <Item/>   
        </div>
    )
}

export default Home