import { LineChart } from "@mui/x-charts";
import Selector from "../../../../../components/Selector";

const Card = ({ data, titel, content, colorChart }) => {
  return (
    <div className="w-full md:w-1/2 bg-white dark:bg-darkgray-100 rounded-xl px-5 pt-6 pb-7">
      <div className="flex justify-between items-center">
        <p className="font-bold text-dark-100 dark:text-white">{titel}</p>
        <Selector
          item={["Today", "This Week", "This Month"]}
          addClass="font-medium text-gray-100 border-2 border-gray-100 rounded-sm py-1 px-2.5 text-sm  dark:border-gray-80/40"
        ></Selector>
      </div>
      <div className="flex items-end text-3xl font-bold text-dark-100 gap-x-9 mt-7">
        <p className="dark:text-white ">{content}</p>
        <LineChart
          axisHighlight={{ x: "none", y: "none" }}
          xAxis={[
            {
              data: [
                "9:00",
                "10:00",
                "11:00",
                "12:00",
                "13:00",
                "14:00",
                "15:00",
                "15:00",
                "16:00",
                "17:00",
                "18:00",
                "19:00",
                "20:00",
              ],
              scaleType: "point",
              position: "none",
            },
          ]}
          yAxis={[
            {
              position: "none",
            },
          ]}
          series={[
            {
              data: data,
              color: colorChart,
              area: true,
              showMark: false,
            },
          ]}
          margin={0}
          height={80}
        />
      </div>
    </div>
  );
};

export default Card;
