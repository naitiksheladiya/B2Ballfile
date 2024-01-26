import React, { useState } from 'react'
import '../src/css/Registration.css'
import img1 from './images/pexels-lisa-fotios-1957478.jpg'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import googleImage from './images/google.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Registration() {

  const [adddata, setAdddata] = useState([])


  const Formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      Company: "",
      address: "",
      pincode: "",
      city: "",
      statee: "",
      country: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: Yup.object({
      fname: Yup.string().required(" REQUIRED!"),
      lname: Yup.string().required(" REQUIRED!"),
      email: Yup.string().email("Invalid email format").required(" REQUIRED!"),
      phone: Yup.string().required('REQUIRED!')
        .matches(/^\d{10}$/, 'Contact number must be a valid 10-digit number'),
      Company: Yup.string().required("REQUIRED!"),
      address: Yup.string().required(" REQUIRED!"),
      pincode: Yup.string().required("REQUIRED!"),
      city: Yup.string().required("REQUIRED!"),
      country: Yup.string().required("REQUIRED!"),
      statee: Yup.string().required("REQUIRED!"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("REQUIRED!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("REQUIRED!")
    }),
    onSubmit: values => {
      toast(" successfully")
      console.log(values)
      axios.post('http://localhost:8080/registration', values)
        .then((response) => {
          console.log(response.data);
          setAdddata()
        })
        .catch((error) => {
          console.log(error);
        });
    }

  });


  return (
    <>
      <form onSubmit={Formik.handleSubmit} >
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100" >
              <div className=" login100-more1" style={{ backgroundImage: `url(${img1})` }}>

              </div>
              <div className="validate-form login100-form1 " >
                <span className="login100-form-title p-b-43">
                  SIGN IN
                </span>
                <div className="row">
                  <div className="col-md-6">
                    <div className="wrap-input100 validate-input" data-validate="First Name is required">
                      <input className="input100" type="text" onChange={Formik.handleChange} placeholder="First Name" name="fname" value={Formik.values.fname} />
                      <span className="focus-input100"></span>
                    </div>
                    {Formik.errors.fname && Formik.touched.fname && (
                      <p className='error_massage'>{Formik.errors.fname}</p>
                    )}

                  </div>

                  <div className="col-md-6">
                    <div className="wrap-input100 validate-input" data-validate="Last Name is required">
                      <input className="input100" type="text" onChange={Formik.handleChange} placeholder="Last Name" name="lname" value={Formik.values.lname} />
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
                      <input className="input100" type="text"
                        name="email" onChange={Formik.handleChange} placeholder='Email' value={Formik.values.email} />
                      <span className="focus-input100"></span>
                    </div>
                    {Formik.errors.email && Formik.touched.email && (
                      <p className='error_massage'>{Formik.errors.email}</p>
                    )}
                  </div>

                  <div className="col-md-6">
                    <div className="wrap-input100 validate-input" data-validate="Valid phone number is required">
                      <input className="input100" type="tel" pattern="^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$"
                        maxLength="10" onChange={Formik.handleChange} placeholder='Phone Number' name="phone" value={Formik.values.phone} />
                      <span className="focus-input100"></span>
                    </div>
                    {Formik.errors.phone && Formik.touched.phone && (
                      <p className='error_massage'>{Formik.errors.phone}</p>
                    )}
                  </div >
                </div >


                <div className="wrap-input100 validate-input" data-validate="Company name is required">
                  <input className="input100" type="text" onChange={Formik.handleChange} placeholder='Company name' name="Company" value={Formik.values.Company} />
                  <span className="focus-input100"></span>
                </div>
                {Formik.errors.Company && Formik.touched.Company && (
                  <p className='error_massage'>{Formik.errors.Company}</p>
                )}

                <div className="wrap-input100 validate-input" data-validate="Address is required">
                  <input className="input100" type="text" onChange={Formik.handleChange} placeholder='Address' name="address" value={Formik.values.address} />
                  <span className="focus-input100"></span>
                </div>
                {Formik.errors.address && Formik.touched.address && (
                  <p className='error_massage'>{Formik.errors.address}</p>
                )}

                <div className="row">
                  <div className="col-md-6">
                    <div className="wrap-input100 validate-input" data-validate="Pincode is required">
                      <input
                        className="input100"
                        onChange={Formik.handleChange}
                        type="tel"
                        placeholder='Pincode'
                        name="pincode"
                        value={Formik.values.pincode}
                        pattern="[0-9]{6}"  // Allow only numbers and enforce a 6-digit pincode
                        maxLength="6"       // Set maximum length to 6
                        title="Pincode must be a 6-digit number"
                      />
                      <span className="focus-input100"></span>
                    </div>
                    {Formik.errors.pincode && Formik.touched.pincode && (
                      <p className='error_massage'>{Formik.errors.pincode}</p>
                    )}

                  </div>

                  <div className="col-md-6">
                    <div className="wrap-input100 validate-input" data-validate="City is required">
                      <input className="input100" type="text" onChange={Formik.handleChange} placeholder='City' name="city" value={Formik.values.city} />
                      <span className="focus-input100"></span>
                    </div>
                    {Formik.errors.city && Formik.touched.city && (
                      <p className='error_massage'>{Formik.errors.city}</p>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="wrap-input100 validate-input" data-validate="Statee is required">
                      <input className="input100" type="text" onChange={Formik.handleChange} placeholder='State' name="statee" value={Formik.values.statee} />
                      <span className="focus-input100"></span>
                    </div>
                    {Formik.errors.statee && Formik.touched.statee && (
                      <p className='error_massage'>{Formik.errors.statee}</p>
                    )}
                  </div>

                  <div className="col-md-6">
                    <div className="wrap-input100 validate-input" data-validate="Country is required">
                      <select className="input100" name="country" onChange={Formik.handleChange} value={Formik.values.country}>
                        <option value="India" selected>India</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="Germany">Germany</option>
                      </select>
                      <span className="focus-input100"></span>
                    </div>
                    {Formik.errors.country && Formik.touched.country && (
                      <p className='error_massage'>{Formik.errors.country}</p>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="wrap-input100 validate-input" data-validate="Password is required">
                      <input className="input100" type="password" onChange={Formik.handleChange} placeholder='Password' name="password" value={Formik.values.password} />
                      <span className="focus-input100"></span>
                    </div>
                    {Formik.errors.password && Formik.touched.password && (
                      <p className='error_massage'>{Formik.errors.password}</p>
                    )}
                  </div>

                  <div className="col-md-6">
                    <div className="wrap-input100 validate-input" data-validate="Confirm Password is required">
                      <input className="input100" type="password" onChange={Formik.handleChange} placeholder='Confirm Password' name="confirmPassword" value={Formik.values.confirmPassword} />
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
                <div className="text-center p-t-46 p-b-20">
                  <span className="txt2">
                    or sign up using
                  </span>
                </div>
                <div className="login100-form-social flex-c-m">
                  <a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
                    <i className="fa fa-facebook-f" aria-hidden="true"></i>
                    <FaFacebook />
                  </a>
                  <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                    <FaWhatsapp />
                  </a>
                  <a href="#" className="login100-form-social-item flex-c-m bg22 m-r-5">
                    <i className="fa fa-facebook-f" aria-hidden="true"></i>

                    <img src={googleImage} alt="Google" className="go-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}
