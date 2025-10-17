import React from "react";
import Dashboard from "./Dashboard";
import { useInfo } from "../../../context/Info";
import Realtime from "./Realtime";
import Audience from "./Audience";
import TraficSource from "./TraficSource/TraficSource";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/header";
import Selector from "../../../components/Selector";
import Modal from "../components/modal/modal";

const Overview = ({ toggleModal, StatusModal }) => {
  const { info, setInfo } = useInfo();
  var renderComponent;

  switch (info.activePage) {
    case 0:
      renderComponent = (
        <>
          <div className="flex flex-col h-screen w-full sm:flex-row  items-center relative">
            <Sidebar />
            <div
              className={`${
                StatusModal ? "sm:w-[65%]" : "sm:w-full"
              }  mx-6 md:mx-16 h-[92vh] transition-all duration-300 w-[100%] sm:w-[95%]`}
            >
              <Header />
              <Selector
                asli={true}
                fontSize={22}
                mt={"mt-16"}
                item={["Dashboard", "Realtime", "Audience", "Trafic Source"]}
              />
              <Dashboard />
            </div>
            <Modal onClick={toggleModal} state={StatusModal}></Modal>
          </div>
        </>
      );
      break;
    case 1:
      renderComponent = (
        <>
          <div className="flex flex-col h-screen w-full sm:flex-row  items-center relative">
            <Sidebar />
            <div
              className={`${
                StatusModal ? "sm:w-[65%]" : "sm:w-full"
              }  mx-6 md:mx-16 h-[92vh] transition-all duration-300 w-[95%]`}
            >
              <Header />
              <Selector
                asli={true}
                fontSize={22}
                mt={"mt-16"}
                item={["Dashboard", "Realtime", "Audience", "Trafic Source"]}
              />
              <Realtime />
            </div>
            <Modal onClick={toggleModal} state={StatusModal}></Modal>
          </div>
        </>
      );
      break;
    case 2:
      renderComponent = (
        <>
          <div className="flex flex-col h-screen w-full sm:flex-row  items-center relative">
            <Sidebar />
            <div
              className={`${
                StatusModal ? "sm:w-[65%]" : "sm:w-full"
              }  mx-6 md:mx-16 h-[92vh] transition-all duration-300 w-[95%]`}
            >
              <Header />
              <Selector
                asli={true}
                fontSize={22}
                mt={"mt-16"}
                item={["Dashboard", "Realtime", "Audience", "Trafic Source"]}
              />
              <Audience />
            </div>
            <Modal onClick={toggleModal} state={StatusModal}></Modal>
          </div>
        </>
      );
      break;
    case 3:
      renderComponent = (
        <>
          <div className="flex flex-col h-screen w-full sm:flex-row  items-center relative">
            <Sidebar />
            <div
              className={`${
                StatusModal ? "sm:w-[65%]" : "sm:w-full"
              }  mx-6 md:mx-16 h-[92vh] transition-all duration-300 w-[95%]`}
            >
              <Header />
              <Selector
                asli={true}
                fontSize={22}
                mt={"mt-16"}
                item={["Dashboard", "Realtime", "Audience", "Trafic Source"]}
              />
              <TraficSource />
            </div>
            <Modal onClick={toggleModal} state={StatusModal}></Modal>
          </div>
        </>
      );
      break;
    default:
      renderComponent = <div>not Page</div>;
      break;
  }

  return <div>{renderComponent}</div>;
};

export default Overview;
