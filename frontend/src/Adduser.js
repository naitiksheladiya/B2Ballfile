import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { useFormik, resetForm } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import UserLayout from './Layout';

export default function Adduser() {
  const [id, setId] = useState('')
  useEffect(() => {
    const id = localStorage.getItem('id')
    setId(id)
    console.log(id)
  }, [])

  const navigate = useNavigate();
  const Formik = useFormik({

    initialValues: {
      fastname: "",
      lname: "",
      email: "",
      phone: "",
      businessname: "",
      address: "",
      password: "",
      confirmPassword: "",
      owanrid: id,

    },

    validationSchema: Yup.object({
      fastname: Yup.string().required(" REQUIRED!"),
      lname: Yup.string().required(" REQUIRED!"),
      email: Yup.string().email("Invalid email format").required(" REQUIRED!").matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g, "email is not valid"),
      phone: Yup.string().required('REQUIRED!')
        .matches(/^\d{10}$/, 'Contact number must be a valid 10-digit number'),
      businessname: Yup.string().required("REQUIRED!"),
      address: Yup.string().required(" REQUIRED!"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("REQUIRED!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("REQUIRED!")
    }),

    onSubmit: values => {
      console.log(values)
      axios.post('http://localhost:8080/adduser', values)
        .then((response) => {
          console.log(response.data);
          if (response.data.email == values.email) {
            toast.success("successfully")
            // navigate('/login')
          } else {
            toast.error("email is all ready add")
          }
        })
        .catch((error) => {
          console.log(error);

        });
    }


  })
  return (
    <>
      <UserLayout />
      <div className="limiter">
        <div className="container-login100">


          <form className="validate-form login100-form1_ad " onSubmit={Formik.handleSubmit} >
            <span className="login100-form-title p-b-43">
              ADD USER
            </span>

            <div className="row">
              <div className="col-md-6">
                <div className="wrap-input100 validate-input" data-validate="First Name is required">
                  <input className="input100" type="text" value={Formik.values.fastname} onChange={Formik.handleChange} placeholder="First Name" name="fastname" />
                  <span className="focus-input100"></span>
                </div>
                {Formik.errors.fastname && Formik.touched.fastname && (
                  <p className='error_massage'>{Formik.errors.fastname}</p>
                )}
              </div>

              <div className="col-md-6">
                <div className="wrap-input100 validate-input" data-validate="Last Name is required">
                  <input className="input100" type="text" value={Formik.values.lname} onChange={Formik.handleChange} placeholder="Last Name" name="lname" />
                  <span className="focus-input100"></span>
                </div>
                {Formik.errors.lname && Formik.touched.lname && (
                  <p className='error_massage'>{Formik.errors.lname}</p>
                )}

              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  <input className="input100" type="text" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    name="email" value={Formik.values.email} onChange={Formik.handleChange} placeholder='Email' />
                  <span className="focus-input100"></span>
                </div>
                {Formik.errors.email && Formik.touched.email && (
                  <p className='error_massage'>{Formik.errors.email}</p>
                )}

              </div>

              <div className="col-md-6">
                <div className="wrap-input100 validate-input" data-validate="Valid phone number is required">
                  <input className="input100" type="tel" pattern="^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$"
                    maxLength="10" value={Formik.values.phone} onChange={Formik.handleChange} placeholder='Phone Number' name="phone" />
                  <span className="focus-input100"></span>
                </div>
                {Formik.errors.phone && Formik.touched.phone && (
                  <p className='error_massage'>{Formik.errors.phone}</p>
                )}
              </div >

            </div >


            <div className="wrap-input100 validate-input" data-validate="business name is required">
              <input className="input100" type="text" value={Formik.values.businessname} onChange={Formik.handleChange} placeholder='business name' name="businessname" />
              <span className="focus-input100"></span>
            </div>
            {Formik.errors.businessname && Formik.touched.businessname && (
              <p className='error_massage'>{Formik.errors.businessname}</p>
            )}

            <div className="wrap-input100 validate-input" data-validate="Address is required">
              <input className="input100" type="text" value={Formik.values.address} onChange={Formik.handleChange} placeholder='Address' name="address" />
              <span className="focus-input100"></span>
            </div>
            {Formik.errors.address && Formik.touched.address && (
              <p className='error_massage'>{Formik.errors.address}</p>
            )}





            <div className="row">
              <div className="col-md-6">
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <input className="input100" type="password" value={Formik.values.password} onChange={Formik.handleChange} placeholder='Password' name="password" />
                  <span className="focus-input100"></span>
                </div>

                {Formik.errors.password && Formik.touched.password && (
                  <p className='error_massage'>{Formik.errors.password}</p>
                )}
              </div>

              <div className="col-md-6">
                <div className="wrap-input100 validate-input" data-validate="Confirm Password is required">
                  <input className="input100" type="password" value={Formik.values.confirmPassword} onChange={Formik.handleChange} placeholder='Confirm Password' name="confirmPassword" />
                  <span className="focus-input100"></span>
                </div>
                {Formik.errors.confirmPassword && Formik.touched.confirmPassword && (
                  <p className='error_massage'>{Formik.errors.confirmPassword}</p>
                )}
              </div>
            </div>


            <div className="container-login100-form-btn">
              <button className="login100-form-btn" type='submit'>
                Submit
              </button>
            </div>


          </form>
        </div>
        <ToastContainer />
      </div>

    </>
  )
}
