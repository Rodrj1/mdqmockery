import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { removeFromWishList } from "../../ReduxStore/wishlist-slice";
import DisplayItem from "../../../components/Shop/Clothing/DisplayItem";

interface Props {
  setHeaderName: React.Dispatch<React.SetStateAction<string>>;
  WishlistCSS: CSSModuleClasses;
}

export const useWishlist = ({ setHeaderName, WishlistCSS }: Props) => {
  const itemsInStock = useAppSelector(
    (state) => state.reducers.wishlist.currentItems
  );
  const dispatch = useAppDispatch();

  const displayItems = itemsInStock.map((item) => (
    <article key={item.id} className={WishlistCSS.item}>
      <DisplayItem
        id={item.id}
        name={item.name}
        stock={item.stock}
        sizes={item.sizes}
        price={item.price}
        image={item.image}
        type={item.type}
      />
      <button onClick={() => dispatch(removeFromWishList(item))}>
        REMOVE FROM WISHLIST
      </button>
    </article>
  ));

  useEffect(() => {
    setHeaderName("WISHLIST");
  }, []);

  return {
    displayItems,
  };
};
