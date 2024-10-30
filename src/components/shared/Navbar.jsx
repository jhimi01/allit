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
          <Flex
            justify="space-between"
            align="center"
            py={14}
            className="text-white w-11/12 mx-auto text-lg  text-[hsla(0,0%,100%,.66)]"
          >
            <Group gap={30}>
              <Flex gap="sm" align="center" direction="row" wrap="">
                <FaPhone className="text-[#fff] text-[15px]" /> 01810079260
              </Flex>
              <Flex
                gap="sm"
                justify="flex-center"
                align="center"
                direction="row"
                wrap=""
              >
                <FaPhone className="text-[#fff] text-[15px]" /> 01810079263
              </Flex>
              <Flex
                gap="sm"
                justify="flex-center"
                align="center"
                direction="row"
                wrap=""
              >
                <IoMdMail className="text-[#fff] text-[15px]" />{" "}
                info@allit.com.bd
              </Flex>
            </Group>
            <Group gap={30}>
              <Box className="text-[#fff] text-[15px] font-bold">Follow Us</Box>
              <Flex gap={24} className="text-[22px]">
                <FaFacebook />

                <RiInstagramFill />

                <FaTwitter />

                <FaLinkedin />

                <FaYoutube />
              </Flex>
            </Group>
          </Flex>
        </Box>

        {/* ----- second header --------- */}
        <AppShell className=" w-full bg-[#ffffff] py-4">
          <Box className="w-11/12 mx-auto lg:gap-10 flex items-center justify-between">
            {/* Logo and Search Section */}
            <Box className="lg:flex hidden items-center w-1/2 gap-10">
              <Image src="./all-it.webp" w="auto" h={70} />
              <Box className="flex gap-2 items-center justify-center my-5 p-[5px] rounded-md bg-[#EEEEEE] w-full text-xl">
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
                  className="text-primary bg-transparent outline-none w-full placeholder:text-slate-400 placeholder:text-lg border-none"
                />
                <IoSearch className="text-[#444] text-4xl" />
              </Box>
            </Box>

            {/* Offers, Deals, PC Build */}
            <Group justify="s" gap={50}>
              <Flex align={"center"} gap={5}>
                <MdLocalOffer className="text-primary text-2xl" />
                <Box className="leading-5">
                  <Text size="lg">Offers</Text>
                  <Text
                    mt={-9}
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
                  <Text size="lg">Best Deals</Text>
                  <Text mt={-9} size="xs" fw={500} c={"#b3b3b3"}>
                    Latest Deals
                  </Text>
                </Box>
              </Flex>
              <Flex align={"center"} gap={5}>
                <IoPersonSharp className="text-primary text-2xl" />
                <Box className="leading-5">
                  <Text size="lg">Account</Text>
                  <Text mt={-9} size="xs" c={"#b3b3b3"} fw={500}>
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
