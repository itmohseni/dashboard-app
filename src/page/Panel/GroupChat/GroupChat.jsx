import { useInfo } from "../../../context/Info";
import Chat from "./Chat/desktop";
import TraficSource from "./TraficSource/TraficSource";
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/header";
import Modal from "../components/modal/modal";
import ChannelsPanel from "./Components/ChannelsPanel";
import Mchat from "./Chat/mobile/Mchat";
const Overview = ({ StatusModal, toggleModal }) => {
  const { info, setInfo } = useInfo();
  var renderComponent;
  switch (info.activePage) {
    case 0:
      renderComponent = (
        <>
          <div className="hidden sm:flex flex-col h-screen w-full sm:flex-row  items-center relative ">
            <Sidebar />
            <ChannelsPanel />
            <div
              className={`${
                StatusModal ? "sm:w-[44%]" : "sm:w-full"
              }  mx-6 md:mx-16 h-[92vh] transition-all duration-300 w-[76%]`}
            >
              <Header />
              <Chat />
            </div>
            <Modal onClick={toggleModal} state={StatusModal}></Modal>
          </div>
          <div className="sm:hidden">
            <Header />
            <Mchat />
            <Sidebar />
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
                StatusModal ? "sm:w-[44%]" : "sm:w-full"
              }  mx-6 md:mx-16 h-[92vh] transition-all duration-300 w-[76%]`}
            >
              <Header />
              <TraficSource />
            </div>
          </div>
        </>
      );
      break;
    case 2:
      renderComponent = <Sidebar />;
      break;
    case 3:
      renderComponent = <Sidebar />;
      break;
    default:
      renderComponent = <div>not Page</div>;
      break;
  }

  return renderComponent;
};

export default Overview;
