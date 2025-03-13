import Adress from "./components/Adress";
import HomeImages from "./components/HomeImages";
import Services from "./components/Services";
import OpeningHours from "./components/OpeningHours";
export default function Home() {
  return (
    <div>
      <div className="bg-green-300">
        <HomeImages />
      </div>
      <div className="bg-white grid grid-cols-2">
        <div className="order-1">
          <Services />
        </div>

        <div className="flex justify-center flex-col  order-2">
          <Adress />
          <OpeningHours />
        </div>
      </div>
    </div>
  );
}
