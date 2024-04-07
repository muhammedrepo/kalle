// import dbConnect from '@/lib/dbConnect'
// import ProductModel from '@/lib/models/ProductModel'

// export const GET = async (req: any) => {
//   await dbConnect()

//   // Ensure the 'category' field has an index for faster distinct retrieval
//   try {
//     const categories = await ProductModel.find().distinct('category')
//     return Response.json(categories)
//   } catch (error) {
//     console.error(error) // Log the error for debugging
//     return Response.json(
//       { error: 'Failed to retrieve categories' },
//       { status: 500 }
//     ) // Send error response
//   }
// }

import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'

export const GET = async (req: any) => {
  await dbConnect()

  try {
    const categories = await ProductModel.aggregate([
      { $group: { _id: '$category' } },
      { $project: { _id: 0, category: '$_id' } },
    ])
    return Response.json(categories.map((doc) => doc.category))
  } catch (error) {
    console.error('Error retrieving categories:', error)
    return Response.json(
      { error: 'Failed to retrieve categories' },
      { status: 500 }
    )
  }
}
