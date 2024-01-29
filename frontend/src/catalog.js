import UserLayout from './Layout';
import '../src/css/catalog.css';
import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Catalog() {
    const [businessName, setBusinessName] = useState('');
    const [editorData, setEditorData] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedCategoriesList, setSelectedCategoriesList] = useState([]); // State to store selected categories
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedColorsList, setSelectedColorList] = useState([]);// State to store selected color
    const [selectedImage, setSelectedImage] = useState(null); // State to store selected image file
    const [imageUrl, setImageUrl] = useState(''); // State to store the URL of the selected image

    const handleReady = (editor) => {
        console.log('Editor is ready to use!', editor);
    };

    const handleChange = (event, editor) => {
        console.log(event);
        const data = editor.getData();
        setEditorData(data);
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setSelectedCategory(category);

        // Add the selected category to the list if it's not already present
        if (!selectedCategoriesList.includes(category)) {
            setSelectedCategoriesList([...selectedCategoriesList, category]);
        }
    };

    const handleColorChange = (event) => {
        const color = event.target.value
        setSelectedColor(color);

        if (!selectedColorsList.includes(color)) {
            setSelectedColorList([...selectedColorsList, color]);
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImageUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };

    useEffect(() => {
        // You can perform any additional logic here when businessName or editorData changes
    }, [businessName, editorData, selectedCategory, selectedColor, selectedImage]);

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
                            <input className="input100" type="text" name="name" placeholder='PRODUCT NAME' />
                            <span className="focus-input100"></span>
                        </div>
                        <br />

                        <CKEditor
                            editor={ClassicEditor}
                            data={editorData}
                            onReady={handleReady}
                            onChange={handleChange}
                        />
                        <br />

                        <div className='wrap-input100 validate-input'>
                            <input className="input100" type="number" name="price" placeholder='PRODUCT PRICE' />
                            <span className="focus-input100"></span>
                        </div>

                        {/* <label htmlFor="category">CATEGORY : </label> */}
                        <div className='wrap-input100 validate-input'>
                            <select className="input100" id="category" name="category" onChange={handleCategoryChange} value={selectedCategory}>
                                <option value="">Select a category</option>
                                <option value="ROUNDNACK">ROUND NACK</option>
                                <option value="POLO">POLO</option>
                                <option value="V-NACK">V-NACK</option>
                                {/* Add more categories as needed */}
                            </select>
                            <span className="focus-input100"></span>
                        </div>
                        <div>
                            {/* <p >Selected Categories:</p> */}
                            <ul className="selected-categories">
                                {selectedCategoriesList.map((category, index) => (
                                    <li className='lidecore' key={index}>{category}</li>
                                ))}
                            </ul>
                        </div>

                        <div className='wrap-input100 validate-input'>
                            <label htmlFor="color">COLOR : </label>
                            <select id="color" name="color" onChange={handleColorChange} value={selectedColor}>
                                <option value="">Select a color</option>
                                <option value="RED">RED</option>
                                <option value="BLUE">BLUE</option>
                                <option value="GREEN">GREEN</option>
                                {/* Add more colors as needed */}
                            </select>
                        </div>
                        <div>
                            {/* <p>Selected Color</p> */}
                            <ul className="selected-categories">
                                {selectedColorsList.map((color, index) => (
                                    <li className='lidecore' key={index}>{color}</li>
                                ))}
                            </ul>
                        </div>

                        <div className='wrap-input100 validate-input'>
                            <label htmlFor="image">UPLOAD IMAGE : </label>
                            <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
                        </div>

                        {imageUrl && (
                            <div className='image-preview'>
                                <img src={imageUrl} alt='Selected' />
                            </div>
                        )}

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn_confrom01 subtext">
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div >
            </div >
        </>
    );
}
