const info = {
  name: "abolfazl",
  lastName: "mohseni",
  token: "login",
  profile: "./src/assets/images/abolfazlmohseni.jpg",
};
const Mail = () => {
  return (
    <div className="w-[97%] bg-white dark:bg-darkgray-100 flex gap-x-4 p-5 rounded-xl cursor-pointer" >
      <div className="flex flex-col justify-between items-center ">
        <div className="w-12 h-12 rounded-2xl overflow-hidden">
          <img src={info.profile} alt={info.name} />
        </div>
        <div className="text-gray-100">
          <svg
            className="w-[18px] h-[18px]"
            viewBox="0 0 18 18"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.95 13.9C2.21619 13.9 0 11.6838 0 8.95C0 6.21619 2.21619 4 4.95 4H14.4C16.3882 4 18 5.61177 18 7.6C18 9.58822 16.3882 11.2 14.4 11.2H6.75C5.50736 11.2 4.5 10.1926 4.5 8.95C4.5 7.70736 5.50736 6.7 6.75 6.7H13.5V8.05H6.75C6.25294 8.05 5.85 8.45294 5.85 8.95C5.85 9.44706 6.25294 9.85 6.75 9.85H14.4C14.9967 9.85 15.569 9.61295 15.991 9.19099C16.4129 8.76903 16.65 8.19674 16.65 7.6C16.65 7.00326 16.4129 6.43097 15.991 6.00901C15.569 5.58705 14.9967 5.35 14.4 5.35H4.95C2.96177 5.35 1.35 6.96177 1.35 8.95C1.35 10.9382 2.96177 12.55 4.95 12.55H13.5V13.9H4.95Z"
              fill="currentColor"
            />
            <mask
              id="mask0_560_18571"
              style={{ maskType: "luminance" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="4"
              width="18"
              height="10"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.95 13.9C2.21619 13.9 0 11.6838 0 8.95C0 6.21619 2.21619 4 4.95 4H14.4C16.3882 4 18 5.61177 18 7.6C18 9.58822 16.3882 11.2 14.4 11.2H6.75C5.50736 11.2 4.5 10.1926 4.5 8.95C4.5 7.70736 5.50736 6.7 6.75 6.7H13.5V8.05H6.75C6.25294 8.05 5.85 8.45294 5.85 8.95C5.85 9.44706 6.25294 9.85 6.75 9.85H14.4C14.9967 9.85 15.569 9.61295 15.991 9.19099C16.4129 8.76903 16.65 8.19674 16.65 7.6C16.65 7.00326 16.4129 6.43097 15.991 6.00901C15.569 5.58705 14.9967 5.35 14.4 5.35H4.95C2.96177 5.35 1.35 6.96177 1.35 8.95C1.35 10.9382 2.96177 12.55 4.95 12.55H13.5V13.9H4.95Z"
                fill="currentColor"
              />
            </mask>
            <g mask="url(#mask0_560_18571)"></g>
          </svg>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center text-gray-100">
          <span className="font-medium">Isabelle Luna</span>
          <span className="text-sm">3:03pm</span>
        </div>
        <p className="mt-1.5 text-dark-100 dark:text-white font-bold">
          Help Finding Information Online
        </p>
        <p className="mt-2.5 text-gray-100">
          They often claim that they do this to find leaks in the security of a
          network. The term cracker has never been associated{" "}
        </p>
      </div>
    </div>
  );
};

export default Mail;
