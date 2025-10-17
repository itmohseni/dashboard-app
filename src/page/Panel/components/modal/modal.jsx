const Modal = ({ children, onClick, state }) => {
  return (
    <div
      className={`flex sm:flex-row sm:h-[70%] ${
        state ? "sm:w-[20%] sm:min-w-[250px] h-[80%]" : "sm:w-[2%] h-[12%]"
      }    sm:h-screen flex-col justify-end items-center fixed bottom-0 sm:top-0 sm:right-0 z-40 transition-all duration-300`}
    >
      <div
        onClick={onClick}
        className="w-32 sm:w-1.5 h-1 sm:h-32 mb-2 sm:mb-0 sm:mr-2.5 bg-gray-100 rounded-full cursor-pointer"
      ></div>
      <div
        className={`w-screen ${
          state ? "sm:w-[99%]" : "sm:w-0"
        } h-[90%]  sm:h-screen bg-primary-100 rounded-tl-4xl rounded-bl-4xl transition-all duration-300`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
