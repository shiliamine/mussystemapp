import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
import { Form, Input } from "antd";
import "./User.css";
import { MdLockOutline } from "react-icons/md";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Flex } from "antd";
import LearLogo from "../../assets/Lear_Corporation_logo.png";
import { Divider } from 'antd';

function Login_Interface() {
  const [User, setUser] = useState("");
  const [pswd, setpswd] = useState("");
  const [messageuser, setmessageuser] = useState("");
  const [messagepasword, setmessagepasword] = useState("");
  const onchangename = (e) => {
    setUser(e.target.value);
  };
  const onchangepswd = (u) => {
    setpswd(u.target.value);
  };

  const onSubmit = () => {
    alert();
  };
  return (
    <div>
      <img src={LearLogo} className="img" alt="logo" />
         <Divider className="text">Make Up System</Divider>
      <div className="user" >
        <Form
          name="basic"
          labelCol={{ span: 50}}
          wrapperCol={{ span: 20 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          //onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="user"
        >
          <Form.Item
          className="txt"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              placeholder="Username"
              prefix={<UserOutlined />}
              variant="filled"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
             placeholder="Pasword"
              prefix={<MdLockOutline />}
              variant="filled"
              
             />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" label={null}>
      <Button htmlType="submit" className="btn" type="primary" >
              LOGIN
            </Button>
    </Form.Item>
          

        
        </Form>
        
      </div>
    
    </div>
  );
}

export default Login_Interface;
