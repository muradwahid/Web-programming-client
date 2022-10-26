import React from 'react';

const Payment = ({course}) => {
    const {title,thumbnail_img,price } = course;
    return (
        <div >
            <h2>Your Order</h2>        
            <div>
                <div>
                    <div className='flex'>
                        <h4>Product</h4>
                        <h4>Total</h4>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src={thumbnail_img} alt="" />
                            </div>
                            <div>
                                <p>{title}</p>
                            </div>
                        </div>
                        <div>$ {price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;