import React from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import '../src/css/Login.css';
import img1 from './images/pexels-lisa-fotios-1957478.jpg';
import googleImage from './images/google.png';

export default function Login() {
  return (
    <div className="limiter">
      <div className="container-login100">
        <div className="wrap-login100">
          <form className="login100-form validate-form">
            <span className="login100-form-title p-b-43">
              LOGIN
            </span>
            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input className="input100" type="text" placeholder='Email' name="email" />
              <span className="focus-input100"></span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Password is required">
              <input className="input100" type="password" placeholder='Password' name="pass" />
              <span className="focus-input100"></span>
            </div>
            <div className="flex-sb-m w-full p-t-3 p-b-32">
              <div>
                <a href="#" className="txt1">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn">
                Login
              </button>
            </div>
            <div className="text-center p-t-46 p-b-20">
              <span className="txt2">
                or sign up using
              </span>
            </div>
            <div className="login100-form-social flex-c-m">
              <a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
                <FaFacebook />
              </a>
              <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
                <FaWhatsapp />
              </a>
              <a href="#" className="login100-form-social-item flex-c-m bg22 m-r-5">
                {/* <FaGoogle /> */}
                <img src={googleImage} alt="Google" className="go-1" />
              </a>
            </div>
          </form>
          <div className="login100-more" style={{ backgroundImage: `url(${img1})` }}>
          </div>
        </div>
      </div >
    </div >
  );
}
