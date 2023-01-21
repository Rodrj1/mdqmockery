import { v4 as uuid } from "uuid";
import blackshirt from "../assets/blackshirt.jpg";
import denimblueshirt from "../assets/denimblueshirt.jpg";
import redshirt from "../assets/redshirt.jpg";
import distressedjean from "../assets/distressedjean.jpg";
import blackjean from "../assets/blackjean.jpg";

export const items = [
  {
    name: "Black Denim Shirt",
    sizes: ["S", "M", "L"],
    price: 20,
    stock: 3,
    image: blackshirt,
    type: "Shirt",
    id: uuid()
  },
  {
    name: "Roadster Maroon Shirt",
    sizes: ["S", "M"],
    price: 40,
    stock: 1,
    image: redshirt,
    type: "Shirt",
    id: uuid()
  },
  {
    name: "Blue Denim Shirt",
    sizes: ["S"],
    price: 30,
    stock: 5,
    image: denimblueshirt,
    type: "Shirt",
    id: uuid()
  },
  {
    name: "Distressed Slim Fit Jean",
    sizes: ["S"],
    price: 80,
    stock: 1,
    image: distressedjean,
    type: "Jean",
    id: uuid()
  },
  {
    name: "Slim Fit Black Jean",
    sizes: ["M", "L"],
    price: 90,
    stock: 3,
    image: blackjean,
    type: "Jean",
    id: uuid()
  },
];
