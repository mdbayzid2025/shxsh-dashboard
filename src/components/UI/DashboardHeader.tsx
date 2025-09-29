import { BellOutlined } from "@ant-design/icons";
import { Avatar, Badge, Button } from "antd";
import { useGetProfileQuery } from "../../redux/features/auth/authApi";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  const { data: profileData } = useGetProfileQuery(undefined);

  console.log("profileData", profileData);

  return (
    <div className="h-[80px] border-b-2 border-gray-700 flex items-center justify-end pr-5  gap-5">
      <Badge count={0} showZero>
        <Link to="notification">
        <Button
          size="large"
          icon={
            <BellOutlined style={{ fontSize: 22, color: "rgba(0,0,0,.5)" }} />
          }               
        />
        </Link>
      </Badge>

      <div className="flex items-center gap-3">
        <Avatar          
          size={50}
          src={
            <img
              src="/placeholder.png"
              alt="avatar"
            />
          }
        />
        <div className="">
          <p className="font-bold text-white text-lg">
            {/* @ts-ignore */}
            {profileData ? profileData?.firstName + " " + profileData?.lastName : 'N/A'}
          </p>
          <p className="text-textColor font-semibold">{profileData?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
