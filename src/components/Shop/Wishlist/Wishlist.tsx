import { useEffect } from "react";
import { useAppSelector } from "../../../app/hooks";
import DisplayItem from "../Clothing/DisplayItem";
import WishlistCSS from "../Shop.module.scss";

interface Props {
  setHeaderName: React.Dispatch<React.SetStateAction<string>>;
}

const Wishlist = ({ setHeaderName }: Props) => {
  const itemsInStock = useAppSelector(
    (state) => state.reducers.wishlist.currentItems
  );

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
    </article>
  ));

  useEffect(() => {
    setHeaderName("WISHLIST");
  }, []);

  return (
    <div className={WishlistCSS.clothingContainer}>
      <div className={WishlistCSS.itemContainer}>{displayItems}</div>
    </div>
  );
};

export default Wishlist;
