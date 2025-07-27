import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './faq.scss';

const faqData = [
  { question: 'What is the return policy?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
  { question: 'How long does shipping take?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
  { question: 'Do you offer international shipping?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
  { question: 'Can I track my order?', answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.' },
  ];

const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);


  const Breadcrumb = ({ category }: { category: string }) => {
    const navigate = useNavigate();

    return (
      <p>
        <span onClick={() => navigate("/")} >
          Home
        </span>
        <div>{">"}</div>
        <span onClick={() => navigate(`/${category}`)} >
          FAQ
        </span>
      </p>
    );
  };


  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="FAQ">





      <div className="mainContainer">

        <div className="headingContainer" >
          <h5>{'Frequently Asked Questions'}</h5>
          <Breadcrumb category={'faq'} />
          <img src={"https://images.unsplash.com/photo-1666585958641-4f70887372a1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="" />
        </div>

        
        {/* <div className="titleContainer">
          <h1>Frequently Asked Questions</h1>
          <h6>Donec et odio pellentesque diam volutpat commodo amet consectetur adipiscing elit ut aliquam purus vitae et leo duis ut diam quam.</h6>
        </div> */}

        <div className="heroSection">

          <div className="leftContainer">
            <img src="https://startersites.io/blocksy/furniture/wp-content/uploads/2024/05/contact-us-faq-image.webp" alt="FAQ Visual" />
          </div>

          <div className="rightContainer">
            <div className="faqContainer">
              {faqData.map((item, index) => (
                <div className="faqItem" key={index}>
                  <div className="faqHeading" onClick={() => toggleFAQ(index)}>
                    <h3>{item.question}</h3>
                    <span>{activeIndex === index ? '-' : '+'}</span>
                  </div>
                  <div className={`faqContent ${activeIndex === index ? 'active' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FaqPage
