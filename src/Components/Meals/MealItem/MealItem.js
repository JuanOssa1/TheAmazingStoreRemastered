import React from 'react';
import { useContext } from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.scss';
import CartContext from '../../../store/cart-context';

export default function MealItem({ id, name, description, price }) {
  const cartCtx = useContext(CartContext);
  const formattedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm addToCartHandler={addToCartHandler} id={id} />
      </div>
    </li>
  );
}
