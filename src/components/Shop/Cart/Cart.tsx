import { useAppSelector } from "../../../app/hooks";
import CartItem from "./CartItem";
import CartCSS from "../Shop.module.scss";
import { useEffect } from "react";

interface Props {
  setHeaderName: React.Dispatch<React.SetStateAction<string>>;
}

const Cart = ({ setHeaderName }: Props) => {
  const itemsInCart = useAppSelector((state) => state.reducers.cart.items);
  const toPay = useAppSelector((state) => state.reducers.itemsInStock.toPay);

  const displayItems = itemsInCart.map((item, index) => (
    <article className={CartCSS.item} key={item.id}>
      <CartItem item={item} />
    </article>
  ));

  useEffect(() => {
    setHeaderName("CART");
  }, []);

  return (
    <>
      {itemsInCart.length > 0 && (
        <div className={CartCSS.clothingContainer}>
          <div className={CartCSS.checkoutContainer}>
            <h2>Total: ${toPay}</h2>
          </div>
          <div className={CartCSS.itemContainer}>{displayItems}</div>
        </div>
      )}
    </>
  );
};

export default Cart;
