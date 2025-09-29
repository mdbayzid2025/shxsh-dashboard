import { BellOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Empty, Pagination } from "antd";
import { useState } from "react";
import dayjs from "dayjs";
import { LuClock2 } from "react-icons/lu";

const Notifications = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Dummy static notifications
  const notifications = [
    {
      id: 1,
      title: "New Order Received",
      message: "You have a new order from John Doe.",
      date: new Date(),
      isRead: false,
    },
    {
      id: 2,
      title: "Payment Successful",
      message: "Your payment of $250 has been confirmed.",
      date: new Date(),
      isRead: true,
    },
    {
      id: 3,
      title: "Profile Updated",
      message: "Your profile information was updated successfully.",
      date: new Date(),
      isRead: false,
    },
  ];

  const limit = 5;
  const total = notifications.length;

  const handleReadNotification = () => {
    alert("All notifications marked as read!");
  };

  return (
    <div className="p-0 md:p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-grayMedium ">
          Notifications
        </h3>
        <Button type="primary" onClick={handleReadNotification}>
          Mark all as read
        </Button>
      </div>

      {notifications.length === 0 ? (
        <Empty description="No Notifications Found" />
      ) : (
        <div>
          {notifications.map((data) => (
            <div
              key={data.id}
              className="flex items-center justify-between bg-white px-3 py-2 shadow mb-3.5 rounded-xl gap-2"
            >
              <div className="flex items-center gap-2 md:gap-x-5">
                <Button
                  type="primary"
                  shape="circle"
                  size="large"
                  icon={<BellOutlined style={{ fontSize: 20 }} />}
                />
                <div>
                  <p
                    className={`${
                      data.isRead ? "font-medium" : "font-bold"
                    } text-[16px] text-nowrap md:text-xl mb-2`}
                  >
                    {data.title}
                  </p>
                  <p
                    className={`text-[15px] mb-1 ${
                      data.isRead ? "font-normal" : "font-bold"
                    }`}
                  >
                    {data.message}
                  </p>
                  <p
                    className={`${
                      data.isRead ? "font-semibold" : "font-bold"
                    } text-[15px] text-grayMedium flex items-center gap-1`}
                  >
                    <LuClock2 size={20} />{" "}
                    {dayjs(data.date).format("MMMM D, YYYY")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Static Pagination */}
        <Pagination
          style={{ paddingTop: 20 }}
          align="center"
          current={currentPage}
          total={total}
          pageSize={limit}
          showQuickJumper={false}
          showSizeChanger={false}
          onChange={(page) => setCurrentPage(page)}
        />
    </div>
  );
};

export default Notifications;
