import ProductCard from "./ProductCard";
import "./Products.css";

import burger11 from "../assets/burger11.jpg";
import burger12 from "../assets/burger12.jpg";
import burger13 from "../assets/burger13.jpg";
import burger14 from "../assets/burger14.jpg";
import burger17 from "../assets/burger17.jpg";
import burger16 from "../assets/burger16.jpg";

const Products = () => {
  const burgers = [
    {
      src: burger11,
      productname: "Jumbo Hanburger",
      description: "with peppered fish and chicken mashup",
      price: 2500,
    },
    {
      src: burger12,
      productname: "Maxi Hanburger",
      description: "with peppered chicken only",
      price: 2000,
    },
    {
      src: burger13,
      productname: "Mini Hanburger",
      description: "with chips, chicken & onion",
      price: 1500,
    },
    {
      src: burger14,
      productname: "Burger & Chips", 
      description: "with fried chicken & chips",
      price: 3000,
    },
    {
      src: burger17,
      productname: "King Burger",
      description: "with meat steak for two",
      price: 3500,
    },
    {
      src: burger16,
      productname: "Grand Burger",
      description: "with assorted dressing for the family",
      price: 4500,
    },
  ];

  return (
    <div className="products">
      <h1>PRODUCTS</h1>
      <p>See our range of quality products</p>
      <div className="showroom">

       { burgers.map((burger) => 
          <ProductCard 
          key={Math.floor(Math.random()*100000)}
          src={burger.src}
          productname={burger.productname} 
          description={burger.description}
          price={burger.price}
          />
  )
}
        
      </div>
    </div>
  );
};

export default Products;
