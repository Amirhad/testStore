
interface Base {
  id: number;
  name: string;
  price: number;
  bought: boolean;
  rating: number;
  image: string;
}

interface ButtonProps {
  idOfstate:number
  setBought: (id:number) => void
  product:Base
}


export const  Button: React.FC<ButtonProps> = ({ idOfstate, setBought, product}) => {
  console.log(product);

  return (
    <div className="card-button">
      <button
        className={product.bought ? "btn2" : "btn"}
        onClick={() => setBought(idOfstate)}
      >
        {product.bought ? "ДОБАВЛЕНО" : "Добавить в корзину"}
      </button>
    </div>
  );
}

//тут был стейт