import React from 'react';

function Footer(props) {
    return (
        <footer className="section-p1">
            <div className="col">
                <img src="../assets/img/mainlogo.jpg    " alt className="logo" />
                <h4>Contact</h4>
                <p><strong>Adress:</strong> Surat,India </p>
                <p><strong>Phone:</strong> 0101010101010 </p>
                <p><strong>Hours:</strong> 10:00am -11:00pm, Sat -Thu </p>
                <div className="icon follow">
                    <h4>Follow US</h4>
                    <i className="fab fa-facebook-f" />
                    <i className="fab fa-twitter" />
                    <i className="fab fa-instagram" />
                    <i className="fab fa-pinterest-p" />
                    <i className="fab fa-youtube" />
                </div>
            </div>
            <div className="col">
                <h4>About</h4>
                <a href="#">About Us</a>
                <a href="#">Delivery Information</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms &amp; Conditions</a>
                <a href="#">Contact Us</a>
            </div>
            <div className="col">
                <h4>My Account</h4>
                <a href="#">Sign In</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>
            </div>
            <div className="col install">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div className="row">
                    <img src="../assets/img/pay/app.jpg" alt />
                    <img src="../assets/img/pay/play.jpg" alt />
                </div>
                <p>Secured Payment Gateways</p>
                <img src="../assets/img/pay/pay.png" alt />
            </div>
            <div className="copyright">
                <p>© 2022, Web Development Project - Group18 </p>
            </div>
        </footer>

    );
}

export default Footer;