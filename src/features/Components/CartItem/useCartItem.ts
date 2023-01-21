import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../app/hooks";
import { removeFromCart } from "../../ReduxStore/cart-slice";
import { restoreStock } from "../../ReduxStore/stock-slice";
import { CartItemProps } from "../../../types";

interface Props {
  item: CartItemProps;
}

export const useCartItem = ({ item }: Props) => {
  const dispatch = useAppDispatch();
  const itemRedirectsTo = `/item/${item.name}`;
  const navigate = useNavigate();

  const deleteItem = (id: string) => {
    dispatch(removeFromCart(id));
    dispatch(
      restoreStock({ name: item.name, price: item.price, amount: item.stock })
    );
  };
  return {
    navigate,
    itemRedirectsTo,
    deleteItem,
  };
};
