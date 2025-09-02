import { Button, ConfigProvider, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [form] = useForm();

  const handleSubmit = async (values: any) => {
    try {
      console.log("handleSubmit", values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#027348",
          colorBgContainer: "#F1F4F9",
        },
        components: {
           Form: {
            labelColor: "#A1A1A1"
          },
          Input: {
            borderRadius: 12,
            colorBorder: "#404040",
            colorPrimaryBg: "#121212",
            colorText: "#757575",
            inputFontSize: 16,
            colorBgBlur: "#989898",
            colorTextPlaceholder: "#757575 ",
            colorBgContainer: "#00000040"    
          },
        },
      }}
    >
      <div className="flex items-center justify-center h-screen">
        <div
          style={{
            background:
              "linear-gradient(91.95deg, rgba(2, 115, 72, .8) -100.37%, rgba(3, 47, 30, .40) 101.16%)",
          }}
          className="border-2 border-borderColor rounded-xl px-12 py-8 min-w-xl"
        >
          <img src="/logo.png" className="w-18 mb-5 mx-auto" alt="" />
          <h1 className="text-center text-white text-2xl font-semibold mb-4">
            Forgot Password
          </h1>
          <p className="text-center text-[#A1A1A1] text-lg mb-8">
            Please enter your email to reset your password.
          </p>

          <Form form={form} layout="vertical" onFinish={handleSubmit}>
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
              <Input style={{ height: 48 }} placeholder="example@gmail.com" />
            </FormItem>

            <Button
              size="large"
              htmlType="submit"
              shape="round"
              style={{
                width: "100%",
                background:
                  "linear-gradient(91.95deg, #027348 10.37%, #032F1E 121.16%)",
                height: 50,
                marginTop: 20,
                outline: "none",
                border: "none",
                color: "white",
              }}
            >
              Reset Password
            </Button>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default ForgotPassword;
