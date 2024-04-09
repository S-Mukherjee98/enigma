"use client";

import React from "react";
import { Form, message, Modal } from "antd";
import { getAntdFieldRequiredRules } from "@/helpers/Validations";
import axios from "axios";

function CategoryForm({
  showCategoryForm,
  setShowCategoryForm,
  reloadData,
}: CategoryFormProps) {

const[form]=Form.useForm()
const[loading,setLoading]=React.useState(false)
const onFinish = async(values: any) => {
    try {
        setLoading(true)
        await axios.post("/api/categories",values);
        setShowCategoryForm(false);
        reloadData();
    } catch (error:any) {
        message.error(error.response.data.message || error.message);
    }
    finally{
        setLoading(false);
    }
}
  return (
    <Modal
      open={showCategoryForm}
      onCancel={() => setShowCategoryForm(false)}
      centered
      title={<h1 className="text-2xl font-semibold text-gray-800">Add New Category</h1>}
      closable={false}
      okText="Save"
      onOk={()=>{
        form.submit();
      }}
      okButtonProps={
        {loading,}
      }
    >
        <hr />
      <Form layout="vertical" className="flex flex-col gap-5 mt-7" form={form} onFinish={onFinish}>
        <Form.Item label="Category Name" name="name"
        rules={getAntdFieldRequiredRules("Category Name is Required")}
        >
          <input type="text" />
        </Form.Item>
        <Form.Item label="Category Description" name="description"
        
        >
          <textarea />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default CategoryForm;

interface CategoryFormProps {
  showCategoryForm: boolean;
  setShowCategoryForm: (show: boolean) => void;
  reloadData: () => void;
}
