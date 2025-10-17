import { LineChart } from "@mui/x-charts";
import { useState } from "react";
import Card from "./components/Card";
const timeFrimeTxt = ["Today", "7d", "2w", "1m"];
const datas = [
  {
    name: "Users",
    label: "13.2k",
    value: 10,
    direction: "+",
  },
  {
    name: "Sessions",
    label: "18.1k",
    value: 13,
    direction: "-",
  },
  {
    name: "Bounce Rate",
    label: "0.71%",
    value: 6,
    direction: "+",
  },
  {
    name: "Session Duration",
    label: "1m 06s",
    value: 15,
    direction: "-",
  },
];
const TimeFrime = [
  [
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
  [
    "Saturday ",
    "Sunday ",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ],
  [
    "Saturday",
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    //
    "Saturday2",
    "Sunday2",
    "Monday2",
    "Tuesday2",
    "Wednesday2",
    "Thursday2",
    "Friday2",
  ],
  [],
];
const otherData = [
  [12, 16, 13, 19, 15, 22, 17, 25, 20, 27, 22, 29, 24],
  [40, 47, 39, 50, 44, 52, 45],
  [30, 35, 33, 37, 34, 39, 36, 41, 38, 43, 40, 45, 42, 48],
  [],
];
const dataFrime = [
  [19, 26, 21, 30, 24, 35, 27, 40, 32, 43, 35, 46, 38],
  [64, 75, 62, 80, 70, 83, 72],
  [48, 56, 53, 59, 54, 62, 58, 66, 61, 69, 64, 72, 67, 77],
  [],
];

const TraficSource = () => {
  const [timeChart, setTimeChart] = useState(0);
  return (
    <div className="mt-10">
      <div className="bg-white dark:bg-darkgray-100 rounded-xl px-5 py-7 w-full">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-dark-100 text-lg dark:text-white font-bold">
              Traffic Channel
            </p>
          </div>
          <div className="flex gap-x-7">
            <div className="flex gap-x-2.5 ">
              {timeFrimeTxt.map((item, index) => {
                return (
                  <button
                    className={`${
                      index == timeChart
                        ? "border-2 border-gray-80/20 rounded-sm text-dark-100 dark:text-white dark:border-gray-80/40"
                        : "border-2 border-white text-gray-100 dark:border-darkgray-100 dark:text-dark-text"
                    } px-2.5 py-1`}
                    key={index}
                    onClick={() => setTimeChart(index)}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex gap-x-24 flex-wrap justify-start ml-2.5 sm:ml-0">
          {datas.map((data) => {
            return (
              <div className="flex flex-col justify-start items-start gap-y-2.5 mt-10">
                <p className=" text-gray-100">{data.name}</p>
                <p className="text-3xl font-bold text-dark-100 dark:text-white">
                  {data.label}
                </p>
                <div className="flex items-center">
                  <svg
                    className={`${
                      data.direction === "+"
                        ? "text-success-100"
                        : "text-error-100 rotate-180"
                    } w-[18px] h-[18px]`}
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 12L9 7L14 12H4Z"
                      fill="currentColor"
                    />
                    <mask
                      id="mask0_518_19235"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="4"
                      y="7"
                      width="10"
                      height="5"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 12L9 7L14 12H4Z"
                        fill="currentColor"
                      />
                    </mask>
                    <g mask="url(#mask0_518_19235)"></g>
                  </svg>
                  <p className="text-dark-100 dark:text-white font-bold">
                    {data.value}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-14">
          <LineChart
            yAxis={[{ position: "none" }]}
            xAxis={[
              {
                data: TimeFrime[timeChart],
                scaleType: "point",
              },
            ]}
            series={[
              // 🔴 area قرمز زیرین
              {
                data: otherData[timeChart],
                color: "url(#RedGradient)",
                area: true,
                showMark: false,
                labelMarkType: "none",
              },
              // 🟢 area سبز رویی
              {
                data: dataFrime[timeChart],
                color: "url(#GreenGradient)",
                area: true,
                showMark: false,
                labelMarkType: "none",
              },
              // 🔴 خط قرمز واضح
              {
                data: otherData[timeChart],
                color: "#E45851",
                area: false,
                showMark: false,
                labelMarkType: "none",
              },
              // 🟢 خط سبز واضح (رویی)
              {
                data: dataFrime[timeChart],
                color: "#62CA76",
                area: false,
                showMark: false,
                labelMarkType: "none",
              },
            ]}
            height={260}
          >
            <defs>
              <linearGradient
                id="GreenGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#62CA76" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#62CA76" stopOpacity="0" />
              </linearGradient>

              <linearGradient
                id="RedGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#E45851" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#E45851" stopOpacity="0" />
              </linearGradient>
            </defs>
          </LineChart>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-5 md:flex-row items-center justify-between mt-[30px] gap-x-7 pb-32 sm:pb-0">
        <Card
          data={[12, 24, 31, 14, 45, 62, 70, 84, 92, 10, 47, 55, 12]}
          titel={"Returning Customers"}
          content={"10.3k"}
          colorChart={"#3E6BEC"}
        />
        <Card
          data={[12, 24, 31, 14, 45, 54, 79, 74, 80, 10, 47, 55, 12]}
          titel={"New Users"}
          content={"2.9k"}
          colorChart={"#FDDE69"}
        />
      </div>
    </div>
  );
};

export default TraficSource;
