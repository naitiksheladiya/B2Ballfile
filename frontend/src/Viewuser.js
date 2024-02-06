import React, { useEffect, useState } from "react"
import MUIDataTable from "mui-datatables";
import UserLayout from "./Layout";
import axios from 'axios';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';


export default function Viewuser() {

    const [data, setData] = useState([])

    const muiCache = createCache({
        key: 'mui-datatables',
        prepend: true
    })

    useEffect(() => {
        getdata();
    }, [])
    const getdata = () => {
        axios.get('http://localhost:8080/viweuser')
            .then((response) => {
                console.log(response.data)
                setData(response.data)
                console.log(data)
            })
            .catch((error) => {
                console.log(error);

            });
    }
    
    const columns = [
        {
            name: "fname",
            label: "fastName",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "lname",
            label: "lastname",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "email",
            label: "email",
            options: {
                filter: true,
                sort: false,
            }
        },

        {
            name: "businessname",
            label: "businessname",
            options: {
                filter: true,
                sort: false,
            }
        },

        {
            name: "edit",
            label: "edit",
            options: {
                filter: true,
                sort: false,
                customBodyRender: () => {
                    return (
                        <button style={{ border: '1px solid black', padding: '5px' }} onClick={() => console.log('Edit')}>
                            Edit
                        </button>
                    )
                }
            }
        },
        {
            name: "delete",
            label: "Delete",
            options: {
                filter: true,
                sort: false,
                customBodyRender: () => {
                    return (
                        <button style={{ border: '1px solid black', padding: '5px' }} onClick={() => console.log('Delete')}>
                            Delete
                        </button>
                    )
                }
            }
        },
    ];



    const options = {
        filterType: 'checkbox',
    };
    return (
        <>

            <UserLayout />
            <div className='layber'>

                <CacheProvider value={muiCache} >
                    <ThemeProvider theme={createTheme()}>
                        <MUIDataTable
                            title={"USER LIST"}
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </ThemeProvider>
                </CacheProvider >
            </div>
        </>
    )
}

