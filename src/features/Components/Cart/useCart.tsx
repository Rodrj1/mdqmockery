import { useEffect } from "react";
import { useAppSelector } from "../../../app/hooks";
import CartItem from "../../../components/Shop/Cart/CartItem";

interface Props {
  setHeaderName: React.Dispatch<React.SetStateAction<string>>;
}

export const useCart = ({ setHeaderName }: Props) => {
  const itemsInCart = useAppSelector((state) => state.reducers.cart.items);
  const toPay = useAppSelector((state) => state.reducers.itemsInStock.toPay);

  const displayItems = itemsInCart.map((item) => (
    <CartItem item={item} key={item.id} />
  ));

  useEffect(() => {
    setHeaderName("CART");
  }, []);

  return {
    displayItems,
    toPay,
  };
};
