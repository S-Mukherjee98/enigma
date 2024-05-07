import React from "react";
import { Form, message } from "antd";
import { getAntdFieldRequiredRules } from "@/helpers/Validations";
import axios from "axios";

function ProductForm() {
  const [categories, setCategories] = React.useState([]);
  const getCategories = async () => {
    try {
      const response = await axios.get("/api/categories");
      setCategories(response.data.data);
    } catch (error: any) {
      message.error(error.message);
    }
  };

  React.useEffect(() => {
    getCategories();
  }, []);
  return (
    <div>
      <Form
        className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5"
        layout="vertical"
      >
        <div className="col-span-3">
          <Form.Item
            label="Name"
            name="name"
            rules={getAntdFieldRequiredRules("Name is required")}
          >
            <input type="text" />
          </Form.Item>
        </div>
        <div className="col-span-3">
          <Form.Item
            label="Description"
            name="description"
            rules={getAntdFieldRequiredRules("Description is required")}
          >
            <textarea />
          </Form.Item>
        </div>
        <Form.Item
          label="Price"
          name="price"
          rules={getAntdFieldRequiredRules("Price is required")}
        >
          <input type="number" />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          rules={getAntdFieldRequiredRules("Category is required")}
        >
          <select name="" id="">
            <option value="">-Selected Category-</option>
            {categories.map((category: any) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </Form.Item>
        <Form.Item
          label="Count In Stock"
          name="countInStock"
          rules={getAntdFieldRequiredRules("Stock is required")}
        >
          <input type="number" />
        </Form.Item>
      </Form>
    </div>
  );
}

export default ProductForm;
