import React from 'react';

function Home(props) {
    return (
        <div>
            <section id="hero">
                <h4>Trade-in-offer</h4>
                <h2>Super value deals</h2>
                <h1>On all products</h1>
                <p>Save more with coupons &amp; up to 70% off!</p>
                <button>Shop Now</button>
            </section>
            <section id="feature" className="section-p1">
                <div className="fe-box">
                    <img src="assets/img/features/f1.png" alt />
                    <h6>Free Shipping</h6>
                </div>
                <div className="fe-box">
                    <img src="assets/img/features/f2.png" alt />
                    <h6>Online Order</h6>
                </div>
                <div className="fe-box">
                    <img src="assets/img/features/f3.png" alt />
                    <h6>Save Money</h6>
                </div>
                <div className="fe-box">
                    <img src="assets/img/features/f4.png" alt />
                    <h6>Promotions</h6>
                </div>
                <div className="fe-box">
                    <img src="assets/img/features/f5.png" alt />
                    <h6>xHappy Sell</h6>
                </div>
                <div className="fe-box">
                    <img src="assets/img/features/f6.png" alt />
                    <h6>F24/7 Support</h6>
                </div>
            </section>
            <section id="product1" className="section-p1">
                <h2>Featured Products</h2>
                <p className="heading">Summer Collection New Modern Design</p>
                <div className="pro-container">
                    <div className="pro" onclick="window.location.href='sproduct.html';">
                        <img src=" assets/img/products/f1.jpg" alt />
                        <div className="des">
                            <span>Zara</span>
                            <h5>ABSTRACT PRINT SHIRT</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-solid fa-star-half-stroke" />
                            </div>
                            <h4>400 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="assets/img/products/f2.jpg" alt />
                        <div className="des">
                            <span>Zara</span>
                            <h5>PRINTED STRETCHY SHIRT</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-solid fa-star-half-stroke" />
                            </div>
                            <h4>400 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="assets/img/products/f3.jpg" alt />
                        <div className="des">
                            <span>Zara</span>
                            <h5>FLORAL PRINT SHIRT</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-regular fa-star" />
                            </div>
                            <h4>350 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="assets/img/products/f4.jpg" alt />
                        <div className="des">
                            <span>Zara</span>
                            <h5>FLORAL PRINT SHIRT</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-regular fa-star" />
                            </div>
                            <h4>350 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="assets/img/products/f5.jpg" alt />
                        <div className="des">
                            <span>H&amp;M</span>
                            <h5>FLORAL PRINT SHIRT</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-solid fa-star-half-stroke" />
                                <i className="fa-regular fa-star" />
                            </div>
                            <h4>350 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="assets/img/products/f6.jpg" alt />
                        <div className="des">
                            <span>H&amp;M</span>
                            <h5> FINE CORDUROY SHIRT</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-solid fa-star-half-stroke" />
                            </div>
                            <h4>450 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="assets/img/products/f7.jpg" alt />
                        <div className="des">
                            <span>Zara</span>
                            <h5>Wide linen-blend trousers</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-regular fa-star" />
                                <i className="fa-regular fa-star" />
                            </div>
                            <h4>275 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="assets/img/products/f8.jpg" alt />
                        <div className="des">
                            <span>Zara</span>
                            <h5>Women Summer Top </h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-regular fa-star" />
                                <i className="fa-regular fa-star" />
                            </div>
                            <h4>290 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="banner" className="section-m1">
                <h4>Repair Services</h4>
                <h2>Up to <span>70% off</span> - All T-shirts &amp; Accessories</h2>
                <button className="normal">Explore More</button>
            </section>
            {/* ===================== */}
            {/*    New Arrivals   */}
            {/* ===================== */}
            <section id="product1" className="section-p1">
                <h2>New Arrivals</h2>
                <p className="heading">Summer Collection New Modern Design</p>
                <div className="pro-container">
                    <div className="pro">
                        <img src="assets/img/products/n1.jpg" alt />
                        <div className="des">
                            <span>H&amp;M</span>
                            <h5>Regular Fit shirt</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-solid fa-star-half-stroke" />
                                <i className="fa-regular fa-star" />
                            </div>
                            <h4>279 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="assets/img/products/n2.jpg" alt />
                        <div className="des">
                            <span>LC WAIKIKI</span>
                            <h5>Classic Sleeved Shirt</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-regular fa-star" />
                                <i className="fa-regular fa-star" />
                            </div>
                            <h4>230 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="assets/img/products/n3.jpg" alt />
                        <div className="des">
                            <span>H&amp;M</span>
                            <h5>Regular Fit Cotton shirt</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-solid fa-star-half-stroke" />
                            </div>
                            <h4>350 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="assets/img/products/n4.jpg" alt />
                        <div className="des">
                            <span>POLO</span>
                            <h5>Polo T-Shirt</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-solid fa-star-half-stroke" />
                                <i className="fa-regular fa-star" />
                            </div>
                            <h4>285 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="assets/img/products/n5.jpg" alt />
                        <div className="des">
                            <span>H&amp;M</span>
                            <h5>JEANS SHIRT</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-solid fa-star-half-stroke" />
                            </div>
                            <h4>390 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="assets/img/products/n6.jpg" alt />
                        <div className="des">
                            <span>LC WAIKIKI</span>
                            <h5>Cartoon Astronaut T-shirts</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-regular fa-star" />
                                <i className="fa-regular fa-star" />
                            </div>
                            <h4>198 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="assets/img/products/n7.jpg" alt />
                        <div className="des">
                            <span>LC WIKIKI</span>
                            <h5>Regular Fit Linen-blend overshirt</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-solid fa-star-half-stroke" />
                                <i className="fa-regular fa-star" />
                            </div>
                            <h4>300 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                    <div className="pro">
                        <img src="assets/img/products/n8.jpg" alt />
                        <div className="des">
                            <span>H&amp;M</span>
                            <h5>Regular Fit Resort Shirt</h5>
                            <div className="star">
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fas fa-star" />
                                <i className="fa-regular fa-star" />
                                <i className="fa-regular fa-star" />
                            </div>
                            <h4>265 EGP</h4>
                            <a href="#"><i className="fa-solid fa-cart-shopping cart" /></a>
                        </div>
                    </div>
                </div>
                <section id="sm-banner" className="section-p1">
                    <div className="banner-box">
                        <div className="overlay" />
                        <div className="banner-content content">
                            <h4>Crazy Deals</h4>
                            <h2>Buy 1 Get 1 Free</h2>
                            <span>The best classic dress is on sale at cara</span>
                            <button className="white">Learn More</button>
                        </div>
                    </div>
                    <div className="banner-box">
                        <div className="overlay" />
                        <div className="banner-content content">
                            <h4>Spring/Summer </h4>
                            <h2>Upcoming Season</h2>
                            <span>The best classic dress is on sale at cara</span>
                            <button className="white">Collection</button>
                        </div>
                    </div>
                </section>
                <section id="banner3" className="section-p1">
                    <div className="banner-box">
                        <div className="overlay" />
                        <div className="content">
                            <h2> Seasonal Sale</h2>
                            <h3>Winter Collection 50% Off</h3>
                        </div>
                    </div>
                    <div className="banner-box">
                        <div className="overlay" />
                        <div className="content">
                            <h2> Elegant Collection</h2>
                            <h3>Elegant collection with special prices</h3>
                        </div>
                    </div>
                    <div className="banner-box">
                        <div className="overlay" />
                        <div className="content">
                            <h2>New Women Collection</h2>
                            <h3>New Summer Collection For Women </h3>
                        </div>
                    </div>
                </section>
                <section id="newsletter" className="section-p1 section-m1">
                    <div className="newstext">
                        <h4>Sign Up For Newsletters</h4>
                        <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
                    </div>
                    <div className="form">
                        <input type="text" placeholder="Your email adress" />
                        <button className="normal">Sign Up</button>
                    </div>
                </section>
            </section></div>

    );
}

export default Home;