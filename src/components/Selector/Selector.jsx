import { useEffect, useState } from "react";
import { useInfo } from "../../context/Info";

const Selector = ({ item, mt, fontSize, addClass = "", asli = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { info, setInfo } = useInfo();
  return (
    <>
      <div className={`inline-flex  relative ${mt}`}>
        <span
          onClick={() => {
            setIsOpen(true);
          }}
          className={`text-[${fontSize}px] font-bold text-dark-100 dark:text-white ${addClass}`}
        >
          {item[info.activePage]}
        </span>
        <div
          className={`bg-white rounded-xl overflow-hidden w-[187px] absolute z-50 top-7 transition-all ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {item.map((item, index) => {
            return (
              <p
                key={index}
                onClick={() => {
                  setIsOpen(false);
                  if (asli && info.activePage !== index) {
                    setInfo({ ...info, activePage: index });
                  }
                }}
                className={` py-4 pl-5 ${
                  index === info.activePage
                    ? "text-dark-100 font-bold bg-lightgray-100"
                    : "text-gray-100"
                }`}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>

      <div
        onClick={() => {
          setIsOpen(false);
        }}
        className={`bg-black/20 w-screen h-screen fixed top-0 left-0 transition-all${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </>
  );
};

export default Selector;
