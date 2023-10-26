import React from 'react';

function Blog(props) {
    return (
        <div>
            <section id="page-header" className="blog-header">
                <h2>#readmore</h2>
                <p>Read all case studies about our products! </p>
            </section>
            {/*===========================--*/}
            {/* blog section     */}
            <section id="blog">
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="../assets/img/blog/b1.jpg" alt />
                    </div>
                    <div className="blog-details">
                        <h4> the cotton-jersey zip-up hoodie </h4>
                        <p>
                            kikstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony
                            ,godard ... </p>
                        <a href="#"> CONTINUE READING </a>
                    </div>
                    <h1> 13/01 </h1>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="../assets/img/blog/b2.jpg" alt />
                    </div>
                    <div className="blog-details">
                        <h4> How to Style a Quiff </h4>
                        <p>
                            kikstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony
                            ,godard ... </p>
                        <a href="#"> CONTINUE READING </a>
                    </div>
                    <h1> 13/04 </h1>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="../assets/img/blog/b3.jpg" alt />
                    </div>
                    <div className="blog-details">
                        <h4> Must-Have Skater girl Item </h4>
                        <p>
                            kikstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony
                            ,godard ... </p>
                        <a href="#"> CONTINUE READING </a>
                    </div>
                    <h1> 13/01 </h1>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="../assets/img/blog/b4.jpg" alt />
                    </div>
                    <div className="blog-details">
                        <h4> Runway Inspired Trends </h4>
                        <p>
                            kikstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony
                            ,godard ... </p>
                        <a href="#"> CONTINUE READING </a>
                    </div>
                    <h1> 12/01 </h1>
                </div>
                <div className="blog-box">
                    <div className="blog-img">
                        <img src="../assets/img/blog/b6.jpg" alt />
                    </div>
                    <div className="blog-details">
                        <h4> AW20 Menswear Trends </h4>
                        <p>
                            kikstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony
                            ,godard ... </p>
                        <a href="#"> CONTINUE READING </a>
                    </div>
                    <h1> 10/03 </h1>
                </div>
            </section>
            {/*===========================--*/}
            {/* blog section     */}
            {/* ===================== */}
            {/*    Paginition Section   */}
            {/* ===================== */}
            <section id="paginition" className="section-p1">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#"><i className="fa-solid fa-arrow-right" /></a>
            </section>
            {/* ===================== */}
            {/*   Newsletter    */}
            {/* ===================== */}
            <section id="newsletter" className="section-p1 section-m1">
                <div className="newstext">
                    <h4>Sign Up For Newsletters</h4>
                    <p>
                        Get E-mail updates about our latest shop and
                        <span>special offers.</span>
                    </p>
                </div>
                <div className="form">
                    <input type="text" placeholder="Your email adress" />
                    <button className="normal">Sign Up</button>
                </div>
            </section>
        </div>

    );
}

export default Blog;