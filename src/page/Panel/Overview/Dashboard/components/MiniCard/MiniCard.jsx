const MiniCard = () => {
  return (
    <>
      <div className="flex">
        <div className="bg-white dark:bg-darkgray-100  rounded-xl flex  flex-col justify-center items-start w-[33%] px-5 py-8">
          <div className="w-12 h-12 bg-success-80/20 dark:bg-success-100 text-success-80 dark:text-white flex items-center justify-center rounded-xl ">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 0L2 4H5V11H7V4H10M13 14V7H11V14H8L12 18L16 14H13Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <p className="text-3xl font-bold text-dark-100 dark:text-white mt-3.5">
            36.1K
          </p>
          <p className="text-sm text-gray-100 dark:text-lightgray-100 mt-2.5">
            Total Sessions
          </p>
        </div>
        <div className="bg-white dark:bg-darkgray-100 rounded-xl flex  flex-col justify-center items-start w-[33%] px-5 py-8 mx-3 md:mx-[30px]">
          <div className="w-12 h-12 bg-primary-80/20 text-primary-80 dark:text-white dark:bg-primary-80 flex items-center justify-center rounded-xl ">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 1C11.2091 1 13 2.79086 13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1ZM9 3C7.89543 3 7 3.89543 7 5C7 6.10457 7.89543 7 9 7C10.1046 7 11 6.10457 11 5C11 3.89543 10.1046 3 9 3ZM9 10C11.67 10 17 11.33 17 14V17H1V14C1 11.33 6.33 10 9 10ZM9 11.9C6.03 11.9 2.9 13.36 2.9 14V15.1H15.1V14C15.1 13.36 11.97 11.9 9 11.9Z"
                fill="currentColor"
              />
              <mask
                id="mask0_464_29030"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="1"
                y="1"
                width="16"
                height="16"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 1C11.2091 1 13 2.79086 13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1ZM9 3C7.89543 3 7 3.89543 7 5C7 6.10457 7.89543 7 9 7C10.1046 7 11 6.10457 11 5C11 3.89543 10.1046 3 9 3ZM9 10C11.67 10 17 11.33 17 14V17H1V14C1 11.33 6.33 10 9 10ZM9 11.9C6.03 11.9 2.9 13.36 2.9 14V15.1H15.1V14C15.1 13.36 11.97 11.9 9 11.9Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_464_29030)"></g>
            </svg>
          </div>
          <p className="text-3xl font-bold text-dark-100 dark:text-white mt-3.5">
            2,642
          </p>
          <p className="text-sm text-gray-100 dark:text-lightgray-100 mt-2.5">
            Total Visitors
          </p>
        </div>
        <div className="bg-white dark:bg-darkgray-100 rounded-xl flex  flex-col justify-center items-start w-[33%] px-5 py-8">
          <div className="w-12 h-12 bg-error-80/20 text-error-80 dark:bg-error-80 dark:text-white flex items-center justify-center rounded-xl ">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 16.2C12.9764 16.2 16.2 12.9764 16.2 9C16.2 5.02355 12.9764 1.8 9 1.8C5.02355 1.8 1.8 5.02355 1.8 9C1.8 12.9764 5.02355 16.2 9 16.2ZM9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 13.9706 13.9706 18 9 18C4.023 18 0 13.95 0 9C0 4.02944 4.02944 0 9 0ZM9.45 4.5V9.225L13.5 11.628L12.825 12.735L8.1 9.9V4.5H9.45Z"
                fill="currentColor"
              />
              <mask
                id="mask0_464_29885"
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
                  d="M9 16.2C12.9764 16.2 16.2 12.9764 16.2 9C16.2 5.02355 12.9764 1.8 9 1.8C5.02355 1.8 1.8 5.02355 1.8 9C1.8 12.9764 5.02355 16.2 9 16.2ZM9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 13.9706 13.9706 18 9 18C4.023 18 0 13.95 0 9C0 4.02944 4.02944 0 9 0ZM9.45 4.5V9.225L13.5 11.628L12.825 12.735L8.1 9.9V4.5H9.45Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_464_29885)"></g>
            </svg>
          </div>
          <p className="text-3xl font-bold text-dark-100 dark:text-white mt-3.5">
            3.21
          </p>
          <p className="text-sm text-gray-100 dark:text-lightgray-100 mt-2.5">
            Avg Time Spend
          </p>
        </div>
      </div>
    </>
  );
};

export default MiniCard;
