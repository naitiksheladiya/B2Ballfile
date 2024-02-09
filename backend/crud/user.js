// import mongoose from "mongoose";
// import nodemailer from 'nodemailer'

// const userschema = mongoose.Schema({
//       fname: { type: String, require: true },
//       lname: { type: String, require: true },
//       email: { type: String, unique: true },
//       phone: { type: Number, require: true },
//       Company: { type: String, require: true },
//       address: { type: String, require: true },
//       pincode: { type: Number, require: true },
//       city: { type: String, require: true },
//       statee: { type: String, require: true },
//       country: { type: String, require: true },
//       password: { type: String, require: true },
//       confirmPassword: { type: String, require: true },
//       createdata: { type: Date, require: Date.now }
// })

// const model = mongoose.model('registration', userschema)

// const adddata = async (data) => {
//       try {
//             const userdata = new model(data)
//             const asd = await userdata.save()
//             console.log(asd)
//             return (asd)
//       } catch (error) {
//             console.log(error)
//             return (error)
//       }
// }

// const checkdata = async (data) => {
//       console.log(data)
//       try {
//             const logindata = await model.find({ $and: [{ email: data.email }, { password: data.password }] })
//             console.log(logindata)
//             if (logindata && logindata.length > 0) {
//                   return 'login successfull'
//             } else {
//                   return 'something went wrong'
//             }
//       } catch (error) {
//             console.log(error)
//             return (error)
//       }
// }

// const checkdata2 = async (data) => {
//       console.log(data)
//       try {
//             const forgetpass = await model.find({ email: data.email })
//             console.log(forgetpass)
//             if (forgetpass && forgetpass.length > 0) {
//                   try {
//                         const asd = new model(data)
//                         const result = await asd.save()

//                         const transporter = nodemailer.createTransport({
//                               host: "smtp.gmail.com",
//                               port: 465,
//                               secure: true,
//                               auth: {
//                                     user: 'krishnavaghasiya19@gmail.com',
//                                     pass: 'zqwlyxwognutsoco'
//                               },
//                         });
//                         const info = await transporter.sendMail({
//                               from: '"Maddison Foo Koch 👻" <krishnavaghasiya19@gmail.com>', // sender address
//                               to: data.email, // list of receivers
//                               subject: "Hello ✔", // Subject line
//                               text: data.otp, // plain text body
//                               // html body
//                         });
//                         console.log(result)
//                   }
//                   catch (error) {
//                         console.log(error)
//                         return (error)
//                   }
//                   return 'email  successfull'
//             } else {
//                   return 'something went wrong'
//             }
//       } catch (error) {
//             console.log(error)
//             return error
//       }
// }

// export { adddata, checkdata, checkdata2 }


import mongoose from "mongoose";
import nodemailer from 'nodemailer'

const userschema = mongoose.Schema({
      fname: { type: String, required: true },
      lname: { type: String, required: true },
      email: { type: String, unique: true, required: true }, // Ensure email is unique
      phone: { type: Number, required: true },
      Company: { type: String, required: true },
      address: { type: String, required: true },
      pincode: { type: Number, required: true },
      city: { type: String, required: true },
      statee: { type: String, required: true },
      country: { type: String, required: true },
      password: { type: String, required: true },
      confirmPassword: { type: String, required: true },
      createdata: { type: Date, default: Date.now } // Use default for createdAt
})

const model = mongoose.model('registration', userschema)

const adddata = async (data) => {
      try {
            const userdata = new model(data)
            const asd = await userdata.save()
            console.log(asd)
            return asd;
      } catch (error) {
            console.log(error)
            return error;
      }
}

const checkdata = async (data) => {
      console.log(data)
      try {
            const logindata = await model.findOne({ email: data.email, password: data.password }) // Use findOne for login
            console.log(logindata)
            if (logindata) {
                  return 'login successful';
            } else {
                  return 'incorrect email or password';
            }
      } catch (error) {
            console.log(error)
            return error;
      }
}

const checkdata2 = async (data) => {
      console.log(data)
      try {
            const forgetpass = await model.findOne({ email: data.email })
            console.log(forgetpass)
            if (forgetpass) {
                  // Generate OTP logic here and send email
                  const otp = otpverify(); // Implement your OTP generation logic
                  try {
                        const updatedUser = await model.findOneAndUpdate({ email: data.email }, { otp: otp }, { new: true });
                        const transporter = nodemailer.createTransport({
                              host: "smtp.gmail.com",
                              port: 465,
                              secure: true,
                              auth: {
                                    user: 'krishnavaghasiya19@gmail.com',
                                    pass: 'zqwlyxwognutsoco'
                              },
                        });
                        const info = await transporter.sendMail({
                              from: '"Maddison Foo Koch 👻" <krishnavaghasiya19@gmail.com>',
                              to: data.email,
                              subject: "Password Reset OTP",
                              text: `Your OTP for password reset is: ${data.otp}`,
                        });
                        console.log(info)
                        return 'email sent successfully';
                  }
                  catch (error) {
                        console.log(error)
                        return error;
                  }
            } else {
                  return 'email not found';
            }
      } catch (error) {
            console.log(error)
            return error;
      }
}


const otpverify = async (data) => {
      try {
            await console.log(data)
            // const forgetpass = await model.findOne({ email: data.email })
            // console.log(forgetpass)r4
      } catch (error) {
            console.log(error)
            return error;
      }
}


export { adddata, checkdata, checkdata2, otpverify };
