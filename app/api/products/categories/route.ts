import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'

export const GET = async (req: any, res: any) => {
  try {
    await dbConnect()
    const categories = await ProductModel.find().distinct('category')
    return res.json(categories)
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error)
    // Return a response indicating that something went wrong
    return res
      .status(500)
      .json({ error: 'An error occurred while fetching categories' })
  }
}
