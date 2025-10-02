import { HiOutlineUserGroup } from "react-icons/hi";
import { useGetGeneralStatsQuery } from "../../../redux/features/dashboard/dashboardApi";

const Statics = () => {
  const {data: statsData} =  useGetGeneralStatsQuery(undefined)

  if(statsData){
    console.log("statsData", statsData);    
  }
  
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
      {/* {stataicsData &&
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
        ))} */}
        <div className="flex items-center gap-5 statsBg  w-full p-5 rounded-2xl">
            <div className=" bg-secondary w-18 h-18 flex items-center justify-center  rounded-full">
              <HiOutlineUserGroup size={40} color="white" />
            </div>
            <div className="">
              <p className="text-xl text-white font-normal">Total User</p>
              <h1 className="font-semibold text-white mt-2 text-5xl">
                {statsData?.totalUsers ?? 0}
              </h1>
            </div>            
          </div>
        <div className="flex items-center gap-5 statsBg  w-full p-5 rounded-2xl">
            <div className=" bg-secondary w-18 h-18 flex items-center justify-center  rounded-full">
              <HiOutlineUserGroup size={40} color="white" />
            </div>
            <div className="">
              <p className="text-xl text-white font-normal">Total Active User</p>
              <h1 className="font-semibold text-white mt-2 text-5xl">
                {statsData?.totalActiveUser ?? 0}
              </h1>
            </div>            
          </div>
        <div className="flex items-center gap-5 statsBg  w-full p-5 rounded-2xl">
            <div className=" bg-secondary w-18 h-18 flex items-center justify-center  rounded-full">
              <HiOutlineUserGroup size={40} color="white" />
            </div>
            <div className="">
              <p className="text-xl text-white font-normal">Total Deactive User</p>
              <h1 className="font-semibold text-white mt-2 text-5xl">
                {statsData?.totalDeactivatedUsers ?? 0}
              </h1>
            </div>            
          </div>
    </div>
  );
};

export default Statics;


