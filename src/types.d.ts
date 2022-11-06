export interface ItemProps {
  name: string;
  id: string;
  sizes: string[];
  stock: number;
  price: number;
  image: string;
  type: string;
}

export interface CartItemProps extends ItemProps {
  sizes: string;
  id: string;
}

interface exerciseProps {
  name: string;
  sets: exerciseSetProps[];
}

interface exerciseSetProps {
  id: number;
  reps: number;
  weight: number;
}
