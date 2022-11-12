import React from 'react';
import Product from "../Product/Product"

const ProductList= ({products}) =>{
  console.log(products)
  return (
    <div>
      {products.map((item, index) => {
        <Product value = {item} key = {index} />
      })}
    </div>
  )
}

export default ProductList