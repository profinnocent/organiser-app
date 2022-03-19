import "./Services.css";
import heropix1 from "../assets/burger18.jpg";
import heropix2 from "../assets/burger19.jpg";
import heropix3 from "../assets/burger20.jpg";


const Services = () => {
  return (
    <div className="services">
      <div className="hero">
        <div className="pix">
        <img src={heropix1} alt="" />
        <img src={heropix2} alt="" />
        <img src={heropix3} alt="" />

        </div>
        {/* <div className="herowords"> */}
          <h1>OUR SERVICES</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <button>SHOP</button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Services;
