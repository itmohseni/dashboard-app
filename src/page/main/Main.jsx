import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Overview from "../Panel/Overview/Overview";
import Login from "../login&more/login";
import Sinup from "../login&more/sinup";
import GroupChat from "../Panel/GroupChat/GroupChat";
const Main = () => {
  document.body.classList.add("bg-lightgray-100");
  document.body.classList.add("dark:bg-dark-100");
  document.body.classList.add("transition-colors");
  document.body.classList.add("overflow-x-hidden");

  const [StatusModal, setStatusModal] = useState(false);
  const toggleModal = () => {
    setStatusModal(!StatusModal);
  };
  return (
    // <div className="flex flex-col h-screen w-full sm:flex-row  items-center relative">
    <Suspense>
      <Routes>
        <Route
          path="/Dashborad"
          element={
            <Overview StatusModal={StatusModal} toggleModal={toggleModal} />
          }
        />
        <Route
          path="/GroupChat"
          element={
            <GroupChat StatusModal={StatusModal} toggleModal={toggleModal} />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/sinup" element={<Sinup />} />
      </Routes>
    </Suspense>
    // </div>
  );
};

export default Main;
