import React from 'react'

const  Product = ({value, setCart}) => {

  const handleAddCart = (product)=> {
    let newState
    setCart ((prevState) => {
      const exsit = prevState.some((item) => item.id === product.id);
      if (exsit) {
        newState = prevState.map((item) => {
          if (item.id === product.id) {
            return {...item, quantity: item.quantity + 1 }
          } else {
            return item;
          }
        } )
      } else {
        newState = [... prevState, {...product, quantity: 1}]
      }
      return newState
    });
  }; 

  return (
    <div>
      <img src= {value.img}></img>
      <h2>{value.name}</h2>
      <p>Giá: {value.price}</p>
      <div>
        <button onClick = {() => console.log("Show", value)} >Xem chi tiết</button>
        <button onClick={()=> handleAddCart(value)}>Thêm vào giỏ hàng</button>
      </div>
    </div>
  )
}

export default Product