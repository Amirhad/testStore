import React from 'react'
import {Checkout} from './Checkout'
import {Logo} from './Logo'
import {Menu} from './Menu'



interface Base {
  id: number;
  name: string;
  price: number;
  bought: boolean;
  rating: number;
  image: string;
}

interface HeaderProps {
  state:Base[]
}


export const Header:React.FC<HeaderProps> = ({state})  =>{
  return (
    <div className='header'>
        <Logo/>
        <Menu/>
        <Checkout state={state}/>
        <a className='logout'>выход</a>


    </div>
  )
}

