import { useState } from "react";
import LoginBase from "../components/LoginBase";
import LoginHead from "../components/LoginHead";
import LoginBtn from "../components/LoginBtn";
const Sinup = () => {
  const [showPas, setshowPas] = useState(false);
  return (
    <LoginBase>
      <LoginHead titel={"Create an account"} subtitel={"Sign up to continue"}  />
      <div className="mt-8 sm:mt-10">
        <label
          htmlFor="email"
          className="text-dark-100 dark:text-white font-bold text-xs"
        >
          NAME
        </label>
        <div className="flex items-center w-full border-2 border-gray-80/40 h-12 rounded-sm mt-2.5">
          <input
            type="text"
            placeholder="Davin Wong"
            className="text-gray-100 dark:text-dark-text w-full h-full px-3.5 text-sm outline-0"
          />
        </div>
      </div>
      <div className="mt-5 sm:mt-5">
        <label
          htmlFor="email"
          className="text-dark-100 dark:text-white font-bold text-xs "
        >
          EMAIL
        </label>
        <div className="flex items-center w-full border-2 border-gray-80/40 h-12 rounded-sm mt-2.5">
          <input
            type="text"
            placeholder="davin.wong@mail.com"
            className="text-gray-100 dark:text-dark-text w-full h-full px-3.5 text-sm outline-0"
          />
          <svg
            className="mr-3.5"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM9 16.2C5.031 16.2 1.8 12.969 1.8 9C1.8 5.031 5.031 1.8 9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 12.969 12.969 16.2 9 16.2ZM13.131 5.022L7.2 10.953L4.869 8.631L3.6 9.9L7.2 13.5L14.4 6.3L13.131 5.022Z"
              fill="#62CA76"
            />
            <mask
              id="mask0_428_29996"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="18"
              height="18"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0C4.05 0 0 4.05 0 9C0 13.95 4.05 18 9 18C13.95 18 18 13.95 18 9C18 4.05 13.95 0 9 0ZM9 16.2C5.031 16.2 1.8 12.969 1.8 9C1.8 5.031 5.031 1.8 9 1.8C12.969 1.8 16.2 5.031 16.2 9C16.2 12.969 12.969 16.2 9 16.2ZM13.131 5.022L7.2 10.953L4.869 8.631L3.6 9.9L7.2 13.5L14.4 6.3L13.131 5.022Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_428_29996)"></g>
          </svg>
        </div>
      </div>
      <div className="mt-5">
        <label
          htmlFor="email"
          className="text-dark-100 dark:text-white font-bold text-xs"
        >
          password
        </label>
        <div className="flex items-center w-full border-2 border-gray-80/40 h-12 rounded-sm mt-1.5">
          <input
            type={showPas ? "text" : "password"}
            className="text-gray-100 dark:text-dark-text w-full h-full px-3.5 text-sm outline-0"
          />
          <svg
            onClick={() => {
              setshowPas(!showPas);
            }}
            className="mr-3.5 dark:text-white"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 6.091C7.64439 6.091 6.54545 7.18994 6.54545 8.54554C6.54545 9.90115 7.64439 11.0001 9 11.0001C10.3556 11.0001 11.4545 9.90115 11.4545 8.54554C11.4545 7.18994 10.3556 6.091 9 6.091ZM9 12.6365C6.74065 12.6365 4.90909 10.8049 4.90909 8.54554C4.90909 6.2862 6.74065 4.45463 9 4.45463C11.2593 4.45463 13.0909 6.2862 13.0909 8.54554C13.0909 10.8049 11.2593 12.6365 9 12.6365ZM9 2.40918C4.90909 2.40918 1.41545 4.95373 0 8.54554C1.41545 12.1374 4.90909 14.6819 9 14.6819C13.0909 14.6819 16.5845 12.1374 18 8.54554C16.5845 4.95373 13.0909 2.40918 9 2.40918Z"
            />
            <mask
              id="mask0_428_16068"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="2"
              width="18"
              height="13"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 6.091C7.64439 6.091 6.54545 7.18994 6.54545 8.54554C6.54545 9.90115 7.64439 11.0001 9 11.0001C10.3556 11.0001 11.4545 9.90115 11.4545 8.54554C11.4545 7.18994 10.3556 6.091 9 6.091ZM9 12.6365C6.74065 12.6365 4.90909 10.8049 4.90909 8.54554C4.90909 6.2862 6.74065 4.45463 9 4.45463C11.2593 4.45463 13.0909 6.2862 13.0909 8.54554C13.0909 10.8049 11.2593 12.6365 9 12.6365ZM9 2.40918C4.90909 2.40918 1.41545 4.95373 0 8.54554C1.41545 12.1374 4.90909 14.6819 9 14.6819C13.0909 14.6819 16.5845 12.1374 18 8.54554C16.5845 4.95373 13.0909 2.40918 9 2.40918Z"
                fill="white"
              />
            </mask>
            <g mask="url(#mask0_428_16068)"></g>
          </svg>
        </div>
      </div>
      <LoginBtn
        classlist={"text-dark-100 bg-Secondary-100 mt-3"}
        text={"Create an account"}
      />
      <LoginBtn
        classlist={
          "text-dark-100 dark:text-white border border-gray-100/20 mt-3"
        }
        text={"Aready have an account? Login"}
      />
    </LoginBase>
  );
};

export default Sinup;
