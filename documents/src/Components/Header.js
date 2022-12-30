import React from 'react';

import { moneyFormat } from './StringConverter';

function Header ({money, total}) {
  
return (
    
    <div className='fixed-top text-center'>
    
        <div className='bg-primary fs-4 p-3 border rounded'>

            <p className='display-6'>Para Harcama Uygulamasına Hoşgeldiniz!</p>

            {
                total > 0 && money - total !== 0 && (
                    <> Harcayacak <span className='fw-bolder'> {moneyFormat(money - total)} TL </span> paranız kaldı! </>
                )
            }

            {
                total === 0 && (
                    <> Harcamak için <span className='fw-bolder'> { moneyFormat(money) } TL </span> paranız kaldı! </>
                )
            }

            {
                money - total === 0 && (
                    <> Hiç paranız kalmadı! </>
                )
            }

            

        </div>
    
    </div>
  )
};

export default Header;