import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition } from "@mantine/core";
import { IoIosArrowUp } from "react-icons/io";
import CategoryNav from "../components/shared/CategoryNav";

const Main = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <div>
      {/* header */}
      <Navbar />
      <div className="hidden lg:block">
      <CategoryNav />
      </div>
      <div className="bg-lighterBg  -z-10">
        <Outlet />
      </div>
      <Affix hidden="sm" position={{ bottom: 25, left: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y >= 0}>
          {(transitionStyles) => (
            <Button
              style={{ ...transitionStyles, backgroundColor: "white" }}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IoIosArrowUp style={{ color: "#e5332d" }} className="text-3xl" />
            </Button>
          )}
        </Transition>
      </Affix>
      {/* footer */}
    </div>
  );
};

export default Main;
