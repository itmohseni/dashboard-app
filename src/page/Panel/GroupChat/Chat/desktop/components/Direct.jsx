import InputChat from "./InputChat";
import LineUpluad from "./LineUpluad";
const info = {
  name: "abolfazl",
  lastName: "mohseni",
  token: "login",
  profile: "./src/assets/images/abolfazlmohseni.jpg",
};
const Direct = () => {
  return (
    <div className="mt-10 h-[80%]">
      <div className="flex items-center justify-between pb-5 border-b border-gray-100/20">
        <div className="flex gap-x-2.5">
          <div className="w-12 h-12 rounded-xl relative">
            <div className="w-2.5 h-2.5 rounded-full  bg-success-100 absolute -top-0.5 -right-0.5"></div>
            <img src={info.profile} alt={info.name} className="rounded-xl" />
          </div>
          <div>
            <p className="font-bold text-dark-100 dark:text-white text-3xl">text test</p>
            <p className="text-gray-100 text-sm">Online</p>
          </div>
        </div>
        <div className="flex gap-x-10">
          <span>
            <svg
              className="w-7 h-7 text-gray-100"
              viewBox="0 0 30 28"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 20.8289L8.15112 24.36L9.69112 17.7022L4.52668 13.2222L11.34 12.6467L14 6.36222L16.66 12.6467L23.4733 13.2222L18.3089 17.7022L19.8489 24.36L14 20.8289ZM29.5556 11.2622L18.3711 10.3133L14 0L9.6289 10.3133L-1.55554 11.2622L6.92224 18.62L4.38668 29.5556L14 23.7533L23.6133 29.5556L21.0622 18.62L29.5556 11.2622Z"
                fill="currentColor"
              />
              <mask
                id="mask0_0_6736"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="-2"
                y="0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 20.8289L8.15112 24.36L9.69112 17.7022L4.52668 13.2222L11.34 12.6467L14 6.36222L16.66 12.6467L23.4733 13.2222L18.3089 17.7022L19.8489 24.36L14 20.8289ZM29.5556 11.2622L18.3711 10.3133L14 0L9.6289 10.3133L-1.55554 11.2622L6.92224 18.62L4.38668 29.5556L14 23.7533L23.6133 29.5556L21.0622 18.62L29.5556 11.2622Z"
                  fill="currentColor"
                />
              </mask>
              <g mask="url(#mask0_0_6736)"></g>
            </svg>
          </span>
          <span>
            <svg
              className="w-7 h-7 text-gray-100"
              viewBox="0 0 28 28"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14 20.2222C15.7182 20.2222 17.1111 21.6151 17.1111 23.3333C17.1111 25.0515 15.7182 26.4444 14 26.4444C12.2818 26.4444 10.8889 25.0515 10.8889 23.3333C10.8889 21.6151 12.2818 20.2222 14 20.2222ZM14 10.8889C15.7182 10.8889 17.1111 12.2818 17.1111 14C17.1111 15.7182 15.7182 17.1111 14 17.1111C12.2818 17.1111 10.8889 15.7182 10.8889 14C10.8889 12.2818 12.2818 10.8889 14 10.8889ZM14 1.55554C15.7182 1.55554 17.1111 2.94843 17.1111 4.66665C17.1111 6.38487 15.7182 7.77776 14 7.77776C12.2818 7.77776 10.8889 6.38487 10.8889 4.66665C10.8889 2.94843 12.2818 1.55554 14 1.55554Z"
                fill="currentColor"
              />
              <mask
                id="mask0_0_6737"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="10"
                y="1"
                width="8"
                height="26"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14 20.2222C15.7182 20.2222 17.1111 21.6151 17.1111 23.3333C17.1111 25.0515 15.7182 26.4444 14 26.4444C12.2818 26.4444 10.8889 25.0515 10.8889 23.3333C10.8889 21.6151 12.2818 20.2222 14 20.2222ZM14 10.8889C15.7182 10.8889 17.1111 12.2818 17.1111 14C17.1111 15.7182 15.7182 17.1111 14 17.1111C12.2818 17.1111 10.8889 15.7182 10.8889 14C10.8889 12.2818 12.2818 10.8889 14 10.8889ZM14 1.55554C15.7182 1.55554 17.1111 2.94843 17.1111 4.66665C17.1111 6.38487 15.7182 7.77776 14 7.77776C12.2818 7.77776 10.8889 6.38487 10.8889 4.66665C10.8889 2.94843 12.2818 1.55554 14 1.55554Z"
                  fill="currentColor"
                />
              </mask>
              <g mask="url(#mask0_0_6737)"></g>
            </svg>
          </span>
        </div>
      </div>
      <div className="h-full flex flex-col justify-between mt-10">
        <div className="flex flex-col gap-y-10">
          {/* normal text */}
          <div className="flex items-start ">
            <div className="shrink-0 w-9 h-9 rounded-xl overflow-hidden">
              <img src={info.profile} alt={info.name} />
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                <p className="font-bold text-dark-100 dark:text-white text-sm">
                  Leticia Saavedra
                </p>
                <p className="ml-2.5 text-gray-100 text-xs">4min</p>
              </div>
              <p className="pr-5 text-justify text-gray-100 mt-2.5">
                Happy Friday Team! Remember to share your reports to review
                before the end of the weekend and feel free to share your
                thoughts about it
              </p>
            </div>
          </div>
        </div>
        <div>
          <LineUpluad />
          <InputChat />
        </div>
      </div>
    </div>
  );
};

export default Direct;
