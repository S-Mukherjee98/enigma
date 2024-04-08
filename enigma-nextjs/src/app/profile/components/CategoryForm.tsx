"use client";

import React from "react";
import { Form, Input, Modal } from "antd";
import { getAntdFieldRequiredRules } from "@/helpers/Validations";

function CategoryForm({
  showCategoryForm,
  setShowCategoryForm,
  reloadData,
}: CategoryFormProps) {
  return (
    <Modal
      open={showCategoryForm}
      onCancel={() => setShowCategoryForm(false)}
      centered
      title={<h1 className="text-2xl font-semibold text-gray-800">Add New Category</h1>}
      closable={false}
      okText="Save"
    >
        <hr />
      <Form layout="vertical" className="flex flex-col gap-5 mt-7">
        <Form.Item label="Category Name" name="name"
        rules={getAntdFieldRequiredRules("Category Name is Required")}
        >
          <input type="text" />
        </Form.Item>
        <Form.Item label="Category Description" name="description">
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
