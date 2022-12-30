import 'bootstrap/dist/css/bootstrap.min.css';

import Clock from './Clock';

import Header from './Header';

import Products from './Products';

import products from "./products.json";

import Basket from './Basket';

import { React, useState, useEffect } from 'react';

function Main () {

    const [money, setMoney] = useState(1000000);

    const [basket, setBasket] = useState([]);

    const [total, setTotal] = useState(0);

    const resetBasket = () => {

        setBasket([])

    };

    useEffect(() => {
		
        const totalProduct = basket.reduce((acc, item) => {
            
            return acc + (item.amount * (products.find(product => product.id === item.id).price))
        
        }, 0)
        
        setTotal(totalProduct)

        console.log(totalProduct);

    }, [basket])
  
    return (
    
        <div className='container'>

            <div className='row text-center justify-content-center'>
                
                <div className='mb-5'>
                
                <Header key={total.id} total={total} money={money}/>
                
                </div>

                <div className='mt-5 col-md-6 col-lg-4'>
               
                { products.map( ( product ) => ( <div> 

                    <Products key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} /> 
                
                    </div>
                
                    
                
                ) ) }

                 </div>

                

                <div className='bg-primary fs-5 fw-semibold p-2 col-md-12 border rounded'>
                
                    <div className='mt-2'>

                        { total > 0 && (
                            
                            <Basket resetBasket={resetBasket} products={products} basket={basket} total={total} />
                        ) }


                    </div>

                    <div className='mt-3'>

                        <Clock/>
                    
                    </div>

                </div>

                

            </div>

    
        
    
        </div>
  )
};

export default Main;