import { Button, Divider, Form, Input, Modal, Space, Table, Tooltip } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useEffect, useState } from "react";

const AddcategoryModal = ({ open, setOpen, editData, onClose }: any) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);



  const handleFinish = async (values: { reason: string }) => {
    setLoading(true);
    try {
      // await onSubmit(values.reason);
      console.log("value", values);
      
      form.resetFields();
      setOpen(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(()=>{
    if(editData){
      form.setFieldsValue(editData)
    }
  },[])
  
  return (
    <Modal
      title={<p className="text-2xl pt-2.5 pb-1 leading-0 font-semibold text-primary">Add Category</p>}
      
      open={open}
      onCancel={onClose}
      footer={false}
      centered
    >
      <Divider />
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        style={{ marginTop: 10 }}
      >
        <FormItem
          label={
            <p className="text-gray font-semibold">
              Category Name
            </p>
          }
          name="name"
          rules={[{ required: true, message: "Please enter category name" }]}
        >
          <Input
            placeholder="Enter category name"  style={{height: 48}}          
          />
        </FormItem>

        <div className="flex justify-center">
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            style={{ width: "100%", background: "#8B4E2E", marginTop: 30 }}
            loading={loading}
          >
            Add Category
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddcategoryModal;