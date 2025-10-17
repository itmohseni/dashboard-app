import { useState } from "react";
import RightNow from "./components/RightNow";
import TopLocations from "./components/TopLocations";

const Realtime = () => {
  const [TimeChart, setTimeChart] = useState("Per Minute");

  return (
    <div className="mt-10">
      <div className="w-full flex gap-x-8">
        <RightNow numOne={"43%"} numTwo={"57%"} />
        <TopLocations />
      </div>
      <div className="w-full bg-white dark:bg-darkgray-100 mt-[30px] rounded-xl px-5 py-[30px] pb-32 sm:pb-0">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-dark-100 text-xl dark:text-white">
              Page Views
            </p>
          </div>
          <div className="flex gap-5">
            <button
              onClick={() => setTimeChart("Per Minute")}
              className={`cursor-pointer px-2.5 py-1 border-2 ${
                TimeChart === "Per Minute"
                  ? "border-gray-80/40 dark:text-white"
                  : "border-white dark:border-darkgray-100 dark:text-dark-text"
              } rounded-sm`}
            >
              Per Minute
            </button>
            <button
              onClick={() => setTimeChart("Per Second")}
              className={`cursor-pointer px-2.5 py-1 border-2 ${
                TimeChart === "Per Second"
                  ? "border-gray-80/40 dark:text-white"
                  : "border-white dark:border-darkgray-100 dark:text-dark-text"
              } rounded-sm`}
            >
              Per Second
            </button>
          </div>
        </div>
        <div className="flex gap-x-[30px] font-bold text-dark-100 dark:text-white text-sm mt-10">
          <div className="flex items-center">
            <div className="w-2.5 h-2.5 rounded-full mr-1 bg-primary-100"></div>
            <p>Direct</p>
          </div>
          <div className="flex items-center">
            <div className="w-2.5 h-2.5 rounded-full mr-1 bg-success-100"></div>
            <p>Referral</p>
          </div>
          <div className="flex items-center">
            <div className="w-2.5 h-2.5 rounded-full mr-1 bg-error-100"></div>
            <p>Organic Search</p>
          </div>
        </div>
        <div className="flex justify-around gap-x-3.5 sm:gap-0 w-[95%] mx-auto overflow-x-hidden">
          <div className="flex items-center flex-col mt-10">
            <div className="h-60">
              <div className="w-2.5 h-1/3 bg-error-100 rounded-t-xl"></div>
              <div className="w-2.5 h-1/3 bg-primary-100"></div>
              <div className="w-2.5 h-1/3 bg-success-100 rounded-b-xl"></div>
            </div>
            <p className="text-gray-100 mt-2.5">-55min</p>
          </div>
          <div className="flex items-center flex-col mt-10">
            <div className="h-60">
              <div className="w-2.5 h-1/3 bg-error-100 rounded-t-xl"></div>
              <div className="w-2.5 h-1/3 bg-primary-100"></div>
              <div className="w-2.5 h-1/3 bg-success-100 rounded-b-xl"></div>
            </div>
            <p className="text-gray-100 mt-2.5">-55min</p>
          </div>
          <div className="flex items-center flex-col mt-10">
            <div className="h-60">
              <div className="w-2.5 h-1/3 bg-error-100 rounded-t-xl"></div>
              <div className="w-2.5 h-1/3 bg-primary-100"></div>
              <div className="w-2.5 h-1/3 bg-success-100 rounded-b-xl"></div>
            </div>
            <p className="text-gray-100 mt-2.5">-55min</p>
          </div>
          <div className="flex items-center flex-col mt-10">
            <div className="h-60">
              <div className="w-2.5 h-1/3 bg-error-100 rounded-t-xl"></div>
              <div className="w-2.5 h-1/3 bg-primary-100"></div>
              <div className="w-2.5 h-1/3 bg-success-100 rounded-b-xl"></div>
            </div>
            <p className="text-gray-100 mt-2.5">-55min</p>
          </div>
          <div className="flex items-center flex-col mt-10">
            <div className="h-60">
              <div className="w-2.5 h-1/3 bg-error-100 rounded-t-xl"></div>
              <div className="w-2.5 h-1/3 bg-primary-100"></div>
              <div className="w-2.5 h-1/3 bg-success-100 rounded-b-xl"></div>
            </div>
            <p className="text-gray-100 mt-2.5">-55min</p>
          </div>
          <div className="flex items-center flex-col mt-10">
            <div className="h-60">
              <div className="w-2.5 h-1/3 bg-error-100 rounded-t-xl"></div>
              <div className="w-2.5 h-1/3 bg-primary-100"></div>
              <div className="w-2.5 h-1/3 bg-success-100 rounded-b-xl"></div>
            </div>
            <p className="text-gray-100 mt-2.5">-55min</p>
          </div>
          <div className="flex items-center flex-col mt-10">
            <div className="h-60">
              <div className="w-2.5 h-1/3 bg-error-100 rounded-t-xl"></div>
              <div className="w-2.5 h-1/3 bg-primary-100"></div>
              <div className="w-2.5 h-1/3 bg-success-100 rounded-b-xl"></div>
            </div>
            <p className="text-gray-100 mt-2.5">-55min</p>
          </div>
          <div className="flex items-center flex-col mt-10">
            <div className="h-60">
              <div className="w-2.5 h-1/3 bg-error-100 rounded-t-xl"></div>
              <div className="w-2.5 h-1/3 bg-primary-100"></div>
              <div className="w-2.5 h-1/3 bg-success-100 rounded-b-xl"></div>
            </div>
            <p className="text-gray-100 mt-2.5">-55min</p>
          </div>
          <div className="flex items-center flex-col mt-10">
            <div className="h-60">
              <div className="w-2.5 h-1/3 bg-error-100 rounded-t-xl"></div>
              <div className="w-2.5 h-1/3 bg-primary-100"></div>
              <div className="w-2.5 h-1/3 bg-success-100 rounded-b-xl"></div>
            </div>
            <p className="text-gray-100 mt-2.5">-55min</p>
          </div>
          <div className="flex items-center flex-col mt-10">
            <div className="h-60">
              <div className="w-2.5 h-1/3 bg-error-100 rounded-t-xl"></div>
              <div className="w-2.5 h-1/3 bg-primary-100"></div>
              <div className="w-2.5 h-1/3 bg-success-100 rounded-b-xl"></div>
            </div>
            <p className="text-gray-100 mt-2.5">-55min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Realtime;
