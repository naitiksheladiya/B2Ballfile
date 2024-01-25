import UserLayout from './Layout';
import '../src/css/catalog.css';
import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Catalog() {
    const [businessName, setBusinessName] = useState('');
    const [editorData, setEditorData] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedColor, setSelectedColor] = useState('');

    const handleReady = (editor) => {
        // You can store the "editor" and use when it is needed.
        console.log('Editor is ready to use!', editor);
    };

    const handleChange = (event, editor) => {
        console.log(event);
        const data = editor.getData();
        setEditorData(data);
    };

    const handleBlur = (event, editor) => {
        console.log('Blur.', editor);
    };

    const handleFocus = (event, editor) => {
        console.log('Focus.', editor);
    };


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleColorChange = (event) => {
        setSelectedColor(event.target.value);
    };


    useEffect(() => {
        // You can perform any additional logic here when businessName or editorData changes
    }, [businessName, editorData, selectedCategory, selectedColor]);
    return (
        <>
            <UserLayout />

            <div className='main layber'>
                <div className='box_ps'>
                    <form className="login100-form_0111">
                        <span className="login100-form-title_034 p-b-43">
                            ADD CATALOG
                        </span>


                        <div className='wrap-input100 validate-input'>
                            <input class="input100" type="text"
                                name="name" placeholder='PRODUCT NAME' />
                            <span class="focus-input100"></span>
                        </div>
                        <br />

                        <CKEditor
                            editor={ClassicEditor}
                            data={editorData}
                            onReady={handleReady}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                        <br />

                        <div className='wrap-input100 validate-input'>
                            <input class="input100" type="number"
                                name="price" placeholder='PRODUCT PRICE' />
                            <span class="focus-input100"></span>
                        </div>

                        <div className='wrap-input100 validate-input'>
                            <label htmlFor="category">CATEGORY : </label>
                            <select id="category" name="category" onChange={handleCategoryChange} value={selectedCategory}>
                                <option value="">Select a category</option>
                                <option value="roundneck">Round Neck</option>
                                <option value="polo">Polo</option>
                                <option value="v-nack">V-Nack</option>
                                {/* Add more categories as needed */}
                            </select>
                        </div>


                        <div className='wrap-input100 validate-input'>
                            <label htmlFor="color">COLOR : </label>
                            <select id="color" name="color" onChange={handleColorChange} value={selectedColor}>
                                <option value="">Select a color</option>
                                <option value="red">Red</option>
                                <option value="blue">Blue</option>
                                <option value="green">Green</option>
                                {/* Add more colors as needed */}
                            </select>
                        </div>

                        <div>
                            <input type="image" />
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn_confrom01 subtext">
                                SUBMIT
                            </button>
                        </div>



                    </form>
                </div>
            </div>

        </>
    );
}