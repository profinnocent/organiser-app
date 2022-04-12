import ProductCard from "./ProductCard";
import "./Products.css";



const Products = ({burgers}) => {
  

  return (
    <div className="products">
      <h1>PRODUCTS</h1>
      <p>See our range of quality products</p>
      <div className="showroom">

       { burgers.map((burger) => 
          <ProductCard 
          key={burger.id}
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
