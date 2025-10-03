import { Button, ConfigProvider, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { getSearchParams } from "../../utils/getSearchParams";
import { useResetPasswordMutation } from "../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NewPassword = () => {
  const [form] = useForm();
  const [resetPassword] = useResetPasswordMutation();
  const {email} = getSearchParams();
   
  const handleSubmit = async (values: any) => {
    const navigate = useNavigate();
    try {
      const res = await resetPassword({email, ...values}).unwrap();

      console.log("res", res);
      toast.success(res?.message);
      form.resetFields();
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Failed to reset password. Please try again."); 
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
            Set New Password
          </h1>
          <p className="text-center text-[#A1A1A1] text-lg mb-8">
            Create a strong password for your account.
          </p>

          <Form form={form} layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              name="newPassword"
              label="New Password"
              rules={[{ required: true, message: "Please enter your new password" }]}
            >
              <Input.Password
                style={{ height: 48 }}
                placeholder="New Password"
                iconRender={(visible) =>
                  visible ? (
                    <MdOutlineVisibility size={20} color="#808080" />
                  ) : (
                    <MdOutlineVisibilityOff size={20} color="#808080" />
                  )
                }
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              rules={[{ required: true, message: "Please confirm your password" }]}
            >
              <Input.Password
                style={{ height: 48 }}
                placeholder="Confirm Password"
                iconRender={(visible) =>
                  visible ? (
                    <MdOutlineVisibility size={20} color="#808080" />
                  ) : (
                    <MdOutlineVisibilityOff size={20} color="#808080" />
                  )
                }
              />
            </Form.Item>

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
              Update Password
            </Button>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default NewPassword;
