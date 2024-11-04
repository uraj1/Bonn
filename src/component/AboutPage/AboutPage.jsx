import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './AboutPage.css';

function AboutPage() {
  return (
    <Container className="main-content" style={{ marginTop: '80px' }}>
      {/* About Section */}
      <Row className="text-center my-5">
        <Col>
          <h1>About Bonn</h1>
          <p className="about-description">
            Established with a passion for quality and innovation, Bonn is a leading name in the bakery and confectionery industry. We are dedicated to crafting delicious, nutritious, and delightful products that bring joy to our customers worldwide. Our commitment to excellence has made Bonn a household name, known for our premium-quality bread, buns, cakes, cookies, and baked goods.
          </p>
        </Col>
      </Row>

      {/* Product Variety Section */}
      <Row className="my-5 text-center">
        <Col>
          <h2>Our Product Range</h2>
          <p className="section-description">We offer a variety of products crafted with premium ingredients to ensure the best taste and quality.</p>
        </Col>
      </Row>
      
      <Row className="g-4">
        {[
          {
            title: "Bread & Buns",
            text: "From classic white and whole grain to specialty buns, Bonn’s breads are crafted to perfection for every meal and occasion.",
            img: "https://www.jiomart.com/images/product/original/490006437/bonn-brown-bread-400g-product-images-o490006437-p490006437-0-202407171835.jpg?im=Resize=(420,420)"
          },
          {
            title: "Cookies & Biscuits",
            text: "Enjoy a delicious variety of cookies and biscuits in flavors like chocolate, butter, and millet—a tasty yet healthy snack choice.",
            img: "https://3.imimg.com/data3/MR/SI/MY-139721/butter-bonn-500x500.jpg"
          },
          {
            title: "Cakes & Pastries",
            text: "Indulge in our selection of cakes and pastries, crafted with premium ingredients, perfect for celebrating special moments.",
            img: "https://m.media-amazon.com/images/I/71T-mMZBU8L.jpg"
          }
        ].map((product, index) => (
          <Col md={4} key={index}>
            <Card className="h-100">
              <Card.Img variant="top" src={product.img} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Supply Chain Solutions Section */}
      <Row className="my-5 text-center">
        <Col>
          <h2>Innovative Supply Chain Solutions</h2>
          <p className="section-description">
            As a forward-thinking company, Bonn leverages Artificial Intelligence (AI) to enhance our supply chain operations, ensuring efficient product delivery and reduced environmental impact.
          </p>
        </Col>
      </Row>

      <Row className="g-4">
        {[
          {
            title: "Demand Forecasting with AI",
            text: "Using AI-powered demand forecasting, we predict product demand accurately, minimizing wastage and ensuring availability. This predictive approach maintains optimal stock levels and reduces overproduction.",
            img: "https://www.zionex.com/wp-content/uploads/2023/01/deeplearning-scaled.jpg"
          },
          {
            title: "Real-Time Inventory Tracking",
            text: "AI in real-time inventory tracking improves visibility into stock levels, enabling timely restocking and efficient logistics. This predictive capability helps businesses minimize stockouts and overstock, resulting in cost savings and enhanced customer satisfaction.",
            img: "https://www.clipartmax.com/png/middle/69-697978_inventory-management-retail-inventory-management-system.png"
          },
          {
            title: "Route Optimization",
            text: "With AI-driven route optimization, we minimize transportation costs and carbon emissions, calculating efficient routes for cost-effective distribution with a reduced environmental footprint.",
            img: "https://nuvizz.com/wp-content/uploads/2023/05/best-route.jpg"
          },
          {
            title: "Quality Control with Machine Learning",
            text: "Machine learning models in our production line monitor quality in real-time, ensuring each product meets Bonn’s high standards and addressing quality issues proactively.",
            img: "https://www.gmp-compliance.org/files/eca/userImages/header.img/ECA-AI-GxP-IT-Basics.jpg"
          }
        ].map((solution, index) => (
          <Col md={6} key={index}>
            <Card className="h-100">
              <Card.Body className="d-flex align-items-start">
                <Image
                  src={solution.img}
                  roundedCircle
                  width={60}
                  height={60}
                  className="me-3"
                  style={{ objectFit: 'cover' }}
                  alt={`${solution.title} Icon`}
                />
                <div>
                  <Card.Title>{solution.title}</Card.Title>
                  <Card.Text>{solution.text}</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AboutPage;
