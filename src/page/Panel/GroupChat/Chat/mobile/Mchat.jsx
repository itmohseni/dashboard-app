import Selector from "../../../../../components/Selector";
import { useEffect, useState } from "react";
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
const Mchat = () => {
  const [TitelSelected, setTitelSelected] = useState(0);
  const { info, setInfo } = useInfo();

  if (info.chatId) {
    





  } else {
    return (
      <div className="flex flex-col w-full">
        <div className="w-[90%] mx-auto">
          <Selector
            asli={true}
            fontSize={22}
            mt={"mt-7"}
            item={["Chat", "Trafic Source", "Inbox"]}
          />
          <div className="flex items-center gap-x-8 mt-9">
            {titels.map((titel, index) => {
              if (index === TitelSelected) {
                return (
                  <div className="flex flex-col items-center">
                    <p className="font-bold text-dark-100 dark:text-white">
                      {titel}
                    </p>
                    <div className="w-1 h-1 rounded-full bg-dark-100 dark:bg-white"></div>
                  </div>
                );
              } else {
                return (
                  <p
                    className="font-medium text-gray-100"
                    onClick={() => {
                      setTitelSelected(index);
                    }}
                  >
                    {titel}
                  </p>
                );
              }
            })}
          </div>
          <div className="mt-5">
            {TitelSelected === 0 ? (
              <div className="space-y-5">
                {Started.map((item) => {
                  if (item.number != 0) {
                    return (
                      <div
                        onClick={() => setInfo({ ...info, chatId: item.id })}
                        key={item.id}
                        className="flex items-center justify-between py-4 px-3 bg-white dark:bg-darkgray-100 rounded-xl"
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
                        className="text-sm text-gray-100 py-4 px-3 bg-white dark:bg-darkgray-100 rounded-xl"
                      >
                        {item.name}
                      </p>
                    );
                  }
                })}
              </div>
            ) : TitelSelected === 1 ? (
              <div className="space-y-5">
                {Channels.map((item) => {
                  if (item.number != 0) {
                    return (
                      <div
                        onClick={() => setInfo({ ...info, chatId: item.id })}
                        key={item.id}
                        className="flex items-center justify-between py-4 px-3 bg-white dark:bg-darkgray-100 rounded-xl"
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
                        className="text-sm text-gray-100 py-4 px-3 bg-white dark:bg-darkgray-100 rounded-xl"
                      >
                        {item.name}
                      </p>
                    );
                  }
                })}
              </div>
            ) : (
              <div className="space-y-5">
                {Direct.map((item) => {
                  if (item.number != 0) {
                    return (
                      <div
                        onClick={() => setInfo({ ...info, chatId: item.id })}
                        key={item.id}
                        className="flex items-center justify-between py-4 px-3 bg-white dark:bg-darkgray-100 rounded-xl"
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
                        className="text-sm text-gray-100 py-4 px-3 bg-white dark:bg-darkgray-100 rounded-xl"
                      >
                        {item.name}
                      </p>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Mchat;
