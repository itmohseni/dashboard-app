import { PieChart } from "@mui/x-charts";
import Selector from "../../../../../../components/Selector";

const CardHighlights = ({ titel, color, value }) => {
  return (
    <div className="flex  items-center justify-around bg-white dark:bg-darkgray-100 py-8 px-5 w-full sm:w-1/3 rounded-xl">
      <div>
        <p className="text-dark-100 dark:text-white w-1/2 font-bold ">
          {titel}
        </p>
        <Selector
          item={["day", "1 week", "1 month"]}
          addClass="border-2 border-gray-100 rounded-sm py-1 px-4 mt-5"
        />
      </div>
      <div className="flex justify-center w-1/2">
        <PieChart
          slotProps={{
            tooltip: { trigger: "none" },
            legend: { hidden: true },
          }}
          series={[
            {
              innerRadius: 40,
              outerRadius: 55,
              paddingAngle: 0,
              cornerRadius: 0,
              data: [
                {
                  id: 0,
                  value: value,
                  label: "JavaScript",
                  color: `#${color}`,
                },
                {
                  id: 1,
                  value: 100 - value,
                  label: "Python",
                  color: `#${color}33`,
                },
              ],
              label: { visible: false },
            },
          ]}
          width={120}
          height={120}
        />
      </div>
    </div>
  );
};

export default CardHighlights;
