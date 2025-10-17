import { LineChart } from "@mui/x-charts";

import { useEffect, useState } from "react";
const timeFrimeTxt = ["Today", "7d", "2w", "1m"];
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
const dataFrime = [
  [57, 12, 57, 89, 46, 45, 35, 80, 9, 73, 54, 56, 67],
  [89, 46, 45, 35, 80, 56, 73],
  [89, 46, 45, 35, 80, 56, 73, 89, 46, 45, 35, 80, 56, 73],
  [],
];

const Card1 = () => {
  const [timeChart, setTimeChart] = useState(0);

  return (
    <div className="w-full flex flex-col items-start bg-white dark:bg-darkgray-100 mt-6 rounded-xl p-[30px]">
      <div className="w-full flex justify-between items-center ">
        <div>
          <p className="text-dark-100 dark:text-white font-bold">
            Sessions Overview
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
          <button className=" hidden md:flex items-center gap-x-1.5 text-white bg-success-100 px-2.5 py-1 rounded-sm dark:text-dark-100">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.55554 14.0001H12.4444V12.4445H1.55554V14.0001ZM12.4444 5.4445H9.33332V0.777832H4.66665V5.4445H1.55554L6.99999 10.8889L12.4444 5.4445Z"
                fill="currentColor"
              />
              <mask
                id="mask0_466_30097"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="1"
                y="0"
                width="12"
                height="14"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.55554 14.0001H12.4444V12.4445H1.55554V14.0001ZM12.4444 5.4445H9.33332V0.777832H4.66665V5.4445H1.55554L6.99999 10.8889L12.4444 5.4445Z"
                  fill="currentColor"
                />
              </mask>
              <g mask="url(#mask0_466_30097)"></g>
            </svg>
            <span>Download</span>
          </button>
        </div>
      </div>
      <div className="w-full h-[220px]">
        <LineChart
          yAxis={[
            {
              position: "none",
            },
          ]}
          xAxis={[
            {
              data: TimeFrime[timeChart],
              scaleType: "point",
            },
          ]}
          series={[
            {
              data: dataFrime[timeChart],
              color: "#62CA76",
              area: true,
              showMark: false,
              labelMarkType: "line",
            },
          ]}
          height={260}
        />
      </div>
    </div>
  );
};

export default Card1;
