import mongoose from "mongoose";
import nodemailer from 'nodemailer'


const userschema = mongoose.Schema({
      fname: { type: String, require: true },
      lname: { type: String, require: true },
      email: { type: String, unique: true, require: true },
      phone: { type: Number, require: true },
      Company: { type: String, require: true },
      address: { type: String, require: true },
      pincode: { type: Number, require: true },
      city: { type: String, require: true },
      statee: { type: String, require: true },
      country: { type: String, require: true },
      password: { type: String, require: true },
      confirmPassword: { type: String, require: true },
      createdata: { type: Date, require: Date.now }
})

const model = mongoose.model('registration', userschema)


const adddata = async (data) => {
      try {
            const userdata = new model(data)
            const asd = await userdata.save()
            console.log(asd)
            return (asd)

      } catch (error) {
            console.log(error)
            return (error)
      }
}


const checkdata = async (data) => {
      console.log(data)
      try {
            const logindata = await model.find({ $and: [{ email: data.email }, { password: data.password }] })
            console.log(logindata)
            if (logindata && logindata.length > 0) {
                  return 'login successfull'
            } else {
                  return 'something went wrong'
            }
      } catch (error) {
            console.log(error)
            return (error)
      }
}

const checkdata2 = async (data) => {
      console.log(data)
      try {
            const forgetpass = await model.find({ email: data.email })
            console.log(forgetpass)
            if (forgetpass && forgetpass.length > 0) {
                  try {
                        const asd = new model(data)
                        const result = await asd.save()

                        const transporter = nodemailer.createTransport({
                              host: "smtp.gmail.com",
                              port: 465,
                              secure: true,
                              auth: {
                                    user: 'sheladiyanaitik502@gmail.com',
                                    pass: 'wwmfkxusbvopirib'
                              },
                        });
                        const info = await transporter.sendMail({
                              from: '"Maddison Foo Koch 👻" <sheladiyanaitik502@gmail.com>', // sender address
                              to: data.email, // list of receivers
                              subject: "Hello ✔", // Subject line
                              text: data.otp, // plain text body
                              // html body
                        });
                        console.log(result)

                  }
                  catch (error) {
                        console.log(error)
                        return (error)
                  }
                  return 'email  successfull'
            } else {
                  return 'something went wrong'
            }
      } catch (error) {
            console.log(error)
            return error
      }
}
export { adddata, checkdata, checkdata2 }