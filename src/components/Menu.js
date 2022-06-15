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
                src="https://www.diamondpet.com/wp-content/uploads/2016/09/20160927-PlayKitty_1200x630.jpg"
                alt="First slide"
                style={{width:'500px', height:'600px'}}
                />
                <Carousel.Caption>
                <h5>First slide</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://media.wired.com/photos/6242576ba288ab4bb7de35ed/191:100/w_2580,c_limit/PetFusion-Cat-Scratcher-Lounge-Gear.jpg"
                alt="Second slide"
                style={{width:'500px', height:'600px'}}
                />
                <Carousel.Caption>
                <h5>Second slide</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://furwingsandscalythings.com/wp-content/uploads/2021/06/Tabby-and-White-Cat-Ready-to-Play.jpg"
                alt="Third slide"
                style={{width:'500px', height:'600px'}}
                />
                <Carousel.Caption>
                <h5>Third slide</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Menu