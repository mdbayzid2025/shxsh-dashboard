import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LiaUserCheckSolid } from "react-icons/lia";

const Statics = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
      {stataicsData &&
        stataicsData?.map((item) => (
          <div className="flex items-center gap-5 statsBg  w-full p-5 rounded-2xl">
            <div className=" bg-secondary w-18 h-18 flex items-center justify-center  rounded-full">
              {item?.icon}
            </div>
            <div className="">
              <p className="text-xl text-white font-normal">{item?.title}</p>
              <h1 className="font-semibold text-white mt-2 text-5xl">
                {item?.total}
              </h1>
            </div>
            
          </div>
        ))}
    </div>
  );
};

export default Statics;

const stataicsData = [
  {
    title: "Total User",
    total: 5000,
    icon: <HiOutlineUserGroup size={40} color="white" />,
  },
  {
    title: "Total Active User",
    total: 3000,
    icon: <LiaUserCheckSolid size={40} color="white" />,
  },
  {
    title: "Total Deactive User",
    total: 3000,
    icon: <LiaUserCheckSolid size={40} color="white" />,
  },
  // {
  //   title: "Total Revenue",
  //   total: 5000,
  //   icon: <BsCurrencyDollar size={40} color="white" />,
  // },
];
