"use client";

import React from "react";
import { Button } from "antd";
import CategoryForm from "./CategoryForm";
function CategoriesList() {

    const[showCategoryForm,setShowCategoryForm]=React.useState(false)

  return (
    <div className="flex justify-end">
      <Button type="primary" onClick={()=>setShowCategoryForm(true)}>Add category</Button>

      {showCategoryForm && (
        <CategoryForm
        showCategoryForm={showCategoryForm}
        setShowCategoryForm={setShowCategoryForm}
        reloadData={()=>{}}
        />
      )}

    </div>
  );
}

export default CategoriesList;
