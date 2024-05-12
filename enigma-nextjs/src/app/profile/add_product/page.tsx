"use client";
import React, { useEffect } from "react";
import ProductForm from "../components/ProductForm";

function AddProduct() {
  const[ selectedFiles=[],setSelectedFiles]=React.useState([])
  useEffect(()=>{
    console.log(selectedFiles)
  },[selectedFiles])
  return (
    <div>
      <h1 className="text-2xl font-semibold text-gray-800">Add Product</h1>
      <hr />

      <ProductForm
      selectedFiles={selectedFiles}
      setSelectedFiles={setSelectedFiles}
      
      />
    </div>
  );
}

export default AddProduct;
