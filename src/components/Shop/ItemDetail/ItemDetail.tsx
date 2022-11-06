import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { ItemProps } from "../../../types";
import { useItemFeatures } from "../../../features/Components/Item/useItemFeatures";
import { addToWishList } from "../../../features/ReduxStore/wishlist-slice";
import { v4 as uuid } from "uuid";
import DisplayItem from "../Clothing/DisplayItem";
import ItemCSS from "./ItemDetail.module.scss";

const ItemDetail = () => {
  const { itemId } = useParams();
  const dispatch = useAppDispatch();

  const [item, setItem] = useState<ItemProps>();
  const [similarItems, setSimilarItems] = useState<ItemProps[]>([]);

  const {
    amountToCart,
    handleSize,
    selectedSize,
    selectSizeMessage,
    checkStockMessage,
    currentStock,
    handleOnChange,
    addItemToCart,
  } = useItemFeatures({
    name: item?.name,
    stock: item?.stock,
    price: item?.price,
  });
  const items = useAppSelector(
    (state) => state.reducers.itemsInStock.currentItems
  );

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

  const handleAddToCart = () => {
    if (item) {
      addItemToCart({ ...item, id: uuid(), sizes: selectedSize }, amountToCart);
    }
  };

  const handleAddTowishlist = () => {
    if (item) dispatch(addToWishList({ ...item }));
  };

  useEffect(() => {
    const findCurrentItem = items.find((item) => item.name === itemId);
    if (findCurrentItem) {
      setItem(findCurrentItem);
      const similarItems = items.filter(
        (similarItem) =>
          similarItem.name.includes(findCurrentItem.type) &&
          similarItem.name != findCurrentItem.name
      );
      setSimilarItems(similarItems);
    }
  }, [itemId]);

  return (
    <>
      <div className={ItemCSS.item}>
        <div className={ItemCSS.preview}>
          <img src={item?.image} />
        </div>

        <div className={ItemCSS.description}>
          <h2>{item?.name}</h2>
          <h2 className={ItemCSS.price}>${item?.price}</h2>
          <p>Stock available: [{currentStock}]</p>
          <p>Available Sizes:</p>
          <div>
            {item?.sizes.map((size) => {
              return (
                <button
                  className={ItemCSS.sizeButton}
                  key={size}
                  onClick={() => handleSize(size)}
                >
                  {size}
                </button>
              );
            })}
          </div>
          <br />
          <label htmlFor="amount">Amount:</label>
          <input
            onChange={handleOnChange}
            type="number"
            id="amount"
            value={amountToCart}
          />
          <br />
          <button className={ItemCSS.cartButton} onClick={handleAddTowishlist}>
            ADD TO WISHLIST
          </button>
          <button className={ItemCSS.cartButton} onClick={handleAddToCart}>
            ADD TO CART
          </button>
          <div>
            {amountToCart > 0 && (
              <p style={{ color: "#9b51e0" }}>
                Amount to buy: {amountToCart > 0 ? amountToCart : ""}
              </p>
            )}

            {selectedSize != "" && (
              <p style={{ color: "#9b51e0" }}>Size selected: {selectedSize}</p>
            )}

            <p style={{ color: "red" }}>{selectSizeMessage}</p>

            <p style={{ color: "red" }}>{checkStockMessage}</p>
          </div>
        </div>
      </div>

      <br />

      <h2>Similar items</h2>

      <div className={ItemCSS.itemContainer}>{displaySimilarItems}</div>
    </>
  );
};

export default ItemDetail;
