import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { LiaUserCheckSolid } from "react-icons/lia";

const Statics = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-x-10 justify-between">
      {stataicsData &&
        stataicsData?.map((item) => (
          <div className="flex justify-between gap-5 bg-white  w-full p-5 rounded-2xl">
            <div className="">
              <p className="text-xl text-black font-normal">{item?.title}</p>
              <h1 className="font-semibold text-black mt-4 text-4xl">
                {item?.total}
              </h1>
            </div>
            <div className=" bg-primary w-12 h-12 flex items-center justify-center  rounded-full">
              {item?.icon}
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
    icon: <HiOutlineUserGroup size={30} color="white" />,
  },
  {
    title: "Total Active User",
    total: 3000,
    icon: <LiaUserCheckSolid size={30} color="white" />,
  },
  {
    title: "Total Subscriber",
    total: 3000,
    icon: <LiaUserCheckSolid size={30} color="white" />,
  },
  {
    title: "Total Revenue",
    total: 5000,
    icon: <BsCurrencyDollar size={30} color="white" />,
  },
];
