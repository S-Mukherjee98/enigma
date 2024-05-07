"use client";
import React from "react";
import ProductForm from "../components/ProductForm";

function AddProduct() {
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800">Add Product</h1>
      <hr />

      <ProductForm/>
    </div>
  );
}

export default AddProduct;
