import BottomCard from "./components/BottomCard";
import CardHighlights from "./components/CardHighlights";
import TopLocations from "./components/TopLocations/TopLocations";
const dataLocation = [
  {
    name: "United States",
    value: 43,
    color: "#3E6BEC",
  },
  {
    name: "Russia",
    value: 28,
    color: "#E45851",
  },
  {
    name: "Brasil",
    value: 11,
    color: "#FDDE69",
  },
  {
    name: "Spain",
    value: 9,
    color: "#62CA76",
  },
  {
    name: "Australia",
    value: 9,
    color: "#35363A",
  },
];
const dataCardOne = [
  {
    text: "Windows",
    value: 76,
    color: "#62CA76",
  },
  {
    text: "Macintosh",
    value: 24,
    color: "#E45851",
  },
];
const dataCardTwo = [
  {
    text: "Chrome",
    value: 76,
    color: "#3E6BEC",
  },
  {
    text: "Safari",
    value: 24,
    color: "#FDDE69",
  },
];
const Audience = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-y-5 sm:gap-x-7 mt-10">
        <CardHighlights
          titel={"Returning Customers"}
          value={51}
          color={"FDDE69"}
        />
        <CardHighlights titel={"New Customers"} value={49} color={"6286ED"} />
        <CardHighlights titel={"Bounce Rate"} value={73} color={"62CA76"} />
      </div>
      <TopLocations data={dataLocation} />
      <div className="flex flex-col sm:flex-row w-full gap-y-5 sm:gap-x-7 mt-7 pb-32 sm:pb-0">
        <BottomCard data={dataCardOne} title={"Operating System"} />
        <BottomCard data={dataCardTwo} title={"Top Browser"} />
      </div>
    </div>
  );
};

export default Audience;
