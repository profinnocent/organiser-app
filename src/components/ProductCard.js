import "./ProductCard.css";



const ProductCard = ({src, productname, description, price}) => {
  return (
    <div className="productcard">
      <div>
      <img src={src} alt="Product Pix" />
      </div>
      <div>
      <h4>{productname}</h4>
      <p>{description} </p>
      <h2>{price}</h2>
      <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;


