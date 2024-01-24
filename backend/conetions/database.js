import mongoose from "mongoose";

const dbcollection = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/owanrdata')
        .then(() => console.log('Connected!'));
} 


export default dbcollection ;