import Card from '../UI/Card';
import classes from './Cart.module.css';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

const Cart = (props)=> {
  const carttItems = useSelector(state => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {carttItems.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.name,
              quantity: item.quantity,
              total: item.totalPrice,
              price: item.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;