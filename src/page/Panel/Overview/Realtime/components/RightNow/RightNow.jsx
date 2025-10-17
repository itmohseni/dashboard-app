const RightNow = ({ numOne, numTwo }) => {
  return (
    <div className="bg-white dark:bg-darkgray-100 w-full sm:w-1/2 rounded-xl py-7 px-5">
      <p className="text-dark-100 dark:text-white text-[22px] font-bold">
        Right Now
      </p>
      <p className="text-dark-100 dark:text-white text-7xl font-bold  mt-5">
        289
      </p>
      <p className="text-sm text-gray-100 mt-2.5">Active Users</p>
      <div className="mt-8 w-11/12 flex">
        <div
          className={`text-center text-white bg-error-100 rounded-l-xl`}
          style={{ width: numOne }}
        >
          <p>{numOne}</p>
        </div>
        <div
          className={`text-center text-white bg-success-100 rounded-r-xl`}
          style={{ width: numTwo }}
        >
          <p>{numTwo}</p>
        </div>
      </div>
      <div className="mt-7 flex w-11/12 gap-7 items-center">
        <div className="flex items-center">
          <div className="w-2.5 h-2.5 bg-error-100 rounded-full"></div>
          <p className="ml-1.5 font-bold text-xs text-dark-100 dark:text-white">
            {" "}
            New Visitor
          </p>
        </div>
        <div className="flex items-center">
          <div className="w-2.5 h-2.5 bg-success-100 rounded-full"></div>
          <p className="ml-1.5 font-bold text-xs text-dark-100 dark:text-white">
            Returning Visitor
          </p>
        </div>
      </div>
    </div>
  );
};

export default RightNow;
