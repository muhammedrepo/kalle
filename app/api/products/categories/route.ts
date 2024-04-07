import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'

export const GET = async (req: any) => {
  await dbConnect()

  // Ensure the 'category' field has an index for faster distinct retrieval
  try {
    const categories = await ProductModel.find().distinct('category')
    return Response.json(categories)
  } catch (error) {
    console.error(error) // Log the error for debugging
    return Response.json(
      { error: 'Failed to retrieve categories' },
      { status: 500 }
    ) // Send error response
  }
}
