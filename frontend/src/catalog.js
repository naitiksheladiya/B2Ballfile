import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserLayout from './Layout';
import '../src/css/catalog.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate } from "react-router-dom";
import Select from 'react-select';

const Catalog = () => {
    const navigate = useNavigate();
    const [selectcategory, setSelectCategory] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);


    const handleSubmit = (values, { setSubmitting }) => {
        // Handle form submission logic here
        navigate("/products");
        setSubmitting(false);
    };
    const option = [
        { value: 'ROUND NACK', label: 'round nack' },
        { value: 'POLO', label: 'polo' },
        { value: 'V-NACK', label: 'v-nack' },
    ]
    const handleSelectCategory = (selectedOption) => {
        setSelectCategory(selectedOption);
    };

    const options = [
        { value: 'RED', label: 'Red' },
        { value: 'BLUE', label: 'Blue' },
        { value: 'GREEN', label: 'Green' },
    ]
    const handleColorChange = (selectedOption) => {
        setSelectedColors(selectedOption);
    };

    return (
        <>
            <UserLayout />
            <div className='main layber'>
                <div className='box_ps'>
                    <Formik
                        initialValues={{
                            name: '',
                            price: '',
                            category: '',
                            color: '',
                            image: null
                        }}
                        validate={values => {
                            // Implement your validation logic here
                            const errors = {};
                            return errors;
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className="login100-form_0111">
                                <span className="login100-form-title_034 p-b-43">
                                    ADD CATALOG
                                </span>

                                <div className='wrap-input100 validate-input'>
                                    <Field className="input100" type="text" name="name" placeholder='PRODUCT NAME' />
                                    <span className="focus-input100"></span>
                                </div>

                                <br />
                                <CKEditor
                                    editor={ClassicEditor}
                                    data=""
                                    onChange={(event, editor) => { }}
                                />
                                <br />

                                <div className='wrap-input100 validate-input'>
                                    <Field className="input100" type="number" name="price" placeholder='PRODUCT PRICE' />
                                    <span className="focus-input100"></span>
                                </div>

                                <div>
                                    <input type="text" name='category' />
                                </div>
                                <div className='wrap-input100 validate-input'>
                                    <Select
                                        className="input100"
                                        options={option}
                                        name="category"
                                        placeholder="Select a category"
                                        onChange={handleSelectCategory}
                                        isMulti
                                    />
                                    <span className="focus-input100"></span>
                                </div>


                                <div className='wrap-input100 validate-input'>
                                    <Select
                                        className="input100"
                                        options={options}
                                        name="color"
                                        placeholder="Select a Color"
                                        onChange={handleColorChange}
                                        isMulti
                                    />
                                    <span className="focus-input100"></span>
                                </div>


                                {/* <div className="selected-colors">
                                    <p>Selected Colors:</p>
                                    {selectedColors.map((color, index) => (
                                        <span key={index} className="selected-color">{color.label}</span>
                                    ))}
                                </div> */}


                                <div className='wrap-input100 validate-input'>
                                    <Field type="file" className="input100 imagecen" id="image" name="image" accept="image/*" />
                                    <span className="focus-input100"></span>
                                </div>


                                <div className="container-login100-form-btn">
                                    <button type="submit" className="login100-form-btn_confrom01 subtext" disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting' : 'SUBMIT'}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div >
            </div >
        </>
    );
}

export default Catalog;
