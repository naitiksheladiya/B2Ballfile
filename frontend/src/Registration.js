import React, { useState } from 'react'
import '../src/css/Registration.css'
import img1 from './images/pexels-lisa-fotios-1957478.jpg'
import { Form } from 'react-router-dom'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import googleImage from './images/google.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Registration() {
  const [fastname, setFastname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [phonenumber, setPhonenumber] = useState('')
  const [Company, setCompany] = useState('')
  const [address, setAddress] = useState('')
  const [pincode, setPincode] = useState('')
  const [city, setCity] = useState('')
  const [statee, setStatee] = useState('')
  const [country, setCountry] = useState('')
  const [password, setPassword] = useState('')
  const [confrompassword, setConfromPassword] = useState('')
  const [adddata, setAdddata] = useState([])

  const hendalfastname = (e) => {
    setFastname(e.target.value)
  }

  const hendallastname = (e) => {
    setLastname(e.target.value)
  }
  const hendalemail = (e) => {
    setEmail(e.target.value)
  }
  const hendalphonenumber = (e) => {
    setPhonenumber(e.target.value)
  }

  const hendalcompanyname = (e) => {
    setCompany(e.target.value)
  }

  const hendaladdress = (e) => {
    setAddress(e.target.value)
  }

  const hendalpincode = (e) => {
    setPincode(e.target.value)
  }
  const hendalcity = (e) => {
    setCity(e.target.value)
  }
  const hendalstate = (e) => {
    setStatee(e.target.value)
  }

  const hendalcountry = (e) => {
    setCountry(e.target.value)
  }

  const hendalpassword = (e) => {
    setPassword(e.target.value)
  }
  const hendalconfrom = (e) => {
    setConfromPassword(e.target.value)
  }


  const hendalsubmit = () => {
    let ownerdata = {
      fastname, lastname, email, phonenumber, Company, address, pincode,
      city, statee, country, password, confrompassword,
      createdate: Date.now()
    }
    axios.post('http://localhost:8080/registration', ownerdata)
      .then((response) => {
        console.log(response.data);
        setAdddata()
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
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
                    <input className="input100" type="text" onChange={hendalfastname} placeholder="First Name" name="fname" />
                    <span className="focus-input100"></span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="wrap-input100 validate-input" data-validate="Last Name is required">
                    <input className="input100" type="text" onChange={hendallastname} placeholder="Last Name" name="lname" />
                    <span className="focus-input100"></span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input className="input100" type="text"
                      name="email" onChange={hendalemail} placeholder='Email' />
                    <span className="focus-input100"></span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="wrap-input100 validate-input" data-validate="Valid phone number is required">
                    <input className="input100" type="tel" pattern="^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$"
                      maxLength="10" onChange={hendalphonenumber} placeholder='Phone Number' name="phone" />
                    <span className="focus-input100"></span>
                  </div>
                </div >
              </div >


              <div className="wrap-input100 validate-input" data-validate="Company name is required">
                <input className="input100" type="text" onChange={hendalcompanyname} placeholder='Company name' name="Company" />
                <span className="focus-input100"></span>
              </div>

              <div className="wrap-input100 validate-input" data-validate="Address is required">
                <input className="input100" type="text" onChange={hendaladdress} placeholder='Address' name="address" />
                <span className="focus-input100"></span>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="wrap-input100 validate-input" data-validate="Pincode is required">
                    <input
                      className="input100"
                      onChange={hendalpincode}
                      type="tel"
                      placeholder='Pincode'
                      name="pincode"
                      pattern="[0-9]{6}"  // Allow only numbers and enforce a 6-digit pincode
                      maxLength="6"       // Set maximum length to 6
                      title="Pincode must be a 6-digit number"
                    />
                    <span className="focus-input100"></span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="wrap-input100 validate-input" data-validate="City is required">
                    <input className="input100" type="text" onChange={hendalcity} placeholder='City' name="City" />
                    <span className="focus-input100"></span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="wrap-input100 validate-input" data-validate="State is required">
                    <input className="input100" type="text" onChange={hendalstate} placeholder='State' name="State" />
                    <span className="focus-input100"></span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="wrap-input100 validate-input" data-validate="Country is required">
                    <select className="input100" name="country" onChange={hendalcountry}>
                      <option value="India" selected>India</option>
                      <option value="USA">USA</option>
                      <option value="Canada">Canada</option>
                      <option value="Germany">Germany</option>
                      {/* Add more countries as needed */}
                    </select>
                    <span className="focus-input100"></span>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <input className="input100" type="password" onChange={hendalpassword} placeholder='Password' name="password" />
                    <span className="focus-input100"></span>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="wrap-input100 validate-input" data-validate="Confirm Password is required">
                    <input className="input100" type="password" onChange={hendalconfrom} placeholder='Confirm Password' name="confirmPassword" />
                    <span className="focus-input100"></span>
                  </div>
                </div>
              </div>


              <div className="container-login100-form-btn">
                <button className="login100-form-btn" onClick={hendalsubmit}>
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
    </>
  )
}
