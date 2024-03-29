import React, { useState } from 'react';
import './css/forgetpassword.css';
import './css/otp.css';
import OtpInput from 'react-otp-input';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Audio } from 'react-loader-spinner'
import Loader from 'react-loader';


export default function Forgetpasswrod() {

  const [otp, setOtp] = useState('');
  const [forr, setForr] = useState("for")
  const [isloding, setIsloding] = useState(false)

  let otpgenreter = Math.floor(Math.random() * 10000).toString()

  const Formik = useFormik({
    initialValues: {
      email: "",
      otp: otpgenreter
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required(" REQUIRED!"),

    }),
    onSubmit: values => {
      setIsloding(true)
      console.log(values)
      axios.post('http://localhost:8080/forgetpassword', values)
        .then((response) => {
          console.log(values);
          if (response.data == 'something went wrong') {
            toast.error(response.data)
          } else {
            toast.success(response.data)
            setIsloding(false)
            setForr("otp")
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  })
  return (
    <>
      {forr == "for" && <div className='main'>
        <div className='box_ps'>
          <form className="login100-form_011 validate-form" onSubmit={Formik.handleSubmit}>
            <span className="login100-form-title_034 p-b-43">
              FORGETPASSWORD
            </span>
            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input className="input100" type="text" placeholder='Email' name="email" value={Formik.values.email} onChange={Formik.handleChange} />
              <span className="focus-input100"></span>
            </div>
            {Formik.errors.email && Formik.touched.email && (
              <p className='error_massage'>{Formik.errors.email}</p>
            )}

            <div className="container-login100-form-btn">
              {isloding && <Loader
                lines={10}
                length={15}
                width={10}
                radius={20}
                corners={1}
                rotate={0}
                direction={1}
                color="#000"
                speed={1}
                trail={60}
                shadow={false}
                className="spinner"
                zIndex={2e9}
                top="50%"
                left="50%"
                scale={1.0}
                loadedClassName="loadedContent" />}
              <button className="login100-form-btn_confrom" type='submit'>
                forgetpassword
              </button>
            </div>

          </form>
        </div >


        <ToastContainer />
      </div >}

      {
        forr == "otp" && <div className='main'>
          <div className='box_ps'>
            <form className="login100-form_1 validate-form"   >
              <span className="login100-form-title_01">
                OTP
              </span>
              <div class="card-body p-5 text-center">

                <p>Your code was sent to you via email</p>
                <div className='otp-work'>

                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span style={{ width: '8px' }}></span>}
                    renderInput={(props) => <input {...props} />}
                    isInputNum={true}
                    shouldAutoFocus={true}
                    inputStyle={{
                      border: '1px solid transparent',
                      borderRadius: '8px',
                      width: '54px',
                      height: '54px',
                      fontSize: '18px',
                      color: '#000',
                      fontWeight: '400',
                      caretColor: 'blue',
                    }}
                    focusStyle={{
                      border: '1px solid #CFD3DB',
                      outline: 'none',
                    }}
                  />
                </div>

                <div className="container-login100-form-btn">
                  <button className="login100-form-btn_01">
                    VERIFY
                  </button>
                </div>
                <p class="resend text-muted mb-0">
                  Didn't receive code? <a href="">Request again</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      }

      {
        forr == "confrom" &&
        <div className='main'>
          <div className='box_ps'>
            <form className="login100-form_011 validate-form">
              <span className="login100-form-title_034 p-b-43">
                changepassword
              </span>
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input
                  className="input100"
                  type='password'
                  placeholder='new password'
                  name="pass"
                />
                <span className="focus-input100"></span>
              </div>
              <div className="wrap-input100 validate-input" style={{ position: 'relative' }} data-validate="Password is required">
                <input
                  className="input100"
                  type='password'
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
