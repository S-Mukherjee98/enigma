"use client";
import { getAntdFieldRequiredRules } from "@/helpers/Validations";
import { Button, Form, message } from "antd";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { use } from "react";

interface userType {
  name: string;
  email: string;
  password: string;
}

function Register() {
  const router=useRouter();
  const [loading, setLoading] = React.useState(false);
  const onRegister = async (values: userType) => {
    try {
      setLoading(true);
      await axios.post("/api/auth/register", values);
      message.success("Registration successfull, please login to continue")
      router.push("/auth/login")
    } catch (error:any) {
      message.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2  min-h-screen">
      <div className="h-full bg-primary hidden md:flex items-center justify-center">
        <h1 className="text-7xl font-bold text-red-500">Enigma</h1>
        <h1 className="text-7xl font-bold text-gray-500">-</h1>
        <h1 className="text-7xl font-bold text-yellow-500">Shop</h1>
      </div>

      <div className=" flex items-center justify-center">
        <Form
          className="w-[400px] flex flex-col gap-5"
          layout="vertical"
          onFinish={onRegister}
        >
          <h1 className="text-2xl font-bold">Register</h1>

          <hr />
          <Form.Item
            name="name"
            label="Name"
            rules={getAntdFieldRequiredRules("Please enter your name")}
          >
            <input type="text" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={getAntdFieldRequiredRules("Please enter your email")}
          >
            <input type="email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={getAntdFieldRequiredRules("Please enter your password")}
          >
            <input type="password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block
          loading={loading}
          >
            Register
          </Button>
          <Link href="/auth/login">Already have an account? Login</Link>
        </Form>
      </div>
    </div>
  );
}

export default Register;
