import { useCart } from "../../../features/Components/Cart";
import CartCSS from "../Shop.module.scss";

interface Props {
  setHeaderName: React.Dispatch<React.SetStateAction<string>>;
}

const Cart = ({ setHeaderName }: Props) => {
  const { displayItems, toPay } = useCart({ setHeaderName });

  return (
    <article>
      {displayItems.length > 0 && (
        <div className={CartCSS.clothingContainer}>
          <div className={CartCSS.checkoutContainer}>
            <h2>Total: ${toPay}</h2>
          </div>
          <div className={CartCSS.itemContainer}>{displayItems}</div>
        </div>
      )}
    </article>
  );
};

export default Cart;
