import UserLayout from './Layout';
import '../src/css/catalog.css';
import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Catalog() {
    const [businessName, setBusinessName] = useState('');
    const [editorData, setEditorData] = useState('');
    const [isPopupOpen, setPopupOpen] = useState(false);

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

    const handleSubmit = (event) => {
        event.preventDefault();
        // Additional logic for handling the submit can be added here

        // Open the popup
        setPopupOpen(true);
    };

    useEffect(() => {
        // You can perform any additional logic here when businessName or editorData changes
    }, [businessName, editorData]);
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


                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn_confrom01 subtext">
                                SUBMIT
                            </button>
                        </div>

                        {isPopupOpen && (
                            <div className='popup'>
                                {/* Add your popup content here */}
                                <div className='popup-content'>
                                    <span className='close-popup' onClick={() => setPopupOpen(false)}>
                                        ×
                                    </span>
                                    <p>Your popup content goes here.</p>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>

        </>
    );
}