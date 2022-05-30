import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';
import Context from './context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useContext(Context);
    useEffect(() => {
        localStorage.clear()
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runFireworks()
    },[])

    return (
        <div className='success-wrapper'>
            <div className="success">
                <p className="icon">
                    <BsBagCheckFill/>
                </p>
                <h2>Thank you for your order!</h2>
                <p className="email-msg">Check your email inbox for the receipt.</p>
                <p className="description">If you have any question please email
                <a className='email' href='mailto:order@exmaple.com'>order@exmaple.com</a>
                </p>
                <Link href='/'>
                    <button type='button' className="btn">Continue Shopping</button>
                </Link>

            </div>
        </div>
    );
};

export default Success;
