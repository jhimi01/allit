import { Indicator } from "@mantine/core";
import { IoCartOutline } from "react-icons/io5";

const CartIcon = () => {
  return (
    <div className="fixed bottom-5 z-50  right-6  rounded  bg-[#e52923] text-white  hover:bg-blue-600 transition">
      <Indicator size={17} color="#333" label="0">
        <button className="px-[15px] py-2 flex items-center justify-center flex-col">
          <IoCartOutline size={30} />
          <h5 className="text-[10px] font-bold">Cart</h5>
        </button>
      </Indicator>
    </div>
  );
};

export default CartIcon;
