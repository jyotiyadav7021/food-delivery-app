import mongoose from "mongoose";


export const connectDB = async () => {
    (await mongoose.connect('mongodb+srv://jyoo7021:jyoo7021@cluster0.g9y7v.mongodb.net/food-del')).isObjectIdOrHexString(()=> console.log("DB Connected"));
}