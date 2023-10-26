import React from 'react';

function Contact(props) {
    return (
        <div>
            <section id="page-header" className="about-header">
                <h2>#let's_talk</h2>
                <p> leave a messege , we love to hear from you! </p>
            </section>
            {/* ===================== */}
            {/*     contact details    */}
            {/* ===================== */}
            <section id="contact-details" className="section-p1 ">
                <div className="details">
                    <span>GET IN TOUCH </span>
                    <h2> visite one of our agency locations or contact us today</h2>
                    <h3> HEAD OFFICE</h3>
                    <div>
                        <li>
                            <i className="fa fa-map" />
                            <p>Ibrahim salama squer</p>
                        </li>
                        <li>
                            <i className="far fa-envelope" />
                            <p>Eshop@gmail.com</p>
                        </li>
                        <li>
                            <i className="fas fa-phone-alt" />
                            <p>Eshop@gmail.com</p>
                        </li>
                        <li>
                            <i className="far fa-clock " />
                            <p>Monday to stutrday 9:00 am to 16:00 pm</p>
                        </li>
                    </div>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.169697435729!2d32.276348325284225!3d30.6009763919899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f8595d96a96705%3A0xfdaa1dc224b44933!2z2KfYs9iq2KfYryDYp9mE2KXYs9mF2KfYudmK2YTZiiDYp9mE2LHZitin2LbZig!5e0!3m2!1sar!2seg!4v1670845962491!5m2!1sar!2seg" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
            </section>
            {/* ===================== */}
            {/*     form section      */}
            {/* ===================== */}
            <section id="form-details" className="section-p1">
                <form action>
                    <span> LEAVE A MESSEGE</span>
                    <h2> we love to hear from you</h2>
                    <input type="text" placeholder=" YOUR NAME" />
                    <input type="text" placeholder=" E-MAIL" />
                    <input type="text" placeholder=" SUBJECT" />
                    <textarea name id clos={30} rows={10} placeholder="your messege" defaultValue={""} />
                    <button className="normal">submit</button>
                </form>
                <div className="people">
                    <div>
                        <img src="../assets/img/people/1.png" alt />
                        <p>
                            <span> John doe</span>
                            senior marketing manager <br /> phone:01045673344<br /> E-mail:john@gmail.com
                        </p>
                    </div>
                    <div>
                        <img src="../assets/img/people/2.png" alt />
                        <p>
                            <span> William sam</span>
                            senior marketing manager <br /> phone:01099856445<br /> E-mail:william4@gmail.com
                        </p>
                    </div>
                    <div>
                        <img src="../assets/img/people/3.png" alt />
                        <p>
                            <span> Emma george </span>
                            senior marketing manager <br /> phone:01556782256<br /> E-mail:emmajoe@gmail.com
                        </p>
                    </div>
                </div>
            </section>
            {/* ===================== */}
            {/*      Newsletter       */}
            {/* ===================== */}
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
        </div>

    );
}

export default Contact;