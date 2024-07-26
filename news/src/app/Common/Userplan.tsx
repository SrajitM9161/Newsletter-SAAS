import { CloudLightning } from "lucide-react"; // Import Lucid icon
import { Slider } from "@nextui-org/slider";

const UserPlan = () => {
  return (
    <div className="w-full my-2 p-2 bg-gradient-to-r from-[#3F5EFB] to-[#FC466B] rounded-md shadow hover:shadow-lg cursor-pointer">
      <div className="w-full flex flex-col items-start space-y-1">
        <div className="w-full flex justify-between items-center">
          <h5 className="text-sm font-medium text-white">GROW Plan</h5>
          <div
            className="w-[70px] shadow cursor-pointer h-[25px] flex justify-center items-center space-x-1 rounded bg-[#E77CAE]"
          >
            <CloudLightning className="text-white w-3 h-3" /> {/* Using Lucid icon */}
            <span className="text-white text-xs">Upgrade</span>
          </div>
        </div>
        <h5 className="text-xs text-white">Total subscribers</h5>
        <Slider
          aria-label="Player progress"
          hideThumb={true}
          defaultValue={1}
          className="max-w-full"
        />
        <h6 className="text-xs text-white">0 / 200</h6>
      </div>
    </div>
  );
};

export default UserPlan;
