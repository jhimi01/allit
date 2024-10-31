import { Indicator } from "@mantine/core";
import { MdAddToPhotos } from "react-icons/md";

function CompareIcon() {
  return (
    <div className="fixed bottom-24 z-50  right-6 rounded  bg-[#e52923] text-white  hover:bg-blue-600 transition">
      <Indicator size={17} color="#333" label="0">
        <button className=" px-2 flex items-center justify-center flex-col  py-2">
          <MdAddToPhotos size={30} />
          <h5 className="text-[10px] font-bold">Compare</h5>
        </button>
      </Indicator>
    </div>
  );
}

export default CompareIcon;
