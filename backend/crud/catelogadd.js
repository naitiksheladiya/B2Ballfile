import mongoose from "mongoose";

const datacatelog = mongoose.Schema({
    selectedCategory: { type: String, require: true },

})

const categorymodel = mongoose.model("selectedCategory", datacatelog)

const addedcategory = (data) => {
    try {
        const categorycode = new categorymodel(data);
        const dsa = categorycode.save()
        console.log(dsa)
        return (dsa)

    } catch (error) {
        console.log(error)
        return (error)
    }
}

const getcategory = async (data) => {
    try {
        const catelogdd = await categorymodel.find();

        console.log(catelogdd)
        return catelogdd
    } catch (error) {
        console.log(error)
        return (error)
    }
}

export { addedcategory, getcategory }