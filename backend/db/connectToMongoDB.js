import mongoose, { mongo } from "mongoose";

const connectToMongoDB =async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI,{
            dbName: 'chatApp'
        });
        console.log('connected to Mongo DB');
    } catch (error) {
        console.log("Error while connecting to mongo Db :",error);
        
    }
}

export default connectToMongoDB;

//mongodb://localhost:27017/?authSource=TakeMeHome
