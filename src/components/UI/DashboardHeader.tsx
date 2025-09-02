import { BellOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button } from "antd";

const DashboardHeader = () => {
  return (
    <div className="h-[80px] border-b-2 border-gray-700 flex items-center justify-end pr-5  gap-5">
      <Badge count={0} showZero>
        <Button
          size="large"
          icon={
            <BellOutlined style={{ fontSize: 22, color: "rgba(0,0,0,.5)" }} />
          }
          href="https://www.google.com"
          target="_blank"
        />
      </Badge>

      <div className="flex items-center gap-3">
        <Avatar
          size={50}
          src={
            <img
              src="https://images.pexels.com/photos/14084487/pexels-photo-14084487.jpeg"
              alt="avatar"
            />
          }
        />
        <div className="">
          <p className="font-bold text-white text-lg">Md. Bayzid</p>
          <p className="text-textColor font-semibold">abc.example@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
