import { useState } from "react";
import Selector from "../../../../../components/Selector";
import { useInfo } from "../../../../../context/Info";
const titels = ["Started", "Channels", "Direct Messages"];
const Started = [
  {
    name: "#  Welcome",
    number: 0,
    id: 1,
  },
  {
    name: "#  What's New",
    number: 6,
    id: 2,
  },
];
const Channels = [
  {
    name: "#  Announcements",
    number: 1,
    id: 3,
  },
  {
    name: "#  Sales",
    number: 0,
    id: 4,
  },
  {
    name: "#  Marketing",
    number: 1,
    id: 5,
  },
  {
    name: "#  Analytics",
    number: 0,
    id: 6,
  },
  {
    name: "#  Accounting ",
    number: 1,
    id: 7,
  },
];
const Direct = [
  {
    name: "Cammy Hedling",
    number: 0,
    id: 8,
  },
  {
    name: "Gunther Ackner",
    number: 1,
    id: 9,
  },
  {
    name: "Margie Jutten",
    number: 0,
    id: 11,
  },
  {
    name: "Hubert Franck",
    number: 1,
    id: 12,
  },
  {
    name: "Meysam Nassour",
    number: 0,
    id: 13,
  },
];
const ChannelsPanel = () => {
  const { info, setInfo } = useInfo();
  return (
    <div className="min-w-[20%] max-w-[20%] h-full bg-white dark:bg-darkgray-100 px-5 border-l-2 border-l-gray-100/20">
      <Selector
        asli={true}
        fontSize={22}
        mt={"mt-14"}
        item={["Chat", "Trafic Source", "Inbox"]}
      />
      <div className="mt-16">
        <div className="flex flex-col gap-y-4 divide-y divide-gray-100/20">
          <div>
            <p className="text-sm text-dark-100 dark:text-gray-100 font-bold py-2.5 pl-2.5">
              {titels[0]}
            </p>
            {Started.map((item) => {
              if (info.chatId == item.id) {
                return (
                  <p
                    key={item.id}
                    className="text-sm text-white py-2.5 pl-2.5 bg-primary-100 rounded-xl"
                  >
                    {item.name}
                  </p>
                );
              } else if (item.number != 0) {
                return (
                  <div
                    onClick={() => setInfo({ ...info, chatId: item.id })}
                    key={item.id}
                    className="flex items-center justify-between py-2.5 pl-2.5"
                  >
                    <p className="text-sm font-bold text-dark-100 dark:text-white">
                      {item.name}
                    </p>
                    <p className="w-[18px] h-[18px] rounded-md text-white bg-error-100 text-xs text-center content-center">
                      {item.number}
                    </p>
                  </div>
                );
              } else {
                return (
                  <p
                    onClick={() => setInfo({ ...info, chatId: item.id })}
                    key={item.id}
                    className="text-sm text-gray-100 py-2.5 pl-2.5"
                  >
                    {item.name}
                  </p>
                );
              }
            })}
          </div>
          <div>
            <p className="text-sm text-dark-100 dark:text-gray-100 font-bold py-2.5 pl-2.5">
              {titels[1]}
            </p>
            {Channels.map((item) => {
              if (info.chatId == item.id) {
                return (
                  <p
                    key={item.id}
                    className="text-sm text-white py-2.5 pl-2.5 bg-primary-100 rounded-xl"
                  >
                    {item.name}
                  </p>
                );
              } else if (item.number != 0) {
                return (
                  <div
                    onClick={() => setInfo({ ...info, chatId: item.id })}
                    key={item.id}
                    className="flex items-center justify-between py-2.5 pl-2.5"
                  >
                    <p className="text-sm font-bold text-dark-100 dark:text-white">
                      {item.name}
                    </p>
                    <p className="w-[18px] h-[18px] rounded-md text-white bg-error-100 text-xs text-center content-center">
                      {item.number}
                    </p>
                  </div>
                );
              } else {
                return (
                  <p
                    onClick={() => setInfo({ ...info, chatId: item.id })}
                    key={item.id}
                    className="text-sm text-gray-100 py-2.5 pl-2.5"
                  >
                    {item.name}
                  </p>
                );
              }
            })}
          </div>
          <div>
            <p className="text-sm text-dark-100 dark:text-gray-100 font-bold py-2.5 pl-2.5">
              {titels[2]}
            </p>
            {Direct.map((item) => {
              if (info.chatId == item.id) {
                return (
                  <p
                    key={item.id}
                    className="text-sm text-white py-2.5 pl-2.5 bg-primary-100 rounded-xl"
                  >
                    {item.name}
                  </p>
                );
              } else if (item.number != 0) {
                return (
                  <div
                    onClick={() => setInfo({ ...info, chatId: item.id })}
                    key={item.id}
                    className="flex items-center justify-between py-2.5 pl-2.5"
                  >
                    <p className="text-sm font-bold text-dark-100 dark:text-white">
                      {item.name}
                    </p>
                    <p className="w-[18px] h-[18px] rounded-md text-white bg-error-100 text-xs text-center content-center">
                      {item.number}
                    </p>
                  </div>
                );
              } else {
                return (
                  <p
                    onClick={() => setInfo({ ...info, chatId: item.id })}
                    key={item.id}
                    className="text-sm text-gray-100 py-2.5 pl-2.5"
                  >
                    {item.name}
                  </p>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChannelsPanel;
