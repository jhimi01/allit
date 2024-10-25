import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";
import { useWindowScroll } from "@mantine/hooks";
import { Affix, Button, Transition } from "@mantine/core";
import { IoIosArrowUp } from "react-icons/io";

const Main = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <div>
      {/* header */}
      <Navbar />
      <div className="bg-lighterBg">
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
