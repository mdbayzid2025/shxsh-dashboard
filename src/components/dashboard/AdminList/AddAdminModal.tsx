import { Button, Form, Input, Modal, Select } from "antd";
import { useEffect } from "react";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";

const { Option } = Select;

const AddAdminModal = ({
  editData,
  open,
  setOpen,
  onSubmit,
}: any) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (editData) {
      form.setFieldsValue(editData); // Prepopulate form with edit data
    }
  }, [editData]);

  const handleCancel = () => {
    setOpen(false);
    form.resetFields();
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        onSubmit(values); // Submit data
        setOpen(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  return (
    <Modal
      title={!editData ? "Add Admin" : "Edit Admin"}
      open={open}
      onCancel={handleCancel}
      onOk={handleOk}
      okText={!editData ? "Save" : "Update"}
      cancelText="Cancel"
      centered
      footer={null} // Custom footer
    >
      <Form form={form} layout="vertical">
        {/* Name Field */}
        <Form.Item
          label={<p className="text-lg text-gray-200">Name</p>}
          name="name"
          rules={[{ required: true, message: "Please enter name" }]}
        >
          <Input placeholder="Enter name" style={{ height: 45 }} />
        </Form.Item>

        {/* Email Field */}
        <Form.Item
          label={<p className="text-lg text-gray-200">Email</p>}
          name="email"
          rules={[
            { required: true, message: "Please enter email" },
            { type: "email", message: "Enter a valid email" },
          ]}
        >
          <Input placeholder="Enter email" style={{ height: 45 }} />
        </Form.Item>

        {/* Role Field */}
        <Form.Item
          label={<p className="text-lg text-gray-200">Role</p>}
          name="role"
          rules={[{ required: true, message: "Please select role" }]}
        >
          <Select placeholder="Select role" style={{ height: 45 }}>
            <Option value="superadmin">Super Admin</Option>
            <Option value="admin">Admin</Option>
            <Option value="moderator">Moderator</Option>
          </Select>
        </Form.Item>

        {/* Password Field (only for Add Admin) */}
        {!editData && (
          <Form.Item
            label={<p className="text-lg text-gray-200">Password</p>}
            name="password"
            rules={[{ required: !editData, message: "Please enter password" }]}
          >
            <Input.Password
              placeholder="Enter password"
              iconRender={(visible) =>
                visible ? (
                  <MdOutlineVisibility size={20} color="#808080" cursor="pointer" />
                ) : (
                  <MdOutlineVisibilityOff size={20} color="#808080" cursor="pointer" />
                )
              }
              style={{ height: 45 }}
            />
          </Form.Item>
        )}

        {/* Submit Button */}
        <Button
          type="primary"
          size="large"
          style={{ width: "100%", height: 45 }}
          onClick={handleOk}
        >
          {!editData ? "Add Admin" : "Update Admin"}
        </Button>
      </Form>
    </Modal>
  );
};

export default AddAdminModal;
