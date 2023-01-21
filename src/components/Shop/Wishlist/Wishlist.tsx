import { useWishlist } from "../../../features/Components/Wishlist";
import WishlistCSS from "../Shop.module.scss";

interface Props {
  setHeaderName: React.Dispatch<React.SetStateAction<string>>;
}

const Wishlist = ({ setHeaderName }: Props) => {
  const { displayItems } = useWishlist({ setHeaderName, WishlistCSS });

  return (
    <div className={WishlistCSS.clothingContainer}>
      <div className={WishlistCSS.itemContainer}>{displayItems}</div>
    </div>
  );
};

export default Wishlist;
