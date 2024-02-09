import React, { useEffect, useState } from "react"
import MUIDataTable from "mui-datatables";
import UserLayout from "./Layout";
import axios from 'axios';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import '../src/css/viweuser.css'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";



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


    const handaledit = (value) => {
        console.log(value)
    }
    const handaldelete = (value) => {
        console.log(value)
        let obj = { id: value }
        axios.post('http://localhost:8080/delete', obj)
            .then((response) => {
                console.log(response)
                getdata()
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
            name: "_id",
            label: "edit",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => {
                    return (
                        <button className="button_click" onClick={() => handaledit(value)}>
                            <CiEdit />
                        </button>
                    )
                }
            }
        },
        {
            name: "_id",
            label: "Delete",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value) => {
                    return (
                        <button className="button_click" onClick={() => handaldelete(value)}>
                            <MdDelete />
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

