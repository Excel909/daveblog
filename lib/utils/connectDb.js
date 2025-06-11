import mongoose from "mongoose";

const mongoUrl = process.env.MONGODB_URL;

let cached = global.mongoose;

if(!cached){
    cached = global.mongoose = {
        conn:null,
        promise:null
    };
}

const connectDb = async () => {
    if(cached.conn){
        return cached.conn;
    }

    if(!cached.promise) {
        cached.promise = mongoose.connect(mongoUrl).then((mongoose) => {
            mongoose.connection.on('connected', () => {
                console.log('Db connected');
            });

            return mongoose;
        });
    }

     mongoose.connection.on('error', (err) => {
      console.log('Error connecting to DB', err);
    });

    cached.conn = await cached.promise;
    return cached.conn;
};

export default connectDb;