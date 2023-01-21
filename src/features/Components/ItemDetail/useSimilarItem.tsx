import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import DisplayItem from "../../../components/Shop/Clothing/DisplayItem";
import { ItemProps } from "../../../types";
import { addToWishList } from "../../ReduxStore/wishlist-slice";

interface Props {
  itemId: string | undefined;
  ItemCSS: CSSModuleClasses;
}

export const useSimilarItem = ({ itemId, ItemCSS }: Props) => {
  const [item, setItem] = useState<ItemProps>();
  const itemsInStock = useAppSelector(
    (state) => state.reducers.itemsInStock.currentItems
  );
  const [similarItems, setSimilarItems] = useState<ItemProps[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const findCurrentItem = itemsInStock.find((item) => item.name === itemId);
    if (findCurrentItem) {
      setItem(findCurrentItem);
      const similarItems = itemsInStock.filter(
        (similarItem) =>
          similarItem.name.includes(findCurrentItem.type) &&
          similarItem.name != findCurrentItem.name
      );
      setSimilarItems(similarItems);
    }
  }, [itemId]);

  const displaySimilarItems = similarItems?.map((item) => (
    <article key={item.id} className={ItemCSS.similarItem}>
      <DisplayItem
        type={item.type}
        name={item.name}
        price={item.price}
        image={item.image}
        stock={item.stock}
        sizes={item.sizes}
        id={item.id}
      />
    </article>
  ));

  const handleAddTowishlist = () => {
    if (item) dispatch(addToWishList({ ...item }));
  };
  
  return { item, displaySimilarItems, handleAddTowishlist };
};
