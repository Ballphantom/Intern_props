import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu() {
    return (
        <div>
            <Carousel className='Carousel' variant="primary" style={{marginTop:'3rem', marginLeft:'5rem', marginRight:'5rem' }}>
            <Carousel.Item>
                <img 
                className="d-block w-100"
                src="https://media.wired.com/photos/6242576ba288ab4bb7de35ed/191:100/w_2580,c_limit/PetFusion-Cat-Scratcher-Lounge-Gear.jpg"
                alt="First slide"
                style={{width:'600px', height:'400px'}}
                />
                <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://media.wired.com/photos/6242576ba288ab4bb7de35ed/191:100/w_2580,c_limit/PetFusion-Cat-Scratcher-Lounge-Gear.jpg"
                alt="Second slide"
                style={{width:'600px', height:'400px'}}
                />
                <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://media.wired.com/photos/6242576ba288ab4bb7de35ed/191:100/w_2580,c_limit/PetFusion-Cat-Scratcher-Lounge-Gear.jpg"
                alt="Third slide"
                style={{width:'600px', height:'400px'}}
                />
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            <div>

            </div>


        </div>
    )
}

export default Menu