// import UserLayout from './Layout';
// import '../src/css/catalog.css';
// import React, { useState, useEffect } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
//
// export default function Catalog() {
//     const [businessName, setBusinessName] = useState('');
//     const [editorData, setEditorData] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState('');
//     const [selectedColor, setSelectedColor] = useState('');
//     const [selectedImage, setSelectedImage] = useState(null); // State to store selected image file
//     const [imageUrl, setImageUrl] = useState(''); // State to store the URL of the selected image
//     const [selectedCategoriesList, setSelectedCategoriesList] = useState([]); // State to store selected categories
//
//     const handleReady = (editor) => {
//         // You can store the "editor" and use when it is needed.
//         console.log('Editor is ready to use!', editor);
//     };
//
//     const handleChange = (event, editor) => {
//         console.log(event);
//         const data = editor.getData();
//         setEditorData(data);
//     };
//
//     const handleCategoryChange = (event) => {
//         const category = event.target.value;
//         setSelectedCategory(category);
//
//         // Add the selected category to the list if it's not already present
//         if (!selectedCategoriesList.includes(category)) {
//             setSelectedCategoriesList([...selectedCategoriesList, category]);
//         }
//     };
//
//     const handleBlur = (event, editor) => {
//         console.log('Blur.', editor);
//     };
//
//     const handleFocus = (event, editor) => {
//         console.log('Focus.', editor);
//     };
//
//
//     const handleCategoryChange = (event) => {
//         setSelectedCategory(event.target.value);
//     };
//
//     const handleColorChange = (event) => {
//         setSelectedColor(event.target.value);
//     };
//     // const handleImageChange = (event) => {
//     //     // Accessing the first file selected by the user
//     //     const file = event.target.files[0];
//     //     setSelectedImage(file);
//     // };
//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         setSelectedImage(file);
//
//         // Display the selected image dynamically
//         const reader = new FileReader();
//         reader.onloadend = () => {
//             setImageUrl(reader.result);
//         };
//         reader.readAsDataURL(file);
//     };
//
//     useEffect(() => {
//         // You can perform any additional logic here when businessName or editorData changes
//     }, [businessName, editorData, selectedCategory, selectedColor, selectedImage]);
//     return (
//         <>
//             <UserLayout />
//
//             <div className='main layber'>
//                 <div className='box_ps'>
//                     <form className="login100-form_0111">
//                         <span className="login100-form-title_034 p-b-43">
//                             ADD CATALOG
//                         </span>
//
//
//                         <div className='wrap-input100 validate-input'>
//                             <input class="input100" type="text"
//                                 name="name" placeholder='PRODUCT NAME' />
//                             <span class="focus-input100"></span>
//                         </div>
//                         <br />
//
//                         <CKEditor
//                             editor={ClassicEditor}
//                             data={editorData}
//                             onReady={handleReady}
//                             onChange={handleChange}
//                             onBlur={handleBlur}
//                             onFocus={handleFocus}
//                         />
//                         <br />
//
//                         <div className='wrap-input100 validate-input'>
//                             <input class="input100" type="number"
//                                 name="price" placeholder='PRODUCT PRICE' />
//                             <span class="focus-input100"></span>
//                         </div>
//
//                         <div className='wrap-input100 validate-input'>
//                             <label htmlFor="category">CATEGORY : </label>
//                             <select id="category" name="category" onChange={handleCategoryChange} value={selectedCategory}>
//                                 <option value="">Select a category</option>
//                                 <option value="roundneck">Round Neck</option>
//                                 <option value="polo">Polo</option>
//                                 <option value="v-nack">V-Nack</option>
//                                 {/* Add more categories as needed */}
//                             </select>
//                             <input type="submit" className='ok' />
//                         </div>
//                         <div>
//                             <p >Selected Categories:</p>
//                             <ul>
//                                 {selectedCategoriesList.map((category, index) => (
//                                     <li key={index}>{category}</li>
//                                 ))}
//                             </ul>
//                         </div>
//
//
//                         <div className='wrap-input100 validate-input'>
//                             <label htmlFor="color">COLOR : </label>
//                             <select id="color" name="color" onChange={handleColorChange} value={selectedColor}>
//                                 <option value="">Select a color</option>
//                                 <option value="red">Red</option>
//                                 <option value="blue">Blue</option>
//                                 <option value="green">Green</option>
//                                 {/* Add more colors as needed */}
//                             </select>
//                             <input type="submit" className='ok' />
//                         </div>
//
//                         <div className='wrap-input100 validate-input'>
//                             <label htmlFor="image">UPLOAD IMAGE : </label>
//                             <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} />
//                         </div>
//
//                         {imageUrl && (
//                             <div className='image-preview'>
//                                 <img src={imageUrl} alt='Selected' />
//                             </div>
//                         )}
//
//                         <div className="container-login100-form-btn">
//                             <button className="login100-form-btn_confrom01 subtext">
//                                 SUBMIT
//                             </button>
//                         </div>
//
//
//
//                     </form>
//                 </div>
//             </div>
//
//         </>
//     );
// }

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
    const [selectedImage, setSelectedImage] = useState(null); // State to store selected image file
    const [imageUrl, setImageUrl] = useState(''); // State to store the URL of the selected image
    const [selectedCategoriesList, setSelectedCategoriesList] = useState([]); // State to store selected categories

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
        setSelectedColor(event.target.value);
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

                        <div className='wrap-input100 validate-input'>
                            <label htmlFor="category">CATEGORY : </label>
                            <select id="category" name="category" onChange={handleCategoryChange} value={selectedCategory}>
                                <option value="">Select a category</option>
                                <option value="roundneck">Round Neck</option>
                                <option value="polo">Polo</option>
                                <option value="v-nack">V-Nack</option>
                                {/* Add more categories as needed */}
                            </select>
                            <input type="submit" className='ok' />
                        </div>
                        <div>
                            <p >Selected Categories:</p>
                            <ul>
                                {selectedCategoriesList.map((category, index) => (
                                    <li key={index}>{category}</li>
                                ))}
                            </ul>
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
                            <input type="submit" className='ok' />
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
                </div>
            </div>
        </>
    );
}
