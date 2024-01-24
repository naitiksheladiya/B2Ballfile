import React, { useState } from 'react'
import './css/forgetpassword.css'
import './css/otp.css'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import OtpInput from 'react-otp-input';

export default function Forgetpasswrod() {
  const [otp, setOtp] = useState('');
  const [forr, setForr] = useState("for")
  const forget = () => {
    setForr("otp")
  }
  const otpverify = () => {
    setForr("confrom")
  }
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <>

      {forr == "for" && <div className='main'>
        <div className='box_ps'> 
          <form className="login100-form_011 validate-form">
            <span className="login100-form-title_034 p-b-43">
              FORGETPASSWORD
            </span>
            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input className="input100" type="text" placeholder='Email' name="email" />
              <span className="focus-input100"></span>
            </div>
            <div className="container-login100-form-btn">
              <button className="login100-form-btn_confrom" onClick={forget}>
                forgetpassword
              </button>
            </div>
          </form>
        </div>
      </div>}

      {forr == "otp" && <div className='main'>
        <div className='box_ps'>
          <form className="login100-form_1 validate-form">
            <span className="login100-form-title_01">
              OTP
            </span>
            <div class="card-body p-5 text-center">

              <p>Your code was sent to you via email</p>

              <div class="otp-field mb-4">

                <input type="number" />
                <span className="focus-input100"></span>
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
                <input type="number" />
              </div>


              <div className="container-login100-form-btn">
                <button className="login100-form-btn_01" onClick={otpverify}>
                  VERIFY
                </button>
              </div>
              <p class="resend text-muted mb-0">
                Didn't receive code? <a href="">Request again</a>
              </p>
            </div>

          </form>
        </div>
      </div>}
      {forr == "confrom" &&

        <div className='main'>
          <div className='box_ps'>
            <form className="login100-form_011 validate-form">
              <span className="login100-form-title_034 p-b-43">
                changepassword
              </span>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input
                  className="input100"
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder='new password'
                  name="pass"
                />
                <span className="focus-input100"></span>
              </div>
              <div className="wrap-input100 validate-input" style={{ position: 'relative' }} data-validate="Password is required">
                <input
                  className="input100"
                  type={passwordVisible ? 'text' : 'password'}
                  placeholder='conform Password'
                  name="pass"
                />
                <span className="focus-input100"></span>
              </div>
              <div className="container-login100-form-btn">
                <button className="login100-form-btn_confrom">
                  changepassword
                </button>
              </div>
            </form>
          </div>
        </div>
      }
    </>
  )
}
