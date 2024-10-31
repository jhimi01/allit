import { BiSolidOffer } from "react-icons/bi";
import { IoPerson } from "react-icons/io5"; // example icons
import { TbDevicesPc } from "react-icons/tb";
import { MdAddToPhotos } from "react-icons/md";

function MobileFooter() {
  return (
    <div className="bg-dark py-2 fixed bottom-0 w-full left-0 text-white flex z-[1001] items-center justify-between">
      {/* Offers */}
      <div className="flex gap-1 flex-col flex-1 items-center justify-center">
        <BiSolidOffer size={20} />
        <span className="text-[11px] font-semibold">Offers</span>
      </div>

      {/* PC Build */}
      <div className="flex gap-1 flex-col flex-1 items-center justify-center">
        <TbDevicesPc size={20} />
        <span className="text-[11px] font-semibold">PC Build</span>
      </div>

      {/* Compare */}
      <div className="flex gap-1 flex-col flex-1 items-center justify-center">
        <MdAddToPhotos size={20} />
        <span className="text-[11px] font-semibold">Compare (0)</span>
      </div>

      {/* Account */}
      <div className="flex gap-1 flex-col flex-1 items-center justify-center">
        <IoPerson size={20} />
        <span className="text-[11px] font-semibold">Account</span>
      </div>
    </div>
  );
}

export default MobileFooter;
