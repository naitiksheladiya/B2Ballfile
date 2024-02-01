import mongoose from "mongoose";

const adduserschema = mongoose.Schema({
    fname: { type: String, require: true },
    lname: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    phone: { type: Number, require: true },
    business: { type: String, require: true },
    address: { type: String, require: true },
    password: { type: String, require: true },
    confirmPassword: { type: String, require: true },

})


const adduser = mongoose.model('addusre', adduserschema)

const adddata = async (data) => {
    try {
        const adduserdaata = new adduser(data)
        const asd = await adduserdaata.save()
        console.log(asd)
        return (asd)

    } catch (error) {
        console.log(error)
        return (error)
    }
}

export { adddata }