import mongoose from "mongoose";

const userschema = mongoose.Schema({
      fastname: { type: String, require: true },
      lastname: { type: String, require: true },
      email: { type: String, require: true },
      phonenumber: { type: Number, require: true },
      Company: { type: String, require: true },
      address: { type: String, require: true },
      pincode: { type: Number, require: true },
      city: { type: String, require: true },
      statee: { type: String, require: true },
      country: { type: String, require: true },
      password: { type: String, require: true },
      confrompassword: { type: String, require: true },
      createdata: {}
})

const model = mongoose.model('registration', userschema)


const adddata = async (data) => {
      try {
            const userdata = new model(data)
            const asd = await userdata.save()
            console.log(asd)
            return ("data  succesfully")
      } catch (error) {
            console.log(error)
            return (error)
      }
}



export { adddata }