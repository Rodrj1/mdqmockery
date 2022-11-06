import { CartItemProps } from "../../../types";
import { useAppDispatch } from "../../../app/hooks";
import { removeFromCart } from "../../../features/ReduxStore/cart-slice";
import { restoreStock } from "../../../features/ReduxStore/stock-slice";
import CartItemCSS from "../Shop.module.scss";
import { useNavigate } from "react-router-dom";

interface Props {
  item: CartItemProps;
}

const CartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const itemRedirectsTo = `/item/${item.name}`;
  const navigate = useNavigate();

  const deleteItem = (id: string) => {
    dispatch(removeFromCart(id));
    dispatch(
      restoreStock({ name: item.name, price: item.price, amount: item.stock })
    );
  };
  return (
    <>
      <div className={CartItemCSS.preview}>
        <img src={item.image} onClick={() => navigate(itemRedirectsTo)} />
        <button
          className={CartItemCSS.cartButton}
          onClick={() => deleteItem(item.id)}
        >
          DELETE FROM CART
        </button>
      </div>

      <div className={CartItemCSS.description}>
        <h2>{item.name}</h2>
        {item.sizes && <p>Size: [{item.sizes}]</p>}
        <p>Amount: [{item.stock}]</p>
        <p>Total: ${item.price * item.stock}</p>
      </div>
    </>
  );
};

export default CartItem;
