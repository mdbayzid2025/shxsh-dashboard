import { Button, ConfigProvider, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [form] = useForm();
  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    try {
      console.log("handleLogin", values);
      navigate("/verify-otp");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#8B4E2E", // Matching color to the Login page
          colorBgContainer: "#F1F4F9", // Same background color
        },
        components: {
          Input: {
            borderRadius: 12,
            colorBorder: "#8B4E2E", // Matching border color to the Login page
            colorPrimaryBg: "#121212",
            colorText: "#757575",
            inputFontSize: 16,
            colorBgBlur: "#989898",
            colorTextPlaceholder: "#757575 ",
          },
          Checkbox: {
            colorBgContainer: "transparent",
            colorBorder: "#989898",
            colorText: "#989898",
            fontSize: 15,
            colorPrimary: "#989898",
            colorPrimaryHover: "#989898",
            controlInteractiveSize: 20,
            borderRadiusSM: 50,
          },
        },
      }}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="border border-borderColor rounded-xl px-12 py-8 min-w-xl">
          <img src="/logo.png" className="w-18 mb-5 mx-auto" alt="" />
          <h1 className="text-center text-primary text-2xl font-semibold mb-4">
            Reset Password
          </h1>
          <p className="text-center text-gray text-lg mb-8">
            Please enter your email address to receive a password reset link.
          </p>

          <Form form={form} layout="vertical" onFinish={handleLogin}>
            <FormItem
              name="email"
              label={<p className="text-gray font-semibold text-lg">Email</p>}
              rules={[
                {
                  required: true,
                  type: "email",
                  message: "Please enter your email",
                },
              ]}
            >
              <Input
                style={{ height: 48 }}
                placeholder="example@gmail.com"
                autoComplete="off"
              />
            </FormItem>

            <Button
              type="primary"
              size="large"
              htmlType="submit"
              shape="round"
              style={{
                width: "100%",
                height: 50,
                marginTop: 20,
              }}
            >
              Continue
            </Button>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default ForgotPassword;
