const LoginBase = ({ children }) => {
  return (
    <div className="bgloginMob  w-screen h-screen flex flex-col justify-end sm:justify-center items-center">
      <div className="sm:hidden mb-10">
        <img src="./src/assets/images/logotypeDark.png" alt="logotype" />
      </div>
      <div className="w-full sm:w-[76%]  h-[80%] lg:h-3/4  bg-white rounded-t-4xl sm:rounded-4xl flex items-center justify-center dark:bg-zinc-900 ">
        {/* dark:bg-zinc-900 */}
        <div className="w-[95%] mx-auto sm:mx-0 lg:w-1/2 h-full  flex items-center justify-center">
          <div className="w-[410px] h-[95%]">
            <div className="hidden sm:block mt-10">
              <img
                src="./src/assets/images/logotypeDark.png"
                alt="logotypeDark"
                className="w-[87px] h-[38px] hidden dark:block"
              />
              <img
                src="./src/assets/images/logotype.png"
                alt="logotype"
                className="w-[87px] h-[38px] block dark:hidden"
              />
            </div>
            {children}
          </div>
        </div>
        <div className="w-1/2 h-full bg-lightgray-100 dark:bg-darkgray-100 rounded-4xl items-center justify-center hidden lg:flex">
          <div className="w-80 h-80 space-y-10">
            <div>
              <svg
                className="text-success-100 w-[120px] h-[120px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>
            </div>
            <h1 className="text-dark-100 dark:text-white text-3xl/[36px] font-bold">
              Experience matters for good applications.
            </h1>
            <p className="text-gray-100 dark:text-dark-text text-sm">
              The first is a non technical method which requires the use of
              adware removal software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBase;
