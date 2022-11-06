import { useEffect } from "react";
import Clothing from "./Clothing/Clothing";

interface Props {
  setHeaderName: React.Dispatch<React.SetStateAction<string>>;
}

const Shop = ({ setHeaderName }: Props) => {
  useEffect(() => {
    setHeaderName("MDQ CLOTHING SHOP");
  }, []);

  return (
      <section style={{ width: "100%", margin: "auto" }}>
        <Clothing />
      </section>
  );
};

export default Shop;
