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
          <p className="text-[15px] font-medium">{data?.name}</p>
        </Col>

        {/* Status */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">Status</p>
          <span
            className={`font-semibold text-[15px] ${
              data?.status === "Active" ? "text-green-600" : "text-red-600"
            }`}
          >
            {data?.status}
          </span>
        </Col>

        {/* Email */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">Email</p>
          <p className="text-[15px] font-medium">{data?.email}</p>
        </Col>

        {/* Contact */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">Contact</p>
          <p className="text-[15px] font-medium">{data?.contact}</p>
        </Col>

        {/* Address */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">Address</p>
          <p className="text-[15px] font-medium">{data?.address}</p>
        </Col>

        {/* Playlist Count */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">
            Playlist Count
          </p>
          <p className="text-[15px] font-medium">{data?.playlist}</p>
        </Col>

        {/* Role */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">Role</p>
          <p className="text-[15px] font-medium">{data?.role}</p>
        </Col>

        {/* Join Date */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">
            Join Date
          </p>
          <p className="text-[15px] font-medium">
            {dayjs(data?.joinDate).format("DD MMMM, YYYY")}
          </p>
        </Col>

        {/* Total Buy */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">
            Total Buy
          </p>
          <p className="text-[15px] font-medium">{data?.totalBuy}</p>
        </Col>

        {/* Total Sale */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">
            Total Sale
          </p>
          <p className="text-[15px] font-medium">{data?.totalSale}</p>
        </Col>
      </Row>
    </Modal>
  );
};

export default UserDetailsModal;
