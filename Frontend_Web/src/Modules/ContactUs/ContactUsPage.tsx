import React from 'react'
import '../ContactUs/contactUs.scss'
import { useLocation, useNavigate } from 'react-router-dom';
import "rc-slider/assets/index.css";

const ContactUsPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);


  const Breadcrumb = ({ category }) => {
    const navigate = useNavigate();

    return (
      <p>
        <span onClick={() => navigate("/")} >
          Home
        </span>
        <div>{">"}</div>
        <span onClick={() => navigate(`/${category}`)} >
          Contact Us
        </span>
      </p>
    );
  };


  return (
    <>
      <section id='ContactUsPage'>
        <div className="mainContainer">
          <div className="headingContainer" >
            <h5>{'Contact Us'}</h5>
            <Breadcrumb category={'contact'} />
            <img src={"https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/shop-hero-image.webp"} alt="" />
          </div>

          <div className="heroSection">
            <div className="leftContainer">
              <div className="displayContainer">
                <h3>Get in Touch</h3>
                <p>We are here to assist you with any inquiries or support you may need. Feel free to reach out to us through the contact form below.</p>
              </div>
              <form>
                <div className="inputContainer">
                  <label htmlFor="name">Your Name <span>*</span></label>
                  <input type="text" placeholder='Enter your name' id='name' required />
                </div>
                <div className="inputContainer">
                  <label htmlFor="email">Your Email <span>*</span></label>
                  <input type="email" placeholder='Enter your email' id='email' required />
                </div>
                <div className="inputContainer">
                  <label htmlFor="subject">Subject <span>*</span></label>
                  <input type="text" placeholder='Enter subject' id='subject' required />
                </div>
                <div className="inputContainer">
                  <label htmlFor="message">Message <span>*</span></label>
                  <textarea placeholder='Enter Message' id='message' required></textarea>
                </div>
                <button type="submit" className='submitBtn'>Send Message</button>
                <p className='note'>* Required fields</p>


              </form>
            </div>
            <div className="rightContainer">
              <h4>Contact Information</h4>
              <p>If you have any questions or need assistance, feel free to reach out to us through the following contact details:</p>
              <div className="mapContainer">
                {/* <ContactMap /> */}
              </div>
              <div className="detailsContainer">
                <div className="detailItem">
                  <p>Address</p>
                  <span>123 Furniture Street, City, Country</span>
                </div>
                <div className="detailItem">
                  <p>Phone</p>
                  <span>+1 234 567 890</span>
                </div>
                <div className="detailItem">
                  <p>Email</p>
                  <span>demo@gmail.com</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactUsPage