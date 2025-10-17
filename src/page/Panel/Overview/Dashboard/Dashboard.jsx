import BottomCards from "./components/bottomCards";
import Card1 from "./components/Card1/Card1";
import MiniCard from "./components/MiniCard";
const Dashboard = () => {
  return (
    <>
      <div className="flex mt-6 flex-col w-full">
        <MiniCard />
        <Card1 />
        <div className="w-full flex flex-col gap-y-5 md:flex-row items-center justify-between mt-[30px] gap-x-7 pb-32 sm:pb-0">
          <BottomCards
            data={[12, 24, 31, 14, 45, 56, 77, 88, 99, 10, 47, 55, 12]}
            titel={"New Users"}
            content={"1,501m"}
            colorChart={"#E45851"}
          />
          <BottomCards
            data={[12, 24, 31, 14, 45, 56, 77, 88, 99, 10, 47, 55, 12]}
            titel={"Bounce Rate"}
            content={"0.66%"}
            colorChart={"#FDDE69"}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
