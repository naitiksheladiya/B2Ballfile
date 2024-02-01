import React from 'react';
import { Formik, Form, Field } from 'formik'; // Import Formik components
import UserLayout from './Layout';
import '../src/css/catalog.css';

const Category = () => {
    return (
        <>
            <UserLayout />
            <div className='main layber'>
                <div className='box_ps'>
                    {/* Wrap your form with Formik component */}
                    <Formik
                        initialValues={{
                            name: ''
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            // Handle form submission logic here
                            console.log(values);
                            setSubmitting(false);
                        }}
                    >
                        {({ isSubmitting }) => (
                            <Form className="login100-form_0111">
                                <span className="login100-form-title_034 p-b-43">
                                    CATEGORY SELECT
                                </span>

                                {/* Replace input with Field */}
                                <div className='wrap-input100 validate-input'>
                                    <Field className="input100" type="text" name="name" placeholder='PRODUCT NAME' />
                                    <span className="focus-input100"></span>
                                </div><br />
                                
                                <div className='wrap-input100 validate-input'>
                                    <Field className="input100" type="text" name="name" placeholder='CATEGORY NAME' />
                                    <span className="focus-input100"></span>
                                </div>

                                <div className="container-login100-form-btn">
                                    <button type="submit" className="login100-form-btn_confrom01 subtext subtext1" disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting' : 'SUBMIT'}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default Category;
