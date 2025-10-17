const LoginHead = ({ titel, subtitel }) => {
  return (
    <div className="mt-5 sm:mt-3">
      <p className="text-dark-100 dark:text-white text-[22px] font-bold">
        {titel}
      </p>
      <p className="text-sm text-gray-100 dark:text-dark-text">{subtitel}</p>
    </div>
  );
};

export default LoginHead;
