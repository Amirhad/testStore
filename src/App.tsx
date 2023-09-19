import {Content} from "./Content/Content";
import {Header} from "./header/Header";
import React, { useState } from "react";

import macbook from "../src/images/mack-book-card-1.jpg";
import Galaxy from "../src/images/Galaxy-card-2.jpg";
import Skuter from "../src/images/skuter-card-3.jpg";
import SamsungTV from "../src/images/samsung-Tv-card-4.jpg";
import Mask from "../src/images/mask-card-5.jpg";
import WashMashine from "../src/images/wasch-maschine-card-6.jpg";
import Holodilnik from "../src/images/holodilnik-card-7.jpg";
import SubCard from "../src/images/sub-card-8.jpg";
import Naushniki from "../src/images/nauschniki-card-9.jpg";
import Video from "../src/images/video-carta.png";

interface Base {
  id: number;
  name: string;
  price: number;
  bought: boolean;
  rating: number;
  image: string;
}

export const App: React.FC = () => {
  const database: Base[] = [
    {
      id: 1,
      name: "MacBook",
      price: 100000,
      bought: false,
      rating: 5,
      image: `${macbook}`,
    },
    {
      id: 2,
      name: "Galaxy",
      price: 35999,
      bought: false,
      rating: 4,
      image: `${Galaxy}`,
    },
    {
      id: 3,
      name: "Скутер",
      price: 65500,
      bought: false,
      rating: 5,
      image: `${Skuter}`,
    },
    {
      id: 4,
      name: "Монитор Samsung",
      price: 12000,
      bought: false,
      rating: 3,
      image: `${SamsungTV}`,
    },
    {
      id: 5,
      name: "Респераторная маска",
      price: 500,
      bought: false,
      rating: 5,
      image: `${Mask}`,
    },
    {
      id: 6,
      name: "Стиральная машина",
      price: 100000,
      bought: false,
      rating: 3,
      image: `${WashMashine}`,
    },
    {
      id: 7,
      name: "Белый холодильник",
      price: 43100,
      bought: false,
      rating: 5,
      image: `${Holodilnik}`,
    },
    {
      id: 8,
      name: "Колонка",
      price: 3000,
      bought: false,
      rating: 4,
      image: `${SubCard}`,
    },
    {
      id: 9,
      name: "Наушники",
      price: 1500,
      bought: false,
      rating: 5,
      image: `${Naushniki}`,
    },
    {
      id: 10,
      name: "Видеокарта RTX 3060",
      price: 41000,
      bought: false,
      rating: 8,
      image: `${Video}`,
    },
  ];
  const [state, setState] = useState<Base[]>(database);

  let setBought = (idOfItem: number): void => {
    const newBought = state.map((item): Base => {
      if (idOfItem === item.id) {
        return {
          ...item,
          bought: !item.bought,
        };
      }
      return item;
    });
    setState(newBought);
  };

  return (
    <div className="container">
      <Header state={state} />
      <Content setBought={setBought} state={state} database={database} />
    </div>
  );
};
