import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserLayout from './Layout';
import '../src/css/catalog.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import axios from 'axios';

const Catalog = () => {
    const navigate = useNavigate();
    const [selectcategory, setSelectCategory] = useState([]);
    const [category, setCategory] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [color, setColor] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        getdata();
    }, [])

// 
//     useEffect(() => {
//         // Store selected color in local storage
//         localStorage.setItem('selectedColor', JSON.stringify(color));
//     }, [color]);
// 
//     useEffect(() => {
//         // Store selected color in local storage
//         localStorage.setItem('selectedCatelog', JSON.stringify(category));
//         console.log('first')
//     }, [category]);

    const getdata = () => {
        const storedData = localStorage.getItem('catalogData');
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                setColor(parsedData);
                setCategory(parsedData);
            } catch (error) {
                console.error('Error parsing stored data:', error);
            }
        }

        // Fetch data from the API
        axios.get('http://localhost:8080/catelog')
            .then((response) => {
                let newData = []
                console.log(response.data);
                response.data.forEach(item => {
                    let obj = {
                        label: item.selectedColor,
                        value: item._id
                    }
                    newData.push(obj)
                });

                setColor(newData);
                console.log(newData)
                localStorage.setItem('catalogData', JSON.stringify(newData));
            })
            .catch((error) => {
                console.log(error);
            });



        axios.get('http://localhost:8080/categoys')
            .then((responsed) => {
                let newCatelog = []
                console.log(responsed.data);
                responsed.data.forEach(item => {
                    let obj = {
                        label: item.selectedCategory,
                        value: item._id
                    }
                    newCatelog.push(obj)
                });

                setCategory(newCatelog);
                console.log(newCatelog)
                localStorage.setItem('catalogData', JSON.stringify(newCatelog));
            })
            .catch((error) => {
                console.log(error);
            });
    }


    const handleSubmit = (values, { setSubmitting }) => {
        // Handle form submission logic here
        navigate("/products");
        setSubmitting(false);
    };


    const handleSelectCategory = (selectedOption) => {
        setSelectCategory(selectedOption);
    };


    const handleColorChange = (selectedOption) => {
        setSelectedColors(selectedOption);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
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


                                <div className='wrap-input100 validate-input'>
                                    <Select
                                        className="input100"
                                        options={category}
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
                                        options={color}
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


                                {/* <div className='wrap-input100 validate-input'>
                                    <Field type="file" className="input100 imagecen" id="image" name="image" accept="image/*" />
                                    <span className="focus-input100"></span>
                                </div> */}


                                <div className='wrap-input100 validate-input'>
                                    <Field
                                        type="file"
                                        id="image"
                                        name="image"
                                        className='input100 imagecen'
                                        onChange={handleImageChange}
                                        accept="image/*"
                                    />
                                    <span className="focus-input100"></span>
                                </div>

                                {
                                    selectedImage && (
                                        <div className="selected-image ">
                                            <img src={selectedImage} alt="Selected" className="preview-image imagesize" />
                                        </div>
                                    )
                                }


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