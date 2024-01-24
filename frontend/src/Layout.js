import React from 'react'
import Sidebar from './Sidebar';
export default function UserLayout(prop) {
    return (
        <>
            <Sidebar />{prop.childern}
        </>

    )
}
