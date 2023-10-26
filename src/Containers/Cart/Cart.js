import React from 'react';

function Cart(props) {
    return (
        <div>
            <section id="cart" className="section-p1">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Subtotal</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="#"><i className="far fa-times-circle" /></a></td>
                            <td><img src="../assets/img/products/f1.jpg" /></td>
                            <td>Cartoon Astronaut T-Shirts</td>
                            <td>200 EGP</td>
                            <td><input type="number" defaultValue={1} /></td>
                            <td>200 EGP</td>
                        </tr>
                        <tr>
                            <td><a href="#"><i className="far fa-times-circle" /></a></td>
                            <td><img src="../assets/img/products/f2.jpg" /></td>
                            <td>Cartoon Astronaut T-Shirts</td>
                            <td>200 EGP</td>
                            <td><input type="number" defaultValue={1} /></td>
                            <td>200 EGP</td>
                        </tr>
                        <tr>
                            <td><a href="#"><i className="far fa-times-circle" /></a></td>
                            <td><img src="../assets/img/products/f3.jpg" /></td>
                            <td>Cartoon Astronaut T-Shirts</td>
                            <td>200 EGP</td>
                            <td><input type="number" defaultValue={1} /></td>
                            <td>200 EGP</td>
                        </tr>
                    </tbody>
                </table>
            </section>
            
            <section id="cart-add" className="section-p1">
                <div id="coupon">
                    <h3>Apply Coupon</h3>
                    <div>
                        <input type="text" placeholder="Enter Your Coupon" />
                        <button className="normal">Apply</button>
                    </div>
                </div>
                <div id="subtotal">
                    <h3>Cart Totals</h3>
                    <table>
                        <tbody><tr>
                            <td>Cart Subtotal</td>
                            <td>600 EGP</td>
                        </tr>
                            <tr>
                                <td>Shipping</td>
                                <td>50 EGP</td>
                            </tr>
                            <tr>
                                <td><strong>Total</strong></td>
                                <td><strong>650 EGP</strong></td>
                            </tr>
                        </tbody></table>
                    <button className="normal">Proceed to checkout</button>
                </div>
            </section>
        </div>

    );
}

export default Cart;