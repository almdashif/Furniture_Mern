import React from 'react';
import { useNavigate } from 'react-router-dom';
import './aboutUs.scss';

const AboutUsPage = () => {
  const navigate = useNavigate();

  const Breadcrumb = ({ category }: { category: string }) => {
    const navigate = useNavigate();

    return (
      <p>
        <span onClick={() => navigate("/")}>
          Home
        </span>
        <div>{">"}</div>
        <span onClick={() => navigate(`/${category}`)}>
          About Us
        </span>
      </p>
    );
  };

  return (
    <>
      <section id='AboutUsPage'>
        <div className="mainContainer">
          <div className="headingContainer">
            <h5>About Us</h5>
            <Breadcrumb category={'about'} />
            <img src={"https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/about-us-hero-image.webp"} alt="About Us" />
          </div>

          <div className="heroSection">
            <div className="leftContainer">
              <div className="displayContainer">
                <h3>Our Story</h3>
                <p>Founded in 2010, our furniture store has been dedicated to bringing beautiful, high-quality furniture to homes across the country. We believe that every home deserves furniture that combines style, comfort, and durability.</p>
                <p>Our team of expert craftsmen and designers work tirelessly to create pieces that not only look stunning but also stand the test of time. We source the finest materials from around the world to ensure that every piece meets our high standards.</p>
              </div>
            </div>
            <div className="rightContainer">
              <img src="https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/about-us-story-image.webp" alt="Our Story" />
            </div>
          </div>

          <div className="missionSection">
            <div className="missionContainer">
              <h3>Our Mission</h3>
              <p>To provide exceptional furniture that transforms houses into homes, while maintaining the highest standards of quality and customer service.</p>
            </div>
            <div className="visionContainer">
              <h3>Our Vision</h3>
              <p>To become the leading furniture retailer known for innovative design, superior quality, and outstanding customer experience.</p>
            </div>
          </div>

          <div className="valuesSection">
            <h3>Our Values</h3>
            <div className="valuesContainer">
              <div className="valueItem">
                <h4>Quality</h4>
                <p>We never compromise on quality. Every piece of furniture is crafted with attention to detail and built to last.</p>
              </div>
              <div className="valueItem">
                <h4>Innovation</h4>
                <p>We continuously explore new designs and materials to bring you the latest trends in furniture.</p>
              </div>
              <div className="valueItem">
                <h4>Sustainability</h4>
                <p>We are committed to environmentally responsible practices and sustainable sourcing of materials.</p>
              </div>
              <div className="valueItem">
                <h4>Customer First</h4>
                <p>Your satisfaction is our priority. We go above and beyond to ensure you love your furniture.</p>
              </div>
            </div>
          </div>

          <div className="statsSection">
            <div className="statItem">
              <h2>14+</h2>
              <p>Years of Experience</p>
            </div>
            <div className="statItem">
              <h2>10K+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="statItem">
              <h2>500+</h2>
              <p>Products Available</p>
            </div>
            <div className="statItem">
              <h2>50+</h2>
              <p>Expert Craftsmen</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;