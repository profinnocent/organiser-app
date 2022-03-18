import ProductCard from './ProductCard'
import './Products.css'

import jburger from '../assets/burger1.png'
import fruits from '../assets/apple.jpg'
import orangej from '../assets/orange.png'
import pearmesh from '../assets/pear.jpg'

const Products = () => {
  return (
    <div className='products'>
      <h1>PRODUCTS</h1>
      <p>See our range of quality products</p>
      <div className="showroom">
          <ProductCard 
          src={jburger}
          productname={"Jumbo Hanburger"} 
          description={"with peppered fish and chicken mashup"}
          price={"N2,500"}
          />
          <ProductCard 
          src={jburger}
          productname={"Maxi Hanburger"} 
          description={"with peppered chicken only"}
          price={"N2,000"}
          />
          <ProductCard 
          src={jburger}
          productname={"Mini Hanburger"} 
          description={"with peppered fish shrimps"}
          price={"N1,500"}
          />
          <ProductCard           
          src={fruits}
           productname={"Fruit Mix"} 
          description={"with cold chapman base"}
          price={"N2,500"}
          />
          <ProductCard 
          src={orangej}
          productname={"Orange Juice"} 
          description={"with cold lattea tea"}
          price={"N1,500"}
          />
          <ProductCard
          src={pearmesh}
          productname={"Pear Grandeur"} 
          description={"with pinacolada"}
          price={"N2,000"}
          />
          
      </div>
    </div>
  )
}

export default Products
