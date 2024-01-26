import mongoose from "mongoose";

const userschema = mongoose.Schema({
      fname: { type: String, require: true },
      lname: { type: String, require: true },
      email: { type: String, require: true },
      phone: { type: Number, require: true },
      Company: { type: String, require: true },
      address: { type: String, require: true },
      pincode: { type: Number, require: true },
      city: { type: String, require: true },
      statee: { type: String, require: true },
      country: { type: String, require: true },
      password: { type: String, require: true },
      confirmPassword: { type: String, require: true },
      createdata: { type: Date, require: Date.now() }
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



export { adddata }