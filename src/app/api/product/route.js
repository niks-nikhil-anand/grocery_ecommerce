// Import necessary modules and models
import Product from '@/models/productModels';
import connectDB from '@/lib/connectDB';
import { NextResponse } from "next/server";

// Connect to the database
connectDB();

// Handler for GET request
export async function GET(req, res) {
  try {
    const products = await Product.find();
    return NextResponse.json({
      result: products,
      msg: "Fetched successfully",
      status: 201
    });
  } catch (err) {
    NextResponse.json({ msg: err.message, status: 400 });
  }
}

// Handler for POST request
export async function POST(req, res) {
  try {
    const newProduct = await Product.create(req.body);
    NextResponse.json({ result: newProduct, msg: 'Added successfully', status: 201 });
  } catch (err) {
    NextResponse.json({ msg: err.message, status: 400 });
  }
}

// Handler for PUT request
export async function PUT(req, res) {
  try {
    const { id, ...updatedFields } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, updatedFields, { new: true });
    res.status(200).json(updatedProduct);
  } catch (err) {
    NextResponse.json({ msg: err.message, status: 400 });
  }
}

// Handler for DELETE request
export async function DELETE(req, res) {
  try {
    const { id } = req.body;
    await Product.findByIdAndDelete(id);
    NextResponse.json({ msg: 'Product deleted successfully', status: 200 });
  } catch (err) {
    NextResponse.json({ msg: err.message, status: 400 });
  }
}
