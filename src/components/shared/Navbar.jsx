import { Group, Flex, Box, AppShell, Image, Select, Text } from "@mantine/core";
import {
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { MdLocalOffer } from "react-icons/md";
import { IoSearch, IoPersonSharp } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";
import MobileNav from "./MobileNav";
// Combobox

const Navbar = () => {
  return (
    <header>
      {/* desktop navbar */}
      <div className="hidden lg:block">
        <Box bg={"#1e283e"}>
          <div className="">
            <Flex
              justify="space-between"
              align="center"
              py={11}
              className="text-white w-11/12 mx-auto text-lg  text-[hsla(0,0%,100%,.66)]"
            >
              <Group
                gap={30}
                className="text-[hsla(0,0%,100%,.66)] text-[15px]"
              >
                <Flex gap="sm" align="center" direction="row" wrap="">
                  <FaPhone className="text-[#fff] text-[14px]" /> 01810079260
                </Flex>
                <Flex
                  gap="sm"
                  justify="flex-center"
                  align="center"
                  direction="row"
                >
                  <FaPhone className="text-[#fff] text-[14px]" /> 01810079263
                </Flex>
                <Flex
                  gap="sm"
                  justify="flex-center"
                  align="center"
                  direction="row"
                  wrap=""
                >
                  <IoMdMail className="text-[#fff] text-[14px]" />{" "}
                  info@allit.com.bd
                </Flex>
              </Group>
              <Group gap={23}>
                <Box className="text-[#fff] text-[14px] font-bold">
                  Follow Us
                </Box>
                <Flex
                  gap={20}
                  className="text-[21px] text-[hsla(0,0%,100%,.66)]"
                >
                  <FaFacebook />

                  <RiInstagramFill />

                  <FaTwitter />

                  <FaLinkedin />

                  <FaYoutube />
                </Flex>
              </Group>
            </Flex>
          </div>
        </Box>
        {/* ----- second header --------- */}
        <AppShell className=" w-full bg-[#ffffff] py-4 ">
          <Box className="w-11/12 mx-auto lg:gap-20 flex items-center justify-between">
            {/* Logo and Search Section */}
            <Box className="lg:flex hidden items-center w-1/2 gap-10">
              <Image src="./all-it.webp" w="auto" h={70} />
              <Box className="flex gap-2 items-center justify-center my-5 px-[7px] py-[2px] rounded-md bg-[#EEEEEE] w-full text-xl">
                <Select
                  placeholder="Category"
                  data={[
                    "Desktop",
                    "Monitor",
                    "Component",
                    "Office Equipment",
                    "Accessories",
                    "NetWorking",
                    "Photocopier",
                    "Projector",
                    "Laptop Acessorise",
                    "Software",
                    "Gaming",
                  ]}
                />
                <input
                  type="text"
                  placeholder="Search"
                  style={{ backgroundColor: "transparent" }}
                  className="text-primary bg-transparent outline-none w-full placeholder:text-[#b4b4b4] placeholder:text-[16px] border-none"
                />
                <IoSearch className="text-[#444] text-[34px]" />
              </Box>
            </Box>

            {/* Offers, Deals, PC Build */}
            <Group justify="space-between" display="flex" flex={1}>
              <Flex align={"center"} gap={5}>
                <MdLocalOffer className="text-primary text-2xl" />
                <Box className="leading-5">
                  <Text size="16px" fw={300}>
                    Offers
                  </Text>
                  <Text
                    // mt={-9}
                    size="xs"
                    fw={500}
                    c={"#b3b3b3"}
                    className="-mt-2"
                  >
                    Latest Offers
                  </Text>
                </Box>
              </Flex>
              <Flex align={"center"} gap={5}>
                <AiFillThunderbolt className="text-primary text-2xl" />
                <Box className="leading-5">
                  <Text size="sm">Best Deals</Text>
                  <Text
                    // mt={-9}
                    size="xs"
                    fw={500}
                    c={"#b3b3b3"}
                  >
                    Latest Deals
                  </Text>
                </Box>
              </Flex>
              <Flex align={"center"} gap={5}>
                <IoPersonSharp className="text-primary text-2xl" />
                <Box className="leading-5">
                  <Text size="sm">Account</Text>
                  <Text
                    // mt={-9}
                    size="xs"
                    c={"#b3b3b3"}
                    fw={500}
                  >
                    Register or Login
                  </Text>
                </Box>
              </Flex>
              <div>
                <button className="btn-pcbuild">PC Build</button>
              </div>
            </Group>
          </Box>
        </AppShell>
      </div>
      <div className="lg:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
