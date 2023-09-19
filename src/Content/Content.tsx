import React from 'react';
import {Card} from './Card'

interface Base {
  id: number;
  name: string;
  price: number;
  bought: boolean;
  rating: number;
  image: string;
}

interface ContentProps {
  setBought: (setBought:number) => void;
  database: Base[]
  state?:Base[]
}


export const Content:React.FC<ContentProps> = ({setBought,database}) => {

  return (
    <div className='content'>
    {database.map((product) => (
      <Card setBought={setBought} key={product.id} product={product} />
    ))}
  </div>
  )
}

//тут был стейт