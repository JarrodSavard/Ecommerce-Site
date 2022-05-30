import React, {useContext} from 'react'
import Link from 'next/link'
import { AiOutlineShopping } from 'react-icons/ai'
import Context from '../pages/context/StateContext'
import Cart from "./Cart"

const Navbar = () => {
  const {showCart, setShowCart, totalQuantities} = useContext(Context)
  return (
    <div className='navbar-container'>
      <p>
        <Link href='/' className='logo'>Electronic Store</Link>
      </p>
      <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className='cart-item-qty'>{totalQuantities}</span>
      </button>
      {
        showCart && (
      <Cart/>
        )
      }
    </div>
  )
}

export default Navbar