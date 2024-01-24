import React from 'react'
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';

export default function Adduser() {
  return (
    <>
      <div class="limiter">
        <div class="container-login100">


          <form class="validate-form login100-form1_ad " >
            <span class="login100-form-title p-b-43">
              ADD USER
            </span>

            <div className="row">
              <div className="col-md-6">
                <div className="wrap-input100 validate-input" data-validate="First Name is required">
                  <input className="input100" type="text" placeholder="First Name" name="fname" />
                  <span className="focus-input100"></span>
                </div>
              </div>

              <div className="col-md-6">
                <div className="wrap-input100 validate-input" data-validate="Last Name is required">
                  <input className="input100" type="text" placeholder="Last Name" name="lname" />
                  <span className="focus-input100"></span>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  <input class="input100" type="text" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    name="email" placeholder='Email' />
                  <span class="focus-input100"></span>
                </div>
              </div>

              <div className="col-md-6">
                <div class="wrap-input100 validate-input" data-validate="Valid phone number is required">
                  <input class="input100" type="tel" pattern="^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$"
                    maxLength="10" placeholder='Phone Number' name="phone" />
                  <span class="focus-input100"></span>
                </div>
              </div >
            </div >


            <div class="wrap-input100 validate-input" data-validate="business name is required">
              <input class="input100" type="text" placeholder='business name' name="business" />
              <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate="Address is required">
              <input class="input100" type="text" placeholder='Address' name="address" />
              <span class="focus-input100"></span>
            </div>





            <div className="row">
              <div className="col-md-6">
                <div class="wrap-input100 validate-input" data-validate="Password is required">
                  <input class="input100" type="password" placeholder='Password' name="password" />
                  <span class="focus-input100"></span>
                </div>
              </div>

              <div className="col-md-6">
                <div class="wrap-input100 validate-input" data-validate="Confirm Password is required">
                  <input class="input100" type="password" placeholder='Confirm Password' name="confirmPassword" />
                  <span class="focus-input100"></span>
                </div>
              </div>
            </div>


            <div class="container-login100-form-btn">
              <button class="login100-form-btn">
                Submit
              </button>
            </div>
           
          
          </form>
        </div>

      </div>

    </>
  )
}
