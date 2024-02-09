import mongoose from "mongoose";

const adduserschema = mongoose.Schema({
    fname: { type: String, require: true },
    lname: { type: String, require: true },
    email: { type: String, unique: true, require: true },
    phone: { type: Number, require: true },
    businessname: { type: String, require: true },
    address: { type: String, require: true },
    password: { type: String, require: true },
    confirmPassword: { type: String, require: true },
    owenerid: { type: String, require: true }
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


const getdata = async (data) => {
    try {
        const asd = await adduser.find(data)
        console.log(asd)
        return asd
    } catch (error) {
        console.log(error)
        return error
    }
}

const deletedata = async (data) => {
    try {
        const datadelete = await adduser.findByIdAndDelete(data)
        console.log(datadelete)
    } catch (error) {
        console.log(error)
        return error
    }
}

export { adddata, getdata, deletedata }