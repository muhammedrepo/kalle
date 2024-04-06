import data from '@/lib/data'
import dbConnect from '@/lib/dbConnect'
import ProductModel from '@/lib/models/ProductModel'
import UserModel from '@/lib/models/UserModel'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { users, products } = data
  try {
    await dbConnect()
  } catch (error) {
    return NextResponse.json({
      message: 'Database connection failed',
      error,
    })
  }

  try {
    await UserModel.deleteMany()
    await UserModel.insertMany(users)

    await ProductModel.deleteMany()
    await ProductModel.insertMany(products)
  } catch (error) {
    return NextResponse.json({
      message: 'Database operation failed',
      error,
    })
  }

  return NextResponse.json({
    message: 'seeded successfully',
    users,
    products,
  })
}
