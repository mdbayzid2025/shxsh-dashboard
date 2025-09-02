import { Button, ConfigProvider, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { Link } from "react-router-dom";

const OTPVerify = () => {
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
          <img src="/logo.png" className="w-24 mb-5 mx-auto" alt="" />
          <h1 className="text-center text-white text-2xl font-semibold mb-4">
            Verify OTP
          </h1>
          <p className="flex flex-col gap-3 items-center text-[#A1A1A1] text-lg mb-8">
            Enter the OTP sent to your email.
            <span className="text-[#CF9702] text-xl font-semibold">00:00</span>
          </p>
          

          <Form form={form} layout="vertical" onFinish={handleSubmit}>
             <ConfigProvider 
             theme={{
              components: {Input: {colorBorder: "#fff", colorText: "#fff", activeBorderColor: "#027348", hoverBorderColor: "#027348"}}
             }}
             >
            <Form.Item name="otp" label={false} rules={[{ required: true }]}>
              <Input.OTP length={6} style={{color: "#fff"}} />
            </Form.Item>
            </ConfigProvider>

            <div className="text-center my-5">
              <p className="text-center text-[#A1A1A1] text-lg mb-2">
                A code has been sent to your email
              </p>              
            </div>

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
              Verify OTP
            </Button>

            <Button
              type="text"
              size="large"
              style={{
                color: "#CF9702",
                fontWeight: 600,
                width: "100%",
                marginTop: 10,
                border: "none",
                background: "transparent",
              }}
            >
              Resend OTP
            </Button>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default OTPVerify;
