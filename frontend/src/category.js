import React, { useState } from 'react';
import { useFormik } from 'formik'; // Import useFormik hook
import UserLayout from './Layout';
import '../src/css/catalog.css';

const Category = () => {
    const [categories, setCategories] = useState(['']); // State to store multiple categories

    const formik = useFormik({
        initialValues: {
            name: '',
            categories: [''] // Initialize categories directly
        },
        onSubmit: values => {
            // Handle form submission logic here
            console.log(values);

            // Reset the form after submission
            formik.resetForm();
        }
    });

    const handleSubmit = event => {
        event.preventDefault(); // Prevent default form submission behavior
        formik.handleSubmit(); // Call Formik's handleSubmit method
    };

    const handleCategoryChange = (index, event) => {
        const newCategories = [...formik.values.categories];
        newCategories[index] = event.target.value;
        formik.setFieldValue('categories', newCategories); // Update Formik values
    };

    const addCategoryInput = () => {
        setCategories([...categories, '']); // Add a new empty category input field
        formik.setFieldValue('categories', [...formik.values.categories, '']); // Update Formik values
    };

    return (
        <>
            <UserLayout />
            <div className='main layber'>
                <div className='box_ps'>
                    <form onSubmit={handleSubmit} className="login100-form_0111 categoryform">
                        <span className="login100-form-title_034 p-b-43">
                            CATEGORY SELECT
                        </span>

                        {/* Replace input with Field */}
                        <div className='wrap-input100 validate-input'>
                            <input
                                className="input100"
                                type="text"
                                name="name"
                                placeholder='PRODUCT NAME'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            <span className="focus-input100"></span>
                        </div><br />

                        {/* Render multiple category input fields */}
                        {formik.values.categories.map((category, index) => (
                            <div className='wrap-input100 validate-input' key={index}>
                                <input
                                    className="input100"
                                    type="text"
                                    placeholder='CATEGORY NAME'
                                    value={category}
                                    onChange={event => handleCategoryChange(index, event)}
                                />
                                <span className="focus-input100"></span>
                            </div>
                        ))}

                        {/* Button to add more category input fields */}
                        <div className="container-login100-form-btn">
                            <button type="button" className="login100-form-btn_confrom01 subtext subtext1" onClick={addCategoryInput}>
                                Add Category
                            </button>
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
    );
}

export default Category;
