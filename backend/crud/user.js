import mongoose from "mongoose";

const userschema = mongoose.Schema({
      fname: { type: String, require: true },
      lname: { type: String, require: true },
      email: { type: String, require: true, unique: true },
      phone: { type: Number, require: true },
      Company: { type: String, require: true },
      address: { type: String, require: true },
      pincode: { type: Number, require: true },
      city: { type: String, require: true },
      statee: { type: String, require: true },
      country: { type: String, require: true },
      password: { type: String, require: true },
      confirmPassword: { type: String, require: true },
      createdata: { type: Date, require: Date() }
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

export { adddata, checkdata }