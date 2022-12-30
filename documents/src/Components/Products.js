import React from 'react';

import { moneyFormat } from './StringConverter';

import "./style.css";

function Products ( {total, money, product, basket, setBasket} ) {

    const basketItem = basket.find( item => item.id === product.id );

    const addBasket = () => {

        const checkBasket = basket.find( item => item.id === product.id );
       
        if ( checkBasket ) {

            checkBasket.amount +=1
            
            setBasket([...basket.filter( item => item.id !== product.id ), checkBasket ])

        }

        else {

            setBasket([...basket, {id: product.id, amount: 1 } ])

        }
    
    };

    const removeBasket = () => {

        const currentBasket = basket.find( item => item.id === product.id );

        const checkBasketWithoutCurrent = basket.filter( item => item.id !== product.id );

            currentBasket.amount -=1

            if (currentBasket  === 0) {

                setBasket([...checkBasketWithoutCurrent ]) 

            }

            else if (currentBasket.amount === 0) {setBasket([])}


            else {

                setBasket([...checkBasketWithoutCurrent, currentBasket  ])

            }
        };


    return (
    
    <div>
    
        <div className="card mt-2">
            
            <img src={product.image} className="card-img-top img-thumbnail img-fluid" alt="..."/>
            
            <div className="card-body">
    
                <h5 className="card-title">{ product.title }</h5>

                <h6 className="card-title">{ moneyFormat(product.price) } TL</h6>
    
                
                <button disabled={total + product.price > money} className="btn btn-primary" onClick={ addBasket }>Satın Al</button>


                <span> { basketItem && basketItem.amount || 0 } </span>

                <button disabled={!basketItem} className="btn btn-danger" onClick={ removeBasket }>Sepetten Çıkar</button>
            
            </div>
        
        </div>
        
    </div>
  )
};

export default Products;