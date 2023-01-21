import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { CartItemProps } from "../../../types";
import { addToCart } from "../../ReduxStore/cart-slice";
import { removeStock } from "../../ReduxStore/stock-slice";

interface Props {
  name: string | undefined;
  stock: number | undefined;
  price: number | undefined;
}

export const useItemFeatures = ({ name, stock, price }: Props) => {
  const dispatch = useAppDispatch();
  const [amountToCart, setAmountToCart] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectSizeMessage, setSelectSizeMessage] = useState<string>("");
  const [checkStockMessage, setCheckStockMessage] = useState<string>("");
  const [currentStock, setCurrentStock] = useState<number>(0);

  const addItemToCart = (item: CartItemProps, amount: number) => {
    if (stock) {
      if (stock >= amount && amount > 0 && selectedSize != "") {
        if (stock && name && price) {
          dispatch(addToCart({ ...item, stock: amount }));
          dispatch(removeStock({ name, amount, price }));
          if (stock) setCurrentStock((stock) => stock - amount);
          setSelectedSize("");
          setSelectSizeMessage("");
          setCheckStockMessage("");
          setAmountToCart(0);
        }
      }
    }
    if (selectedSize == "") {
      setSelectSizeMessage("SELECT A SIZE!");
    }
    if (amountToCart == 0) {
      setCheckStockMessage("SPECIFY AN AMOUNT");
    }

    if (stock)
      if (stock <= 0) {
        setCheckStockMessage("No stock available.");
      } else if (amount > stock) {
        setCheckStockMessage("Amount greater than stock.");
      }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value < "0") {
      e.target.value = "";
    }
    setAmountToCart(parseInt(e.target.value));
  };

  const handleSize = (size: string) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    if (stock) setCurrentStock(stock);
  }, [stock]);

  useEffect(() => {
    if (amountToCart > 0) {
      setCheckStockMessage("");
    }
    if (selectedSize != "") {
      setSelectSizeMessage("");
    }
  }, [amountToCart, selectedSize]);

  return {
    amountToCart,
    handleSize,
    selectedSize,
    selectSizeMessage,
    checkStockMessage,
    currentStock,
    handleOnChange,
    addItemToCart,
  };
};
