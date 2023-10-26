import { useFormik } from 'formik/dist';
import React, { useState } from 'react';
import * as yup from 'yup';
// import { useFormik } from 'formik';

function Auth(props) {

    const [type, setType] = useState('Login');
    const [forget, setForget] = useState(false);

    let authObj, initVal;

    if (type === 'Login') {
        authObj = {
            email: yup.string().email("please enter valid email").required("please enter email"),
            Password: yup.string().required()
        }
        initVal = {
            email: '',
            Password: ''
        }
    } else if (type === 'SignUp') {
        authObj = {
            name: yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required("please enter name"),
            email: yup.string().email("please enter valid email").required("please enter email"),
            Password: yup.string().required(),
            con_Password: yup.string().required().test('con_Password', "Password dose not match", function (val) {
                if (val === this.parent.Password) {
                    return true;
                } else {
                    return false;
                }
            })
        }
        initVal = {
            name: '',
            email: '',
            Password: '',
            con_Password: ''
        }
    } else {
        authObj = {
            name: yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ").required("please enter name"),
            email: yup.string().email("please enter valid email").required("please enter email")
        }
        initVal = {
            name: '',
            email: ''
        }
    }

    let authSchema = yup.object().shape(authObj);

    const formik = useFormik({
        initialValues: initVal,
        enableReinitialize: true,
        validationSchema: authSchema,
        onSubmit: values => {
            console.log(values);
        },
    });

    const { handleBlur, handleChange, handleSubmit, values, errors, touched } = formik

    return (
        <section id="form-details" className="section-p1" >
            <form onSubmit={handleSubmit} role="form">
                {/* <form onSubmit={handleSubmit} role="form">


                {forget ? <h2>Reset Password</h2> :
                    type === 'login' ? <h2>Login</h2> : <h2>Signup</h2>}



                <div className="row justify-content-center g-2">
                    {type === 'login' ? '' : (
                        <div className="col-md-7">
                            <input type="text" name="name" id="name" placeholder="Your Name"
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                errorText={errors.name && touched.name ? errors.name : null}
                            />
                        </div>
                    )}
                    <div className="col-md-7">
                        <input type="email" name="email" id="email" placeholder="Email Address"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            autoComplete="username"
                            errorText={errors.email && touched.email ? errors.email : null}
                        />
                    </div>
                    { !forget ?  
                        <div className="col-md-7">
                            <input type="password" name="password" id="password" placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                autoComplete="current-password"
                                errorText={errors.Password && touched.Password ? errors.Password : null}
                            />
                        </div> : null
                    } 
                </div>
                <div className="row text-center justify-content-center mt-2 g-3">
                    <div className="col-md-7 mt-0 text-end">
                        {type === 'login' ? (<a href="#" onClick={() => setType('forget')}> Forgot Password? </a>) : null}
                    </div>
                    <div className="col-md-7 my-4">

                        {
                            forget ? <button className="normal">submit</button> :
                                type === 'Login' ?
                                    <button className="normal">Login</button> :
                                    <button className="normal">SignUp</button>
                        }
                    </div>
                    <div className="col-md-7">
                        <p>
                            {
                                type === 'forget' ?
                                    (<span> Back to<a href="#" onClick={() => setType('login')}> Login</a> </span>)
                                    : type === 'signup' ?
                                        (<span> Have you already an account?<a href="#" onClick={() => setType('login')}> Login</a></span>)
                                        :
                                        (<span> Don't have an account?<a href="#" onClick={() => setType('signup')}> Sign Up</a></span>)
                            }
                        </p>
                    </div>
                </div> */}
                <span> REGISTRATION HERE</span>
                {

                    forget ? <h2>Reset Password</h2> :
                        type === 'Login' ? <h2>Login</h2> : <h2>Signup</h2>

                }
                <div className="row justify-content-center g-2">
                    {
                        type === 'Login' ? '' :
                            <div className="col-md-7">
                                <input type="text"
                                    placeholder=" YOUR NAME"
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errorText={errors.name && touched.name ? errors.name : ''}
                                />
                            </div>
                    }
                    <div className="col-md-7">
                        <input type="text"
                            placeholder=" E-MAIL"
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errorText={errors.name && touched.name ? errors.name : ''}
                        />
                    </div>

                    {
                        !forget ?
                            <div className="col-md-7">
                                <input type="text"
                                    placeholder=" PASSWORD"
                                    name='Password'
                                    value={values.Password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    errorText={errors.name && touched.name ? errors.name : ''}
                                />
                            </div> : null

                    }
                </div>
                <div className="row text-center justify-content-center mt-2 g-3">
                {
                    type === 'SignUp' ?
                        <input type="text"
                            placeholder="CONFORM PASSWORD"
                            name='con_Password'
                            value={values.con_Password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            errorText={errors.name && touched.name ? errors.name : ''}
                        /> : null
                }

                {
                    forget ? <button className="normal">submit</button> :
                        type === 'Login' ?
                            <button className="normal">Login</button> :
                            <button className="normal">SignUp</button>
                }

                {
                    type === 'Login' ?
                        <a href='#' onClick={() => setType('Forget')}>Signup</a> : null

                }
                </div>
                <div className="row text-center justify-content-center mt-2 g-3">

                        {
                            type === 'Login' ?
                            <div className="col-md-7 mt-0 text-end">
                                    <a href="#" onClick={() => { setType('forget'); setForget(true) }}>forgot password?</a>
                                </div> :
                                <span>Create a New Account?  <a href="#" onClick={() => { setType('Login'); setForget(false) }}>Login</a></span>
                        }
                    
                </div>
            </form>


        </section>
    );
}

export default Auth;