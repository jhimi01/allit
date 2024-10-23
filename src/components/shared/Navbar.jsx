import { useState } from "react";
import {
  Container,
  Group,
  Burger,
  Transition,
  Paper,
  Flex,
  Box,
} from "@mantine/core";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Navbar = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Box>
      <Box bg={"#1e283e"} className="lg:block hidden">
        <Flex
          justify="space-between"
          align="center"
          py={14}
          className="text-white w-11/12 mx-auto text-lg  text-[hsla(0,0%,100%,.66)]"
        >
          <Group>
            <Flex gap="sm" align="center" direction="row" wrap="">
              <FaPhone className="text-[#fff]" /> 01810079260
            </Flex>
            <Flex
              gap="sm"
              justify="flex-center"
              align="center"
              direction="row"
              wrap=""
            >
              <FaPhone className="text-[#fff]" /> 01810079263
            </Flex>
            <Flex
              gap="sm"
              justify="flex-center"
              align="center"
              direction="row"
              wrap=""
            >
              <IoMdMail className="text-[#fff]" /> info@allit.com.bd
            </Flex>
          </Group>
          <Group gap={30}>
            <Box className="text-[#fff] font-bold">Follow Us</Box>
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
        <Container className="flex items-center justify-between py-4">
          {/* Logo Section */}
          <div className="text-2xl font-bold">Logo</div>

          {/* Links Section - Hidden on smaller devices */}
          <nav className="hidden md:block">
            <Group spacing="xl">
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
              <Link to="/services" className="hover:text-gray-400">
                Services
              </Link>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </Group>
          </nav>

          {/* Hamburger Icon - Visible on smaller devices */}
          <Burger
            opened={opened}
            onClick={() => setOpened((prev) => !prev)}
            className="md:hidden"
            color="white"
            size="sm"
          />
        </Container>

        {/* Mobile Menu - Shown only when opened */}
        <Transition
          mounted={opened}
          transition="scale-y"
          duration={200}
          timingFunction="ease"
        >
          {(styles) => (
            <Paper
              style={styles}
              className="md:hidden absolute top-16 left-0 w-full bg-[#0f172a] z-50 text-black"
            >
              <Group direction="column" spacing="lg" className="p-4">
                <Link
                  to="/"
                  className="hover:text-gray-400"
                  onClick={() => setOpened(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="hover:text-gray-400"
                  onClick={() => setOpened(false)}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="hover:text-gray-400"
                  onClick={() => setOpened(false)}
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="hover:text-gray-400"
                  onClick={() => setOpened(false)}
                >
                  Contact
                </Link>
              </Group>
            </Paper>
          )}
        </Transition>
    </Box>
  );
};

export default Navbar;
