import { Modal } from "antd";
import React from "react";

type ConfirmModalProps = {
  open: boolean;
  title?: string;
  content?: string;
  okText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLoading?: boolean;
};

const ConfirmModel: React.FC<ConfirmModalProps> = ({
  open,
  title = "Are you sure?",
  content = "This action cannot be undone.",
  okText = "Yes, Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  confirmLoading = false,
}) => {
  return (
    <Modal
      open={open}
      title={ <p className="text-xl font-semibold text-primary">{title}</p>}
      onOk={onConfirm}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
      okButtonProps={{ danger: true }}
      confirmLoading={confirmLoading}
      centered
    >
      <p className="text-slate-200 text-lg my-5">{content}</p>
    </Modal>
  );
};

export default ConfirmModel;