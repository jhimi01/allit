import {
  Box,
  Burger,
  Drawer,
  Group,
  Image,
  Indicator,
  Modal,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IoCartOutline, IoSearch } from "react-icons/io5";

const MobileNav = () => {
  const [openedDrawer, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [openedSearch, { toggle: toggleSearch, close: closeSearch }] =
    useDisclosure(false);

  const [openedModal, { open: openModal, close: closeModal }] =
    useDisclosure(false);
  const isMobile = useMediaQuery("(width: 95vw)");

  return (
    <div className="bg-dark text-white px-2">
      <Drawer
        opened={openedDrawer}
        onClose={closeDrawer}
        title="Categories"
        position="left"
        size="80%"
      >
        {/* Drawer content */}
      </Drawer>

      <div className="flex items-center justify-between">
        <Burger
          lineSize={2}
          size="md"
          color="#fff"
          opened={openedDrawer}
          onClick={openDrawer}
          aria-label="Toggle navigation"
        />

        <Image src="./all-it.webp" w={70} h={65} />

        <Box className="text-2xl flex items-center gap-2 ">
          <Group justify="center">
            <IoSearch onClick={toggleSearch} className="text-white mr-2" />
          </Group>

          <Modal
            opened={openedSearch}
            onClose={closeSearch}
            fullScreen={isMobile}
            size="100%"
            withCloseButton={false}
            transitionProps={{ transition: "fade", duration: 200 }}
            className="lg:hidden"
          >
            <Box className="">
              <Box className="flex gap-2 items-center justify-center px-[5px] rounded-sm bg-[#EEEEEE] w-full text-xl">
                <input
                  type="text"
                  placeholder="Search"
                  style={{ backgroundColor: "transparent" }}
                  className="text-primary bg-transparent outline-none w-full placeholder:text-slate-400 p-1 placeholder:text-lg border-none"
                />
                <IoSearch className="text-[#444] text-2xl" />
              </Box>
            </Box>
          </Modal>

          {/* added cart */}
          <Indicator
            inline
            label="0"
            onClick={openModal}
            color="#e5332d"
            p={0}
            size={16}
          >
            <IoCartOutline />
          </Indicator>

          <Modal
            opened={openedModal}
            onClose={closeModal}
            title="Cart"
            fullScreen={isMobile}
            transitionProps={{ transition: "fade", duration: 200 }}
            className="lg:hidden"
          >
            <Group className="flex items-center mt-3 text-sm font-semibold justify-center w-full">
              <button className="w-full flex-1  rounded-md text-primary bg-[#E529231A] outline-none py-2">
                Go to Cart
              </button>
              <button className="w-full flex-1 rounded-sm outline-primary  outline-none py-1 outline-1 text-primary">
                Checkout
              </button>
            </Group>
          </Modal>
        </Box>
      </div>
    </div>
  );
};

export default MobileNav;
