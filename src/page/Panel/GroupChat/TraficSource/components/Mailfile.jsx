const Mailfile = () => {
  return (
    <div className="max-w-1/4 flex gap-x-3.5 items-center p-4 bg-white dark:bg-darkgray-100 rounded-xl border-2 border-gray-100/20">
      <div>
        <img src="./src/assets/images/Word.png" className="w-[30] h-10" />
      </div>
      <div>
        <p className="text-sm font-bold text-dark-100 dark:text-white">
          Analytics_report
        </p>
        <p className="text-gray-100">12mb</p>
      </div>
    </div>
  );
};

export default Mailfile;
