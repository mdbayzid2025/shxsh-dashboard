import { ConfigProvider, Select } from "antd";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const { Option } = Select;

const TotalUserChart = () => {
  const CustomTooltip = ({ active, payload,  coordinate }: any) => {
    const isVisible = active && payload && payload.length;
    const tooltipHeight = 40; // Height of your tooltip (you may need to adjust this)

    const tooltipY = coordinate ? coordinate.y - tooltipHeight / 2 : 0;    

    return (
      <div
        className="top-20 mr-10"
        style={{
          visibility: isVisible ? "visible" : "hidden",
          position: "absolute",
          left: coordinate ? coordinate.x - 20 : 0, // Center horizontally
          top: tooltipY, // Center vertically relative to the chart
          transform: "translateY(0)", // Ensure no additional vertical offset
        }}
      >
        {isVisible && (
          <div className="p-2 rounded-md bg-[#CF9702] text-white shadow">
            <p className="label  font-semibold text-sm whitespace-nowrap">{`${payload[0]?.name} : ${payload[0].value}`}</p>
            <p className="label  font-semibold text-sm whitespace-nowrap">{`${payload[1]?.name} : ${payload[1].value}`}</p>
            <span></span>
          </div>
        )}
      </div>
    );
  };

  const year = new Date().getFullYear();
  
  return (
    <div className="w-full pb-5 pt-8 contentBg rounded-xl mt-6">
      <div className="flex items-center justify-between px-6">
        <p className="font-semibold text-white text-2xl">
          User Statistics
        </p>

        <ConfigProvider
          theme={{
            components: {
              Select: {
                colorBgContainer: "#CF9702",
                colorBorder: "#CF9702",
                colorText: "#FFFFFF",                
                colorBgElevated: "rgba(207,151,2, .7)",
                optionSelectedBg: "#121212",
                optionActiveBg: "#404040",
              },
            },
          }}
        >
          <Select
            defaultValue="2025"
            style={{
              width: 120,
              textAlign: "start",
              backgroundColor: "transparent",
            }}
          >
            <Option value={year}>{year}</Option>
            <Option value={year - 1}>{year - 1}</Option>
            <Option value={year - 2}>{year - 2}</Option>
            <Option value={year - 3}>{year - 3}</Option>
            <Option value={year - 4}>{year - 4}</Option>
          </Select>
        </ConfigProvider>
      </div>

      <div className="mt-6">
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={userChartData}
            style={{ backgroundColor: "rgba(0,0,,0,.3)" }}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray={1} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip position={{ y: -10 }} content={CustomTooltip} />
            <Legend />           
            <Bar
              barSize={25}
              //   radius={50}
              dataKey="Total"
              fill="#027348"
            />
            <Bar
              barSize={25}
              //   radius={50}
              dataKey="Users"
              fill="#EB1700"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalUserChart;

export const userChartData = [
  { month: "Jan", Total: 1200, Users: 2220 },
  { month: "Feb", Total: 1500, Users: 1100 },
  { month: "Mar", Total: 1700, Users: 1250 },
  { month: "Apr", Total: 1600, Users: 1180 },
  { month: "May", Total: 1900, Users: 1400 },
  { month: "Jun", Total: 2100, Users: 1550 },
  { month: "Jul", Total: 2300, Users: 1650 },
  { month: "Aug", Total: 2500, Users: 1800 },
  { month: "Sep", Total: 2700, Users: 1900 },
  { month: "Oct", Total: 2900, Users: 1250 },
  { month: "Nov", Total: 3100, Users: 900 },
  { month: "Dec", Total: 3500, Users: 2600 },
];
