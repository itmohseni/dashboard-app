const chageTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
};
const HeaderM = () => {
  return (
    <div className="w-full py-6 px-7 flex items-center justify-between bg-white dark:bg-darkgray-100">
      <div className="flex gap-x-4">
        <div className="w-[38px] h-[38px] rounded-xl flex items-center justify-center dark:text-white border-2 border-gray-100/40">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 0C10.0899 0 13 2.91015 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.59 12.41 8.11 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z"
              fill="currentColor"
            />
            <mask
              id="mask0_576_16130"
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
                d="M6.5 0C10.0899 0 13 2.91015 13 6.5C13 8.11 12.41 9.59 11.44 10.73L11.71 11H12.5L17.5 16L16 17.5L11 12.5V11.71L10.73 11.44C9.59 12.41 8.11 13 6.5 13C2.91015 13 0 10.0899 0 6.5C0 2.91015 2.91015 0 6.5 0ZM6.5 2C4 2 2 4 2 6.5C2 9 4 11 6.5 11C9 11 11 9 11 6.5C11 4 9 2 6.5 2Z"
                fill="currentColor"
              />
            </mask>
            <g mask="url(#mask0_576_16130)"></g>
          </svg>
        </div>
        <div
          onClick={chageTheme}
          className="w-[38px] h-[38px] rounded-xl flex items-center justify-center dark:text-white border-2 border-gray-100/40"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.9997 13.6366C12.008 13.6366 13.6361 12.0085 13.6361 10.0002C13.6361 7.99185 12.008 6.36377 9.9997 6.36377C7.99136 6.36377 6.36328 7.99185 6.36328 10.0002C6.36328 12.0085 7.99136 13.6366 9.9997 13.6366Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 2V3.45457"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10 16.5457V18.0002"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.3418 4.3418L5.37454 5.37454"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.625 14.6257L15.6577 15.6585"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 10H3.45457"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.5449 10H17.9995"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.3418 15.6585L5.37454 14.6257"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.625 5.37454L15.6577 4.3418"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="text-dark-100 dark:text-white font-bold">home</div>
      <div className="flex items-center gap-4">
        <div className="w-[38px] h-[38px] rounded-xl flex items-center justify-center dark:text-white border-2 border-gray-100/40">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 13C10.1046 13 11 13.8954 11 15C11 16.1046 10.1046 17 9 17C7.89543 17 7 16.1046 7 15C7 13.8954 7.89543 13 9 13ZM9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7ZM9 1C10.1046 1 11 1.89543 11 3C11 4.10457 10.1046 5 9 5C7.89543 5 7 4.10457 7 3C7 1.89543 7.89543 1 9 1Z"
              fill="currentColor"
            />
            <mask
              id="mask0_576_16105"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="7"
              y="1"
              width="4"
              height="16"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 13C10.1046 13 11 13.8954 11 15C11 16.1046 10.1046 17 9 17C7.89543 17 7 16.1046 7 15C7 13.8954 7.89543 13 9 13ZM9 7C10.1046 7 11 7.89543 11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7ZM9 1C10.1046 1 11 1.89543 11 3C11 4.10457 10.1046 5 9 5C7.89543 5 7 4.10457 7 3C7 1.89543 7.89543 1 9 1Z"
                fill="currentColor"
              />
            </mask>
            <g mask="url(#mask0_576_16105)"></g>
          </svg>
        </div>
        <div className="w-[38px] h-[38px] rounded-xl flex items-center justify-center text-white bg-error-100">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7 13.5H4.6V7.65C4.6 5.4 6.4 3.6 8.65 3.6C10.9 3.6 12.7 5.4 12.7 7.65V13.5ZM14.5 12.6V7.65C14.5 4.887 12.574 2.574 10 1.962V1.35C10 0.604416 9.39558 0 8.65 0C7.90442 0 7.3 0.604416 7.3 1.35V1.962C4.717 2.574 2.8 4.887 2.8 7.65V12.6L1 14.4V15.3H16.3V14.4L14.5 12.6ZM8.65 18C9.64411 18 10.45 17.1941 10.45 16.2H6.85C6.85 17.1941 7.65589 18 8.65 18Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeaderM;
