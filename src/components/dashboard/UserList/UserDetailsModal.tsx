import { Col, Divider, Modal, Row } from "antd";
import dayjs from "dayjs";

const UserDetailsModal = ({ open, data, onClose }:any) => {

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title={
        <p className="text-xl font-semibold text-primary text-center">
          User Details
        </p>
      }
      centered
      width={700}
    >
      <Divider style={{ background: "gray" }} />
      <Row gutter={[12, 24]}>
        {/* Name */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">Name</p>
          <p className="text-[15px] font-medium text-white">{data?.firstName} {data?.lastName} </p>
        </Col>       

        {/* Email */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">Email</p>
          <p className="text-[15px] font-medium text-white">{data?.email}</p>
        </Col>

        {/* Status */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">Status</p>
          <span
            className={`font-semibold text-[15px] capitalize ${
              data?.status === "Active" ? "text-green-600" : "text-red-400"
            }`}
          >
            {data?.status}
          </span>
        </Col>

        {/* Role */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">Role</p>
          <p className="text-[15px] font-medium text-white capitalize">{data?.role}</p>
        </Col>

        {/* Join Date */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">
            Join Date
          </p>
          <p className="text-[15px] font-medium text-white">
            {dayjs(data?.joinDate).format("DD MMMM, YYYY")}
          </p>
        </Col>
      </Row>
    </Modal>
  );
};

export default UserDetailsModal;
