import mongoose from "mongoose";

const datacolor = mongoose.Schema({
    selectedColor: { type: String, require: true },

})

const colormodel = mongoose.model("selectcolor", datacolor)

const addedcolor = async (data) => {
    try {
        const colorcode = new colormodel(data);
        const asd = colorcode.save()
        console.log(asd)
        return (asd)

    } catch (error) {
        console.log(error)
        return (error)
    }
}

const getcolor = async (data) => {
    try {
        const colordd = await colormodel.find();

        console.log(colordd)
        return colordd
    } catch (error) {
        console.log(error)
        return (error)
    }
}
export { addedcolor, getcolor }