import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useInfo } from "../../../../context/Info";

const icons = [
  `<svg
  width="18"
  height="18"
  viewBox="0 0 18 18"
  fill="currentColor"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M16 2V4H12V2H16ZM6 2V8H2V2H6ZM16 10V16H12V10H16ZM6 14V16H2V14H6ZM18 0H10V6H18V0ZM8 0H0V10H8V0ZM18 8H10V18H18V8ZM8 12H0V18H8V12Z"
    fill="currentColor"
  />
  <mask
    id="mask0_441_25699"
    maskType="luminance"
    maskUnits="userSpaceOnUse"
    x="0"
    y="0"
    width="18"
    height="18"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 2V4H12V2H16ZM6 2V8H2V2H6ZM16 10V16H12V10H16ZM6 14V16H2V14H6ZM18 0H10V6H18V0ZM8 0H0V10H8V0ZM18 8H10V18H18V8ZM8 12H0V18H8V12Z"
      fill="currentColor"
    />
  </mask>
  <g mask="url(#mask0_441_25699)" />
</svg>
`,
  `<svg
  width="18"
  height="18"
  viewBox="0 0 18 18"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fillRule="evenodd"
    clipRule="evenodd"
    d="M16.2 0H1.8C0.805887 0 0 0.805887 0 1.8V18L3.6 14.4H16.2C17.1941 14.4 18 13.5941 18 12.6V1.8C18 0.805887 17.1941 0 16.2 0ZM16.2 12.6H3.6L1.8 14.4V1.8H16.2"
    fill="currentColor"
  />
  <mask
    id="mask0_441_25690"
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
      d="M16.2 0H1.8C0.805887 0 0 0.805887 0 1.8V18L3.6 14.4H16.2C17.1941 14.4 18 13.5941 18 12.6V1.8C18 0.805887 17.1941 0 16.2 0ZM16.2 12.6H3.6L1.8 14.4V1.8H16.2"
      fill="white"
    />
  </mask>
  <g mask="url(#mask0_441_25690)"></g>
</svg>
`,
  `
<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="currentColor" clipRule="evenodd" d="M6.4 8.1V9.9H4.6V8.1H6.4ZM10 8.1V9.9H8.2V8.1H10ZM13.6 8.1V9.9H11.8V8.1H13.6ZM15.4 1.8C16.3941 1.8 17.2 2.60589 17.2 3.6V16.2C17.2 17.1941 16.3941 18 15.4 18H2.8C1.801 18 1 17.19 1 16.2V3.6C1 2.60589 1.80589 1.8 2.8 1.8H3.7V0H5.5V1.8H12.7V0H14.5V1.8H15.4ZM15.4 16.2V6.3H2.8V16.2H15.4ZM6.4 11.7V13.5H4.6V11.7H6.4ZM10 11.7V13.5H8.2V11.7H10ZM13.6 11.7V13.5H11.8V11.7H13.6Z" fill="currentColor"/>
</svg>
`,
  `<svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M1.63636 10.5455L2.04545 10.6027L5.78455 6.86364C5.63727 6.33182 5.77636 5.72636 6.21 5.30091C6.84818 4.65455 7.87909 4.65455 8.51727 5.30091C8.95091 5.72636 9.09 6.33182 8.94273 6.86364L11.0455 8.96636L11.4545 8.90909C11.6018 8.90909 11.7409 8.90909 11.8636 8.96636L14.7845 6.04545C14.7273 5.92273 14.7273 5.78364 14.7273 5.63636C14.7273 4.73262 15.4599 4 16.3636 4C17.2674 4 18 4.73262 18 5.63636C18 6.5401 17.2674 7.27273 16.3636 7.27273C16.2164 7.27273 16.0773 7.27273 15.9545 7.21545L13.0336 10.1364C13.0909 10.2591 13.0909 10.3982 13.0909 10.5455C13.0909 11.4492 12.3583 12.1818 11.4545 12.1818C10.5508 12.1818 9.81818 11.4492 9.81818 10.5455L9.87545 10.1364L7.77273 8.03364C7.51091 8.09091 7.21636 8.09091 6.95455 8.03364L3.21545 11.7727L3.27273 12.1818C3.27273 13.0856 2.5401 13.8182 1.63636 13.8182C0.732625 13.8182 0 13.0856 0 12.1818C0 11.2781 0.732625 10.5455 1.63636 10.5455Z" fill="currentColor"/>
<mask id="mask0_441_25673" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="4" width="18" height="10">
<path fillRule="evenodd" clipRule="evenodd" d="M1.63636 10.5455L2.04545 10.6027L5.78455 6.86364C5.63727 6.33182 5.77636 5.72636 6.21 5.30091C6.84818 4.65455 7.87909 4.65455 8.51727 5.30091C8.95091 5.72636 9.09 6.33182 8.94273 6.86364L11.0455 8.96636L11.4545 8.90909C11.6018 8.90909 11.7409 8.90909 11.8636 8.96636L14.7845 6.04545C14.7273 5.92273 14.7273 5.78364 14.7273 5.63636C14.7273 4.73262 15.4599 4 16.3636 4C17.2674 4 18 4.73262 18 5.63636C18 6.5401 17.2674 7.27273 16.3636 7.27273C16.2164 7.27273 16.0773 7.27273 15.9545 7.21545L13.0336 10.1364C13.0909 10.2591 13.0909 10.3982 13.0909 10.5455C13.0909 11.4492 12.3583 12.1818 11.4545 12.1818C10.5508 12.1818 9.81818 11.4492 9.81818 10.5455L9.87545 10.1364L7.77273 8.03364C7.51091 8.09091 7.21636 8.09091 6.95455 8.03364L3.21545 11.7727L3.27273 12.1818C3.27273 13.0856 2.5401 13.8182 1.63636 13.8182C0.732625 13.8182 0 13.0856 0 12.1818C0 11.2781 0.732625 10.5455 1.63636 10.5455Z" fill="currentColor"/>
</mask>
<g mask="url(#mask0_441_25673)">
</g>
</svg>
`,
  `<svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M9 1C11.2091 1 13 2.79086 13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1ZM9 3C7.89543 3 7 3.89543 7 5C7 6.10457 7.89543 7 9 7C10.1046 7 11 6.10457 11 5C11 3.89543 10.1046 3 9 3ZM9 10C11.67 10 17 11.33 17 14V17H1V14C1 11.33 6.33 10 9 10ZM9 11.9C6.03 11.9 2.9 13.36 2.9 14V15.1H15.1V14C15.1 13.36 11.97 11.9 9 11.9Z" fill="currentColor"/>
<mask id="mask0_441_25660" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="1" y="1" width="16" height="16">
<path fillRule="evenodd" clipRule="evenodd" d="M9 1C11.2091 1 13 2.79086 13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1ZM9 3C7.89543 3 7 3.89543 7 5C7 6.10457 7.89543 7 9 7C10.1046 7 11 6.10457 11 5C11 3.89543 10.1046 3 9 3ZM9 10C11.67 10 17 11.33 17 14V17H1V14C1 11.33 6.33 10 9 10ZM9 11.9C6.03 11.9 2.9 13.36 2.9 14V15.1H15.1V14C15.1 13.36 11.97 11.9 9 11.9Z" fill="currentColor"/>
</mask>
<g mask="url(#mask0_441_25660)">
</g>
</svg>
`,
  `
<svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M8.99999 5.4C10.9882 5.4 12.6 7.01178 12.6 9C12.6 10.9882 10.9882 12.6 8.99999 12.6C7.01176 12.6 5.39999 10.9882 5.39999 9C5.39999 7.01178 7.01176 5.4 8.99999 5.4ZM8.99999 7.2C8.00588 7.2 7.19999 8.00589 7.19999 9C7.19999 9.99411 8.00588 10.8 8.99999 10.8C9.9941 10.8 10.8 9.99411 10.8 9C10.8 8.00589 9.9941 7.2 8.99999 7.2ZM7.19999 18C6.97499 18 6.78599 17.838 6.74999 17.622L6.41699 15.237C5.84999 15.012 5.36399 14.706 4.89599 14.346L2.65499 15.255C2.45699 15.327 2.21399 15.255 2.10599 15.057L0.30599 11.943C0.18899 11.745 0.24299 11.502 0.41399 11.367L2.31299 9.873L2.24999 9L2.31299 8.1L0.41399 6.633C0.24299 6.498 0.18899 6.255 0.30599 6.057L2.10599 2.943C2.21399 2.745 2.45699 2.664 2.65499 2.745L4.89599 3.645C5.36399 3.294 5.84999 2.988 6.41699 2.763L6.74999 0.378C6.78599 0.162 6.97499 0 7.19999 0H10.8C11.025 0 11.214 0.162 11.25 0.378L11.583 2.763C12.15 2.988 12.636 3.294 13.104 3.645L15.345 2.745C15.543 2.664 15.786 2.745 15.894 2.943L17.694 6.057C17.811 6.255 17.757 6.498 17.586 6.633L15.687 8.1L15.75 9L15.687 9.9L17.586 11.367C17.757 11.502 17.811 11.745 17.694 11.943L15.894 15.057C15.786 15.255 15.543 15.336 15.345 15.255L13.104 14.355C12.636 14.706 12.15 15.012 11.583 15.237L11.25 17.622C11.214 17.838 11.025 18 10.8 18H7.19999ZM8.32499 1.8L7.99199 4.149C6.91199 4.374 5.95799 4.95 5.26499 5.751L3.09599 4.815L2.42099 5.985L4.31999 7.38C3.95999 8.433 3.95999 9.576 4.31999 10.62L2.41199 12.024L3.08699 13.194L5.27399 12.258C5.96699 13.05 6.91199 13.626 7.98299 13.842L8.31599 16.2H9.68399L10.017 13.851C11.088 13.626 12.033 13.05 12.726 12.258L14.913 13.194L15.588 12.024L13.68 10.629C14.04 9.576 14.04 8.433 13.68 7.38L15.579 5.985L14.904 4.815L12.735 5.751C12.042 4.95 11.088 4.374 10.008 4.158L9.67499 1.8H8.32499Z" fill="currentColor"/>
<mask id="mask0_441_25647" style="maskType:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
<path fillRule="evenodd" clipRule="evenodd" d="M8.99999 5.4C10.9882 5.4 12.6 7.01178 12.6 9C12.6 10.9882 10.9882 12.6 8.99999 12.6C7.01176 12.6 5.39999 10.9882 5.39999 9C5.39999 7.01178 7.01176 5.4 8.99999 5.4ZM8.99999 7.2C8.00588 7.2 7.19999 8.00589 7.19999 9C7.19999 9.99411 8.00588 10.8 8.99999 10.8C9.9941 10.8 10.8 9.99411 10.8 9C10.8 8.00589 9.9941 7.2 8.99999 7.2ZM7.19999 18C6.97499 18 6.78599 17.838 6.74999 17.622L6.41699 15.237C5.84999 15.012 5.36399 14.706 4.89599 14.346L2.65499 15.255C2.45699 15.327 2.21399 15.255 2.10599 15.057L0.30599 11.943C0.18899 11.745 0.24299 11.502 0.41399 11.367L2.31299 9.873L2.24999 9L2.31299 8.1L0.41399 6.633C0.24299 6.498 0.18899 6.255 0.30599 6.057L2.10599 2.943C2.21399 2.745 2.45699 2.664 2.65499 2.745L4.89599 3.645C5.36399 3.294 5.84999 2.988 6.41699 2.763L6.74999 0.378C6.78599 0.162 6.97499 0 7.19999 0H10.8C11.025 0 11.214 0.162 11.25 0.378L11.583 2.763C12.15 2.988 12.636 3.294 13.104 3.645L15.345 2.745C15.543 2.664 15.786 2.745 15.894 2.943L17.694 6.057C17.811 6.255 17.757 6.498 17.586 6.633L15.687 8.1L15.75 9L15.687 9.9L17.586 11.367C17.757 11.502 17.811 11.745 17.694 11.943L15.894 15.057C15.786 15.255 15.543 15.336 15.345 15.255L13.104 14.355C12.636 14.706 12.15 15.012 11.583 15.237L11.25 17.622C11.214 17.838 11.025 18 10.8 18H7.19999ZM8.32499 1.8L7.99199 4.149C6.91199 4.374 5.95799 4.95 5.26499 5.751L3.09599 4.815L2.42099 5.985L4.31999 7.38C3.95999 8.433 3.95999 9.576 4.31999 10.62L2.41199 12.024L3.08699 13.194L5.27399 12.258C5.96699 13.05 6.91199 13.626 7.98299 13.842L8.31599 16.2H9.68399L10.017 13.851C11.088 13.626 12.033 13.05 12.726 12.258L14.913 13.194L15.588 12.024L13.68 10.629C14.04 9.576 14.04 8.433 13.68 7.38L15.579 5.985L14.904 4.815L12.735 5.751C12.042 4.95 11.088 4.374 10.008 4.158L9.67499 1.8H8.32499Z" fill="currentColor"/>
</mask>
<g mask="url(#mask0_441_25647)">
</g>
</svg>

`,
];
const pash = ["/dashborad", "/GroupChat"];
const bottommenuItem = [
  `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 16.091C14.2594 16.091 16.0909 14.2594 16.0909 12.0001C16.0909 9.74074 14.2594 7.90918 12 7.90918C9.74068 7.90918 7.90912 9.74074 7.90912 12.0001C7.90912 14.2594 9.74068 16.091 12 16.091Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 3V4.63636" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 19.3635V20.9999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.63452 5.63452L6.79634 6.79634" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.2036 17.2036L18.3654 18.3654" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 12H4.63636" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.3636 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.63452 18.3654L6.79634 17.2036" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.2036 6.79634L18.3654 5.63452" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

`,
  `
<svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M11.08 12.59L13.67 10H4V8H13.67L11.08 5.41L12.5 4L17.5 9L12.5 14L11.08 12.59ZM16 0C17.1046 0 18 0.89543 18 2V6.67L16 4.67V2H2V16H16V13.33L18 11.33V16C18 17.1046 17.1046 18 16 18H2C0.89 18 0 17.1 0 16V2C0 0.89 0.89 0 2 0H16Z" fill="currentColor"/>
<mask id="mask0_441_25623" style="maskType:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
<path fillRule="evenodd" clipRule="evenodd" d="M11.08 12.59L13.67 10H4V8H13.67L11.08 5.41L12.5 4L17.5 9L12.5 14L11.08 12.59ZM16 0C17.1046 0 18 0.89543 18 2V6.67L16 4.67V2H2V16H16V13.33L18 11.33V16C18 17.1046 17.1046 18 16 18H2C0.89 18 0 17.1 0 16V2C0 0.89 0.89 0 2 0H16Z" fill="currentColor"/>
</mask>
<g mask="url(#mask0_441_25623)">
</g>
</svg>

`,
];
const links = ["/dashborad", "/GroupChat", "/", "/", "/", "/"];
const Sidebar = () => {
  const { pathname } = useLocation();
  const { info, setInfo } = useInfo();

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    document.body.classList.add(theme);

    setInfo({
      ...info,
      activePage: 0,
    });
    console.log("sidbar");
  }, [pathname]);
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
  return (
    <div className="w-screen fixed sm:static -bottom-0.5 z-50 bg-white dark:bg-darkgray-100 rounded-t-4xl py-6 sm:m-0 sm:rounded-none sm:w-[11.5%] sm:h-full sm:flex sm:flex-col sm:items-center sm:justify-around  ">
      <div className="hidden sm:block">
        <img src="./src/assets/images/icon-menu.png" alt="logo" />
      </div>
      <div className="flex sm:flex-col justify-around sm:justify-center sm:gap-y-10">
        {icons.map((icon, index) => {
          return (
            <Link
              key={index}
              to={links[index]}
              className={`${index === 5 ? "hidden sm:flex" : ""}`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center hover:scale-110  transition-all  ${
                  pash[index] === pathname
                    ? "bg-primary-100 text-white"
                    : "bg-lightgray-100 text-gray-100 dark:bg-gray-80/20 dark:text-white hover:bg-gray-100/15 "
                } ${index === 5 ? "hidden sm:flex" : ""}`}
              >
                <div dangerouslySetInnerHTML={{ __html: icons[index] }}></div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="hidden sm:flex flex-col  gap-y-5">
        {bottommenuItem.map((index, icon) => {
          return (
            <div
              key={icon}
              onClick={icon === 0 ? chageTheme : null}
              className={`${
                icon === 1 ? "dark:text-white" : ""
              } w-12 h-12 rounded-xl flex items-center justify-center border-2 border-gray-100 text-gray-100 hover:border-gray-100/50 transition-colors`}
            >
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: bottommenuItem[icon] }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
