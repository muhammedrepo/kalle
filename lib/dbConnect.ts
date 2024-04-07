import mongoose from 'mongoose'

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      maxPoolSize: 50, // Increase the maximum number of connections in the pool
    })
  } catch (error) {
    throw new Error('Connection failed!')
  }
}

export default dbConnect
