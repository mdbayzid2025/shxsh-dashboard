import { Col, Divider, Modal, Row } from "antd";
import dayjs from "dayjs";

const ReportDetailsModal = ({ open, setOpen, data, onClose }: any) => {
  // Helper to convert type number to label
console.log("data", data);

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title={
        <p className="text-xl font-semibold text-primary text-center">
          Report Details
        </p>
      }
      centered
      width={700}
    >
      <Divider style={{background: "gray"}}/>
      <Row gutter={[12, 24]}>
        {/* Name */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">Name</p>
          <p className="text-[15px] font-medium text-white">{data?.name}</p>
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

        {/* Address */}
        <Col span={24}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">Address</p>
          <p className="text-[15px] font-medium text-white">{data?.reason}</p>
        </Col>

     

        {/* Join Date */}
        <Col span={12}>
          <p className="text-[#808080] text-[15px] font-medium mb-1">Report Date</p>
          <p className="text-[15px] font-medium text-white">
            {dayjs(data?.joinDate).format("DD MMMM, YYYY")}
          </p>
        </Col>
      </Row>
    </Modal>
  );
};

export default ReportDetailsModal;
