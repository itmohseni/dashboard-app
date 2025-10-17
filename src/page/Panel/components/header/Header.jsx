import HeaderM from "./mobile/HeaderM";
const info = {
  name: "abolfazl",
  lastName: "mohseni",
  token: "login",
  profile: "./src/assets/images/abolfazlmohseni.jpg",
};

const Header = () => {
  // const { info, setInfo } = useInfo();

  // useEffect(() => {
  //   setInfo({
  //     name: "abolfazl",
  //     lastName: "mohseni",
  //     token: "login",
  //     profile: "./src/assets/images/abolfazlmohseni.jpg",
  //   });
  // }, []);

  if (!info)
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black/10 text-white text-2xl">
        <p>Loadin...</p>
      </div>
    );
  return (
    <>
      <div className="hidden sm:flex w-full h-[58px] items-center justify-end sm:justify-between mt-2.5 sm:mt-0">
        <div className="hidden sm:flex w-80 h-full items-center bg-white dark:bg-darkgray-100 rounded-xl">
          <svg
            className="w-[18px] h-[18px] ml-5"
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
              id="mask0_441_25463"
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
            <g mask="url(#mask0_441_25463)"></g>
          </svg>
          <input
            type="text"
            placeholder="Search for a stats…"
            className="outline-0 h-full w-full px-2.5 text-gray-100"
          />
        </div>
        <div className="flex items-center">
          <span className="text-dark dark:text-white">{info.name}</span>
          <div className="w-12 h-12 mr-5 ml-2.5 rounded-2xl overflow-hidden">
            <img src={info.profile} alt={info.name} />
          </div>
          <div className="w-12 h-12 rounded-2xl bg-error-100 text-white flex items-center justify-center">
            <p>1</p>
          </div>
        </div>
      </div>
      <div className="sm:hidden w-full">
        <HeaderM />
      </div>
    </>
  );
};

export default Header;
