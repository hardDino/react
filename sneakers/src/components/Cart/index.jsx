import axios from 'axios';
import React from 'react';

import AppContext from '../../context';

import useCart from '../../hooks/useCart';
import Info from '../Info';
import styles from './Cart.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Cart({ opened, onClickDelete, items = [] }) {
  const { setCartOpened } = React.useContext(AppContext);
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('http://localhost:3001/orders', { items: cartItems });
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i += 1) {
        const item = cartItems[i];
        await axios.delete('http://localhost:3001/cart/' + item.id);
        await delay(1000);
      }
    } catch (error) {
      alert('Error');
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={`${styles.cart}`}>
        <div className="d-flex justify-between align-center mb-30">
          <h2>Cart</h2>
          <img
            src="/img/delete.svg"
            alt="Delete"
            className='deleteBtn cu-p'
            onClick={() => setCartOpened(false)}
          />
        </div>

        {items.length === 0 && (
          <Info
            title={isOrderComplete ? 'Заказ оформлен!' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={isOrderComplete ? '/img/order.png' : '/img/empty.png'}
            alt={isOrderComplete ? 'Order is complete' : 'Empty cart'}
          />
        )}
        <div className={styles.cartItems}>
          {items.map((item) => (
            <div
              key={item.id}
              className={`${styles.cartItem} d-flex justify-between align-center mb-20`}>
              <img width={70} height={70} src={item.imageUrl} alt="Sneakers" />
              <div className="content">
                <p>{item.title}</p>
                <b>{item.price} $</b>
              </div>
              <div>
                <img
                  src="/img/delete.svg"
                  alt="Delete"
                  className='deleteBtn cu-p'
                  onClick={() => onClickDelete(item)}
                />
              </div>
            </div>
          ))}
        </div>
        {items.length > 0 && (
          <div>
            <ul className={styles.cartTotal}>
              <li>
                <span>Summary:</span>
                <div></div>
                <b>{totalPrice} $</b>
              </li>
              <li>
                <span>Tax. 5%:</span>
                <div></div>
                <b>{Math.round((totalPrice * 5) / 100)} $</b>
              </li>
            </ul>
            <button disabled={isLoading} onClick={onClickOrder} className='orderBtn'>
              Make an order
            </button>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
}

export default Cart;
