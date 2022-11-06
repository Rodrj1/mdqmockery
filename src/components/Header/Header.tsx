import { useNavigate } from "react-router-dom";
import HeaderCSS from "./Header.module.scss";

interface Props {
  name: string;
}

const Header = ({ name }: Props) => {
  const navigate = useNavigate();
  return (
    <header className={HeaderCSS.header}>
      <h1>{name}</h1>
      <nav>
        <div className={HeaderCSS.navItem}>
          <li onClick={() => navigate("./")}>Go to Shop</li>
          <li onClick={() => navigate("./wishlist")}>Wishlist</li>
          <li onClick={() => navigate("./cart")}>Cart</li>
        </div>
        <div className={HeaderCSS.navItem}>
          <li onClick={() => navigate("./notes")}>Go to Note Maker</li>
        </div>
        <div className={HeaderCSS.navItem}>
          <li onClick={() => navigate("./workout")}>Go to Workout Maker</li>
        </div>
      </nav>
    </header>
  );
};

export default Header;
