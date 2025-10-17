const TopLocations = ({ data }) => {
  return (
    <div className="w-full px-8 py-5 mt-10 bg-white dark:bg-darkgray-100 rounded-xl flex flex-col sm:flex-row justify-between  gap-x-7">
      <div className="w-full sm:w-1/2">
        <p className="text-2xl font-bold text-dark-100 dark:text-white">
          Top Locations
        </p>
        <img
          src="./src/assets/images/Map.png"
          alt="map"
          className="mt-10 w-11/12"
        />
      </div>
      <div className="w-full sm:w-1/2 space-y-7 mt-7 sm:mt-0">
        {data.map((item) => {
          return (
            <div>
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

export default TopLocations;
