import { ItemProps } from "../../../types";
import { useNavigate } from "react-router-dom";
import { useItemFeatures } from "../../../features/Components/ItemDetail";
import ItemCSS from "../Shop.module.scss";

const DisplayItem = ({ name, stock, price, image, id }: ItemProps) => {
  const { currentStock } = useItemFeatures({ name, stock, price });

  const itemRedirectsTo = `/item/${name}`;
  const navigate = useNavigate();

  return (
    <article key={id} className={ItemCSS.item}>
      <div className={ItemCSS.preview}>
        <img src={image} onClick={() => navigate(itemRedirectsTo)} />
      </div>

      <div className={ItemCSS.description}>
        <h2>
          {name} ${price}
        </h2>
        <p>Stock available: [{currentStock}]</p>
      </div>
    </article>
  );
};

export default DisplayItem;
