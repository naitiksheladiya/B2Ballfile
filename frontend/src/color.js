import React, { useState } from 'react'
import UserLayout from './Layout';
import { useFormik } from 'formik'; // Import useFormik hook
import '../src/css/catalog.css';
import axios from 'axios';


const Color = () => {
    const formik = useFormik({
        initialValues: {
            productName: '',
            selectedColor: ''
        },
        onSubmit: values => {
            // Handle form submission logic here
            console.log(values);
            axios.post('http://localhost:8080/color', values)
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error);

                });
            // Reset the form after submission
            formik.resetForm();
        }
    });

    const handleSubmit = event => {
        event.preventDefault(); // Prevent default form submission behavior
        formik.handleSubmit(); // Call Formik's handleSubmit method
    };

    return (
        <>
            <UserLayout />
            <div className='main layber'>
                <div className='box_ps'>
                    <form onSubmit={handleSubmit} className='login100-form_0111 categoryform'>
                        <span className="login100-form-title_034 p-b-43">
                            COLOR SELECT
                        </span>

                        <div className='wrap-input100 validate-input'>
                            <input
                                className="input100"
                                type="text"
                                name="productName"
                                placeholder='PRODUCT NAME'
                                onChange={formik.handleChange}
                                value={formik.values.productName}
                            />
                            <span className="focus-input100"></span>
                        </div><br />

                        {/* Color input field */}
                        <div className='wrap-input100 validate-input'>
                            <input
                                className="input100 colorrrr"
                                type="text"
                                id="selectedColor"
                                name="selectedColor"
                                placeholder='ENTER COLOR'
                                value={formik.values.selectedColor}
                                onChange={formik.handleChange}
                                style={{ height: '40px', width: '100%' }} // Adjust width as needed
                            />
                            <span className="focus-input100"></span>
                        </div>

                        <div className="container-login100-form-btn">
                            <button type="submit" className="login100-form-btn_confrom01 subtext subtext1" disabled={formik.isSubmitting}>
                                {formik.isSubmitting ? 'Submitting' : 'SUBMIT'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Color;
