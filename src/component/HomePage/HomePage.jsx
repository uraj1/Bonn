import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './HomePage.css'; 
import Categories from '../New/bonn';

function HomePage() {
  return (

    <>
    <Container className="main-content">
      <Row className="my-5 text-center">
        <Col>
          <h1>Supply Chain Management and Solutions</h1>
          <h3><i>Bonn Group :- CaseStudy</i></h3>
        </Col>
      </Row>

      {/* Carousel Section */}
      <Row className="my-5">
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="https://media.assettype.com/foodtechbiz%2F2023-05%2Fcffe34d5-7da7-4f8c-8a74-3607efa7d8f5%2FPR_BANNER_BONN_MILLETS.jpeg?w=1024&auto=format%2Ccompress&fit=max"
                alt="First Slide"
              />
              {/* <Carousel.Caption>
                <h3>First Slide Label</h3>
                <p>Description of the first slide.</p>
              </Carousel.Caption> */}

            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="https://i.pinimg.com/originals/b8/34/50/b8345079a5b5b0c19653d52fd3fd098d.png"
                alt="Second slide"
              />
              {/* <Carousel.Caption>
                <h3>Second Slide Label</h3>
                <p>Description of the second slide.</p>
              </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2022-10/Bonn%20New%20products%20(1).jpg"
                alt="Third slide"
              />
              {/* <Carousel.Caption>
                <h3>Third Slide Label</h3>
                <p>Description of the third slide.</p>
              </Carousel.Caption> */}

            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col>
        <Categories/>
        </Col>
      </Row>
      {/* Video Section */}
      <Row className="my-5 text-center">
        <Col>
          <h2>Involvement of AI</h2>
          <p>World’s most advanced robotic warehouse (AI automation)</p>
          <ReactPlayer 
            url="https://youtu.be/U2AGLeJBFNg?si=YK3W6HuNGilLxFEu" 
            width="100%" 
            height="300%"
            controls
          />
        </Col>
      </Row>
    </Container>

    

    </>
  );
}

export default HomePage;
