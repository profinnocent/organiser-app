import "./Services.css";
import heropix1 from "../assets/services2comp512.jpg";
import heropix2 from "../assets/burger18comp512.jpg";
import heropix3 from "../assets/services1comp512.jpg";

const Services = () => {
 
  return (
    <div className="services">
      <div className="hero">
        <h1>OUR SERVICES</h1>
        <p>
          We offer a wide range of indoor and outdoor services all for your
          pleasure and convinience.
        </p>

        <div className="herocards">
          <div className="herocard"> 
          <img src={heropix1} alt="hero1" /> 
          <h3>Home Delivery</h3>
          <p>We deliver right to your doorsteps anywhere anytime and at very affordable rates.</p>
          </div>

          <div className="herocard"> 
          <img src={heropix2} alt="hero2" /> 
          <h3>Special Occassion Catering</h3>
          <p>We will go extra miles to make those special moments memorable.</p>
          </div>

          <div className="herocard"> 
          <img src={heropix3} alt="By Rachel Claire from Pexels" /> 
          <h3>Outdoor Catering Services</h3>
          <p>Book us to cover your catering needs so you can focus on enjoying your vacations.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
