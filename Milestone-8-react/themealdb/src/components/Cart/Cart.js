import React from 'react';

const Cart = (props) => {
    const { cart } = props;



    for (const c of cart) {
        console.log(c.idMeal);
        if (c.quentity > 0) {

        }
    }
    let i = 0;
    return (
        <div>
            <h1 style={{ textTransform: 'uppercase', textDecoration: 'underline', fontWeight: '400' }}>Meals Order List</h1>
            <ul>
                {
                    cart.map(n => <li key={i++}>{n.strMeal} - {n.quentity}</li>)
                }
            </ul>
        </div>
    );
};

export default Cart;