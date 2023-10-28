import React, { useState } from 'react';
import * as yup from 'yup';
import { useFormik, Form, Formik } from 'formik';


function Auth(props) {
    const [usertype, Setusertype] = useState('Login');
    const [password, setpassword] = useState(false);

    let LoginSchema, initVal;

    if (usertype == 'Login') {
        LoginSchema = {
            email: yup.string().email("Invalid email address format").required("Email is required"),
            password: yup.string().required("Password is required")
        };
        initVal = {
            email: '',
            password: ''
        }
    } else if (usertype == 'Signup') {
        LoginSchema = {
            name: yup.string().required("name is required"),
            email: yup.string().email("Invalid email address format").required("Email is required"),
            password: yup.string().required("Password is required")
        };
        initVal = {
            name: '',
            email: '',
            password: ''
        }
    } else {
        LoginSchema =
            { email: yup.string().email("Invalid email address format").required("Email is required") }
        initVal = {
            email: ''
        }
    }

    let schema = yup.object().shape(LoginSchema);

    const handleLogin = () => {
        localStorage.setItem('user', '123');
    }

    const formik = useFormik({
        initialValues: initVal,
        validationSchema: schema,
        onSubmit: values => {
            if(usertype === 'Login'){
                handleLogin()
            }else{
                alert(JSON.stringify(values, null, 2));
            }
        },
    });



    const { errors, handleBlur, handleChange, handleSubmit, touched } = formik
    return (
        <div className="container">
            <div className="card">
                <div className="card_title">
                    {
                        password ?
                            <h1>Forgot Password</h1>
                            :
                            usertype === 'Login' ?
                                <h1>Login Account</h1>
                                :
                                <h1>Signup Account</h1>
                    }
                
                    {
                        usertype === 'Login' && password === false ?
                            <>
                                <a
                                    type="submit"
                                    onClick={() => Setusertype('Signup')}>
                                    Create an account ?
                                </a><br />
                                <a
                                    type="submit"
                                    onClick={() => setpassword(true)}>
                                    Forgot Password ?
                                </a>
                            </>
                            :
                            password === true ?
                                <a
                                    type="submit"
                                    onClick={() => setpassword(false)}>
                                    Remember your password !
                                </a>
                                :
                                <a
                                    type="submit"
                                    onClick={() => Setusertype('Login')}>
                                    Already an account ?
                                </a>
                    }
                </div>
                <div className="form">
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit} >

                            {

                                usertype === 'Signup'
                                    ?
                                    <>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder="UserName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.username && touched.username ? (
                                            <div className='error'>{errors.username}</div>
                                        ) : (
                                            ""
                                        )}
                                    </>
                                    :
                                    null

                            }

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {errors.email && touched.email ? (
                                <div className='error'>{errors.email}</div>
                            ) : (
                                ""
                            )}
                            {
                                password ?
                                    null
                                    :
                                    <>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            id="password"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        {errors.password && touched.password ? (
                                            <div className='error'>{errors.password}</div>
                                        ) : (
                                            ""
                                        )}
                                    </>

                            }


                            {
                                password ?
                                    <button className="normal"  type='submit'>Submit</button>
                                    :
                                    usertype === 'Login' ?
                                        <button className="normal" type='submit'>Login</button>
                                        :
                                        <button className="normal" type='submit'>Sign Up</button>
                            }

                        </Form>
                    </Formik>
                </div>
                <div className="card_terms">
                    <input type="checkbox" name id="terms" /> <span>I have read and agree to the <a href>Terms of Service</a></span>
                </div>
            </div>
        </div>

    );
}

export default Auth;