import { Button, ConfigProvider, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import type { OTPProps } from "antd/es/input/OTP";
import { useNavigate } from "react-router-dom";

const OTPVerify = () => {
  const [form] = useForm();
  const navigate = useNavigate();

  const handleLogin = async (values: any) => {
    try {
      console.log("handleLogin", values);
      navigate("/new-password");
    } catch (error) {
      console.log(error);
    }
  };

  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#8B4E2E", // Matching the primary color from Login page
          colorBgContainer: "#F1F4F9", // Consistent background color
        },
        components: {
          Input: {
            borderRadius: 12,
            colorBorder: "#8B4E2E", // Consistent border color
            colorPrimaryBg: "#121212",
            colorText: "#757575",
            inputFontSize: 16,
            colorBgBlur: "#989898",
            colorTextPlaceholder: "#757575",
          },
        },
      }}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="border border-borderColor rounded-xl px-12 py-8 min-w-xl">
          <img src="/logo.png" className="w-18 mb-5 mx-auto" alt="" />
          <h1 className="text-center text-primary text-2xl font-semibold mb-4">
            Verify OTP
          </h1>
          <p className="text-center text-gray text-lg mb-8">
            Enter your OTP which has been sent to your email
          </p>

          <Form form={form} layout="vertical" onFinish={handleLogin}>
            <div className=" rounded-2xl py-2.5 flex justify-center">
              <Input.OTP
                size="large"                                
                length={4}
                style={{
                  fontWeight: 600,                                                    
                }}
                separator={() => (
                  <span style={{ marginInline: 10 }}>—</span>
                )}
                className=""
                onChange={onChange}
              />
            </div>

            <div className="text-center my-5">
              <p className="text-center text-gray text-lg mb-2">
                A code has been sent to your email
              </p>
              <span className="text-[#FF6F61] text-xl font-semibold">00:00</span>
            </div>

            {/* Separate buttons for Verify and Resend */}
            <div className="">
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: 50,
                  borderRadius: 20,                                    
                  marginTop: 20,
                }}
              >
                Verify
              </Button>

              <Button
                size="large"
                type="text"
                style={{
                  color: "#FF6F61", // Custom color for "Resend" button
                  fontWeight: 600,
                  width: "100%",
                  marginTop: 10,
                  border: "none",
                  background: "transparent"
                }}
              >
                Resend
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default OTPVerify;
