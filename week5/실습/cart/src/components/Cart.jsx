import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct1, addProduct2, deleteProduct } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddProduct1 = () => {
    const product1 = {
      id: Date.now(),
      name: "product 1",
      price: 10000,
    };
    dispatch(addProduct1(product1));
  };
  const handleAddProduct2 = () => {
    const product2 = {
      id: Date.now(),
      name: "product 2",
      price: 20000,
    };
    dispatch(addProduct2(product2));
  };
  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((product, i) => {
          return (
            <>
              <li>
                {product.name} - {product.price}원
                <button onClick={() => handleDelete(product.id)}>delete</button>
              </li>
            </>
          );
        })}
      </ul>
      <button onClick={handleAddProduct1}>add product1</button>
      <button onClick={handleAddProduct2}>add product2</button>
    </div>
  );
};

export default Cart;
