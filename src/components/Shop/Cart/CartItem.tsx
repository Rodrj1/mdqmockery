import { CartItemProps } from "../../../types";
import { useCartItem } from "../../../features/Components/CartItem";
import CartItemCSS from "../Shop.module.scss";

interface Props {
  item: CartItemProps;
}

const CartItem = ({ item }: Props) => {
  const { itemRedirectsTo, navigate, deleteItem } = useCartItem({ item });

  return (
    <article className={CartItemCSS.item}>
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
    </article>
  );
};

export default CartItem;
