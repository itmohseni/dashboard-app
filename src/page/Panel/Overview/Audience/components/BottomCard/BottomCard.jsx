const BottomCard = ({ title, data }) => {
  return (
    <div className="w-full sm:w-1/2 bg-white dark:bg-darkgray-100 rounded-xl px-5 py-7">
      <p className="font-bold text-dark-100 dark:text-white">{title}</p>
      <div className="w-full divide-y divide-gray-80/20 ">
        {data.map((item) => {
          return (
            <div className="py-3.5">
              <div className="flex items-center justify-between text-dark-100 dark:text-white font-bold">
                <p>{item.name}</p>
                <p>{item.value}%</p>
              </div>
              <div className="w-full h-2.5 bg-gray-80/20 mt-2.5 rounded-xl">
                <div
                  className={`h-full rounded-xl`}
                  style={{
                    width: `${item.value}%`,
                    background: item.color,
                  }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomCard;
