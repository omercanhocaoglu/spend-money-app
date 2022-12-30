import React from 'react';

import BasketItem from './BasketItem';

import { moneyFormat } from './StringConverter';

function Basket ({resetBasket, basket, products, total }) {

    return (
    
    <div>

        <p className='fs-2 border-bottom border-dark'>

            Alışveriş Detayları

        </p>
    
        <p className='border-bottom border-dark p-2'>

            {basket.map(item => ( <BasketItem item={item} product={products.find( e => e.id === item.id )}/> ))}

        </p>  

        <p>

              Toplam= <span className='fw-bold'> {moneyFormat(total)} TL </span> 

        </p>

        <div>

            <button onClick={resetBasket} className='btn btn-danger mt-2'> Sepeti Boşalt </button>

        </div>

        
    
    </div>
  )
}

export default Basket;