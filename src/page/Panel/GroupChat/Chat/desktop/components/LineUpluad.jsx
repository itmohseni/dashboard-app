const LineUpluad = () => {
  return (
    <div className="w-full h-6 relative flex rounded-md overflow-hidden mb-4">
      <div className="bg-success-100 w-[51%] h-full rounded-md"></div>
      <div className="bg-success-80/20 w-[49%] h-full"></div>
      <div className="absolute left-3.5 right-3.5 text-white flex items-center justify-between ">
        <p>analytics_report_xls</p>
        <p>51%</p>
        <svg
          className="cursor-pointer text-dark-100 dark:text-white"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.82843 9.77129L6 6.94286L3.17157 9.77129L2.22876 8.82848L5.05719 6.00005L2.22876 3.17163L3.17157 2.22882L6 5.05724L8.82843 2.22882L9.77124 3.17163L6.94281 6.00005L9.77124 8.82848L8.82843 9.77129Z"
            fill="currentColor"
          />
          <mask
            id="mask0_0_6748"
            style={{ maskType: "luminance" }}
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="8"
            height="8"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.82843 9.77129L6 6.94286L3.17157 9.77129L2.22876 8.82848L5.05719 6.00005L2.22876 3.17163L3.17157 2.22882L6 5.05724L8.82843 2.22882L9.77124 3.17163L6.94281 6.00005L9.77124 8.82848L8.82843 9.77129Z"
              fill="currentColor"
            />
          </mask>
          <g mask="url(#mask0_0_6748)"></g>
        </svg>
      </div>
    </div>
  );
};

export default LineUpluad;
