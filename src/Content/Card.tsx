import { Button } from "./Button";

interface Base {
  id: number;
  name: string;
  price: number;
  bought: boolean;
  rating: number;
  image: string;
}

interface CardProps {
  setBought: (setBought:number) => void;
  product: Base;
}

export const Card: React.FC<CardProps> = ({ setBought, product }) => {

  return (
    <div className="card">
      <div className="card-image">
        <img src={product.image} alt="" />
      </div>
      <div className="card-info">
        <div className="card-name">{product.name}</div>
        <div className="card-price">{product.price} ₽</div>
        <Button
          idOfstate={product.id}
          setBought={setBought}
          product={product}
        />
      </div>
    </div>
  );
};
//тут был стейт