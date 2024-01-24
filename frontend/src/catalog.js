import UserLayout from './Layout'
import '../src/css/catalog.css';
import React, { useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function catalog() {

    const handleReady = (editor) => {
        // Add your custom CSS class to the CKEditor element
        const editorElement = editor.ui.view.editable.element;
        editorElement.classList.add('ckbox');

        // You can store the "editor" and use it when needed.
        console.log('Editor is ready to use!', editor);
    };

    const handleChange = (event, editor) => {
        console.log(event);
    };

    const handleBlur = (event, editor) => {
        console.log('Blur.', editor);
    };

    const handleFocus = (event, editor) => {
        console.log('Focus.', editor);
    };

    // Cleanup function (optional) to remove event listeners or do other cleanup.

    return (
        <>
            <UserLayout />
            <div className='container layber'>
                <div className="App">
                    <CKEditor
                        editor={ClassicEditor}
                        data="<p>Hello from CKEditor&nbsp;5!</p>"
                        onReady={handleReady}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                </div>
            </div>
        </>
    )
}
