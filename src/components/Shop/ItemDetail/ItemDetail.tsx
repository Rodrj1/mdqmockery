import { useParams } from "react-router-dom";
import { useItemFeatures } from "../../../features/Components/ItemDetail";
import { v4 as uuid } from "uuid";
import { useSimilarItem } from "../../../features/Components/ItemDetail";
import ItemCSS from "./ItemDetail.module.scss";

const ItemDetail = () => {
  const { itemId } = useParams();

  const { item, displaySimilarItems, handleAddTowishlist } = useSimilarItem({
    itemId,
    ItemCSS,
  });

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

  return (
    <article>
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
          <button
            className={ItemCSS.cartButton}
            onClick={() => {
              if (item)
                addItemToCart(
                  { ...item, id: uuid(), sizes: selectedSize },
                  amountToCart
                );
            }}
          >
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
    </article>
  );
};

export default ItemDetail;
