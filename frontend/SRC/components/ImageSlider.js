import React from 'react'
import './ImageSlider.css'
import { Carousel } from 'react-bootstrap'

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://www.reutlingen-university.de/fileadmin/_processed_/b/8/csm_Buecherregal_Katalog_1cf5c6077e.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>BOOKS OPEN THE DOORWAY TO YOUR IMAGINATION</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/premium-photo/happy-woman-library-reading-book-knowledge-learning-literature-book-store-female-person-student-with-smile-books-sitting-floor-by-bookshelf-study-research-education_590464-182426.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Harini loves books.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://miro.medium.com/v2/resize:fit:1400/0*cqPWt_uqeZgPWRby"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>ROAL DAHL, RUSKIN BOND, AGATHA CHRISTIE, JESUIT PHAROAH.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
