import Selector from "../../../../components/Selector";
import { useState } from "react";
import Mail from "./components/Mail";
import Mailfile from "./components/Mailfile";
const icons = [
  `      <svg
                    width="28"
                    height="28"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.84204 13.6315H12.1578V12.1579H1.84204V13.6315ZM12.1578 5.52628H9.21046V1.10522H4.78941V5.52628H1.84204L6.99994 10.6842L12.1578 5.52628Z"
                      fill="currentColor"
                    />
                    <mask
                      id="mask0_546_27374"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="1"
                      y="1"
                      width="12"
                      height="13"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.84204 13.6315H12.1578V12.1579H1.84204V13.6315ZM12.1578 5.52628H9.21046V1.10522H4.78941V5.52628H1.84204L6.99994 10.6842L12.1578 5.52628Z"
                        fill="currentColor"
                      />
                    </mask>
                    <g mask="url(#mask0_546_27374)"></g>
        </svg>`,
  `  <svg
                              width="28"
                    height="28"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.6316 6.99994L8.47367 1.84204V4.78941C3.31578 5.52625 1.10525 9.21046 0.368408 12.8947C2.21051 10.3157 4.78946 9.13678 8.47367 9.13678V12.1578L13.6316 6.99994Z"
                      fill="currentColor"
                    />
                    <mask
                      id="mask0_546_27369"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="1"
                      width="14"
                      height="12"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.6316 6.99994L8.47367 1.84204V4.78941C3.31578 5.52625 1.10525 9.21046 0.368408 12.8947C2.21051 10.3157 4.78946 9.13678 8.47367 9.13678V12.1578L13.6316 6.99994Z"
                        fill="currentColor"
                      />
                    </mask>
                    <g mask="url(#mask0_546_27369)"></g>
    </svg>`,
  ` <svg
                               width="28"
                    height="28"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.99993 9.94733C7.81382 9.94733 8.47361 10.6071 8.47361 11.421C8.47361 12.2349 7.81382 12.8947 6.99993 12.8947C6.18604 12.8947 5.52625 12.2349 5.52625 11.421C5.52625 10.6071 6.18604 9.94733 6.99993 9.94733ZM6.99993 5.52628C7.81382 5.52628 8.47361 6.18607 8.47361 6.99996C8.47361 7.81386 7.81382 8.47365 6.99993 8.47365C6.18604 8.47365 5.52625 7.81386 5.52625 6.99996C5.52625 6.18607 6.18604 5.52628 6.99993 5.52628ZM6.99998 1.10522C7.81387 1.10522 8.47366 1.76502 8.47366 2.57891C8.47366 3.3928 7.81387 4.05259 6.99998 4.05259C6.18609 4.05259 5.5263 3.3928 5.5263 2.57891C5.5263 1.76502 6.18609 1.10522 6.99998 1.10522Z"
                      fill="currentColor"
                    />
                    <mask
                      id="mask0_546_27358"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="5"
                      y="1"
                      width="4"
                      height="12"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.99993 9.94733C7.81382 9.94733 8.47361 10.6071 8.47361 11.421C8.47361 12.2349 7.81382 12.8947 6.99993 12.8947C6.18604 12.8947 5.52625 12.2349 5.52625 11.421C5.52625 10.6071 6.18604 9.94733 6.99993 9.94733ZM6.99993 5.52628C7.81382 5.52628 8.47361 6.18607 8.47361 6.99996C8.47361 7.81386 7.81382 8.47365 6.99993 8.47365C6.18604 8.47365 5.52625 7.81386 5.52625 6.99996C5.52625 6.18607 6.18604 5.52628 6.99993 5.52628ZM6.99998 1.10522C7.81387 1.10522 8.47366 1.76502 8.47366 2.57891C8.47366 3.3928 7.81387 4.05259 6.99998 4.05259C6.18609 4.05259 5.5263 3.3928 5.5263 2.57891C5.5263 1.76502 6.18609 1.10522 6.99998 1.10522Z"
                        fill="currentColor"
                      />
                    </mask>
                    <g mask="url(#mask0_546_27358)"></g>
    </svg>`,
];
const info = {
  name: "abolfazl",
  lastName: "mohseni",
  token: "login",
  profile: "./src/assets/images/abolfazlmohseni.jpg",
};
const TraficSource = () => {
  const [MailStatus, setMailStatus] = useState({
    isOpen: true,
    mailId: null,
  });
  return (
    <div>
      <Selector
        asli={true}
        fontSize={22}
        mt={"mt-14"}
        item={["Chat", "Trafic Source", "Inbox"]}
      />
      <div className="flex gap-x-3.5 justify-between mt-7 max-h-[76vh]">
        <div
          className={`${
            MailStatus.isOpen ? "w-1/3" : "w-full"
          } flex flex-col gap-y-5 max-h-full overflow-auto`}
        >
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
          <Mail />
        </div>
        <div
          className={`${
            MailStatus.isOpen ? "w-2/3" : "w-0 hidden "
          } flex items-center gap-x-2.5`}
        >
          <div
            className="w-1.5 h-32 rounded-full bg-gray-100"
            onClick={() => {
              setMailStatus({
                ...MailStatus,
                isOpen: !MailStatus.isOpen,
              });
            }}
          ></div>
          <div className="bg-white dark:bg-darkgray-100 rounded-xl w-full h-full px-14 py-12">
            <div className="flex justify-between items-center border-b border-gray-100/20 pb-2">
              <div>
                <p className="text-gray-100 font-bold">Today, 3:03 PM</p>
              </div>
              <div className="flex gap-x-10">
                {icons.map((icon) => {
                  return (
                    <div
                      className=" text-gray-100 rounded-lg flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: icon }}
                    ></div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-x-5 mt-5">
              <div className="w-12 h-12 rounded-xl overflow-hidden">
                <img src={info.profile} alt={info.name} />
              </div>
              <div>
                <p className="text-dark-100 dark:text-white font-bold">
                  Gunther Ackner
                </p>
                <p className="text-gray-100">gunther.ackner@mail.com</p>
              </div>
            </div>
            <p className="text-3xl text-dark-100 dark:text-white font-bold mt-10">
              5 Tips For Offshore Software Development
            </p>
            <div className="flex gap-x-5 mt-4">
              <Mailfile />
              <Mailfile />
            </div>
            <div className="mt-8 max-h-6/12 overflow-auto">
              <p className="text-gray-100">
                Hey Davin, Today, many people rely on computers to do homework,
                work, and create or store useful information. Therefore, it is
                important for the information on the computer to be stored and
                kept properly. It is also extremely important for people on
                computers to protect their computer from data loss, misuse, and
                abuse. For example, it is crucial for businesses to keep
                information they have secure so that hackers can’t access the
                information. Home users also need to take means to make sure
                that their credit card numbers are secure when they are
                participating in online transactions. A computer security risk
                is any action that could cause lost of information, software,
                data, processing incompatibilities, or cause damage to computer
                hardware, a lot of these are planned to do damage. Best,
                Gunther. Hey Davin, Today, many people rely on computers to do
                homework, work, and create or store useful information.
                Therefore, it is important for the information on the computer
                to be stored and kept properly. It is also extremely important
                for people on computers to protect their computer from data
                loss, misuse, and abuse. For example, it is crucial for
                businesses to keep information they have secure so that hackers
                can’t access the information. Home users also need to take means
                to make sure that their credit card numbers are secure when they
                are participating in online transactions. A computer security
                risk is any action that could cause lost of information,
                software, data, processing incompatibilities, or cause damage to
                computer hardware, a lot of these are planned to do damage.
                Best, Gunther. Hey Davin, Today, many people rely on computers
                to do homework, work, and create or store useful information.
                Therefore, it is important for the information on the computer
                to be stored and kept properly. It is also extremely important
                for people on computers to protect their computer from data
                loss, misuse, and abuse. For example, it is crucial for
                businesses to keep information they have secure so that hackers
                can’t access the information. Home users also need to take means
                to make sure that their credit card numbers are secure when they
                are participating in online transactions. A computer security
                risk is any action that could cause lost of information,
                software, data, processing incompatibilities, or cause damage to
                computer hardware, a lot of these are planned to do damage.
                Best, Gunther. Hey Davin, Today, many people rely on computers
                to do homework, work, and create or store useful information.
                Therefore, it is important for the information on the computer
                to be stored and kept properly. It is also extremely important
                for people on computers to protect their computer from data
                loss, misuse, and abuse. For example, it is crucial for
                businesses to keep information they have secure so that hackers
                can’t access the information. Home users also need to take means
                to make sure that their credit card numbers are secure when they
                are participating in online transactions. A computer security
                risk is any action that could cause lost of information,
                software, data, processing incompatibilities, or cause damage to
                computer hardware, a lot of these are planned to do damage.
                Best, Gunther.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TraficSource;
