import "./ProductCard.css";

const ProductCard = ({ src, productname, description, price }) => {
  return (
    <div className="productcard">
      <div className="burgerpix">
        <img src={src} alt="Product Pix" />
      </div>
      <div className="burgerdetails">
        <h3>{productname}</h3>
        <p>{description} </p>
        <h2>{'N ' + price.toLocaleString()}</h2>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
