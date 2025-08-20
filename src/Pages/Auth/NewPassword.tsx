import { Button, ConfigProvider, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";
import FormItem from "antd/es/form/FormItem";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const NewPassword = () => {
  const [form] = useForm();

  const handleLogin = async (values: any) => {
    try {
      console.log("handleLogin", values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#8B4E2E", // Consistent color with other pages
          colorBgContainer: "#F1F4F9", // Same background color as previous pages
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
            Set New Password
          </h1>
          <p className="text-center text-gray text-lg mb-8">
            Create a strong password to keep your account secure.
          </p>

          <Form form={form} layout="vertical" onFinish={handleLogin}>
            <FormItem
              name="newPassword"
              label={<p className="text-gray font-semibold text-lg">New Password</p>}
              rules={[
                {
                  required: true,
                  message: "Please enter your New Password",
                },
              ]}
            >
              <Input.Password
                name="newPassword"
                minLength={6}
                style={{                  
                  height: 48,
                  cursor: "pointer",
                }}
                placeholder="New Password"
                iconRender={(visible) =>
                  visible ? (
                    <MdOutlineVisibility size={20} color="#808080" />
                  ) : (
                    <MdOutlineVisibilityOff size={20} color="#808080" />
                  )
                }
              />
            </FormItem>

            <FormItem
              name="confirmPassword"
              label={<p className="text-gray font-semibold text-lg">Confirm Password</p>}
              rules={[
                {
                  required: true,
                  message: "Please enter your Confirm Password",
                },
              ]}
            >
              <Input.Password
                name="confirmPassword"
                minLength={6}
                style={{                  
                  height: 48,
                  cursor: "pointer",
                }}
                placeholder="Confirm Password"
                iconRender={(visible) =>
                  visible ? (
                    <MdOutlineVisibility size={20} color="#808080" />
                  ) : (
                    <MdOutlineVisibilityOff size={20} color="#808080" />
                  )
                }
              />
            </FormItem>

            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{
                width: "100%",
                height: 50,
                borderRadius: 20,                
                marginTop: 20,
              }}
            >
              Update
            </Button>
          </Form>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default NewPassword;
