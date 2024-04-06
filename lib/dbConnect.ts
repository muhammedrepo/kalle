import mongoose from 'mongoose'

/**
 * dbConnect Function
 * This asynchronous function connects to a MongoDB database using the connection string provided in the environment variable MONGODB_URI.
 * If the connection fails, it throws an error.
 */
async function dbConnect() {
  try {
    // Attempt to establish a connection to the MongoDB database
    await mongoose.connect(process.env.MONGODB_URI!)
  } catch (error) {
    // If the connection fails, throw an error
    throw new Error('Error connecting to database')
  }
}

export default dbConnect
