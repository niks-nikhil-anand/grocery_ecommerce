import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const DB_OPTION = {
            user: 'eCommerce',
            pass: 'Nikhil1roy',
            authSource: "admin", 
            dbName:'eCommerce'
        };
        await mongoose.connect(process.env.MONGODB_URI, DB_OPTION);
        console.log("Database connected Successfully....");
    } catch (error) {
        console.log(error);
    }
};
export default connectDB;
