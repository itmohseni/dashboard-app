import React from "react";

const LoginBtn = ({ classlist ,text}) => {
  return (
    <button
      className={`${classlist} flex items-center justify-center font-bold w-full h-14 rounded-xl`}
    >
      {text}
    </button>
  );
};

export default LoginBtn;
