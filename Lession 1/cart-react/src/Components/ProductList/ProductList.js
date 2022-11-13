import React from 'react';
import Product from "../Product/Product"

const ProductList= ({products, setCart}) =>{
  console.log(products)
  return (
    <div>
      {products.map((item, index) => 
        <Product value = {item} key = {item.id} setCart = {setCart}/>
      )}
    </div>
  )
}

export default ProductList