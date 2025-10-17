import LoginBase from "../components/LoginBase";
import LoginBtn from "../components/LoginBtn";
import LoginHead from "../components/LoginHead";

const RecoveryPass = () => {
  return (
    <LoginBase>
      <LoginHead
        titel={"Password Recovery"}
        subtitel={"Enter your email to recover your password"}
      />
      <div className="mt-8 sm:mt-10">
        <label
          htmlFor="email"
          className="text-dark-100 dark:text-white font-bold text-xs"
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
      <LoginBtn classlist={"bg-success-100 text-white mt-5"} text={"Send Email"} />
    </LoginBase>
  );
};

export default RecoveryPass;
