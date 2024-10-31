import { Box, Flex, Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";

import classes from "./Home.module.css";
import { IoSearch } from "react-icons/io5";

const Home = () => {
  return (
    <div className="lg:w-11/12 px-2 mx-auto pt-[32px] pb-[28px]">
      <Flex className="gap-10 lg:flex-row flex-col-reverse">
        <Box className="w-full lg:w-[25%] border-border border-[1px] bg-cardbg lg:py-[56px] px-[24px]">
          <h2 className="text-xl sm:text-2xl sm:text-start text-center leading-6 my-1 font-bold text-dark">
            Compare Products
          </h2>
          <p className="text-bluegray text-sm sm:text-base mb-3 sm:mb-9 text-center sm:text-start">
            Choose Two Products to Compare
          </p>
          <Box className="flex gap-2 items-center justify-center my-5 py-1 px-2 rounded-md bg-[#fff] w-full text-xl">
            <IoSearch className="text-[#c2c2c2] text-2xl lg:text-3xl" />
            <input
              type="text"
              placeholder="Search and Select Product"
              className="text-primary bg-transparent outline-none w-full placeholder:text-[#c2c2c2] border-none placeholder:text-[14px] lg:placeholder:text-[16px]"
            />
          </Box>
          <Box className="flex gap-2 items-center justify-center lg:my-7 py-1 px-2 rounded-md bg-[#fff] w-full text-xl">
            <IoSearch className="text-[#c2c2c2] text-2xl lg:text-3xl" />
            <input
              type="text"
              placeholder="Search and Select Product"
              className="text-primary bg-transparent outline-none w-full placeholder:text-[#c2c2c2] placeholder:text-[14px] lg:placeholder:text-[16px] border-none"
            />
          </Box>
          <div className="w-full flex md:my-0 my-3 items-center justify-center">
            <button className="lg:w-auto w-full bg-[#e52923] text-[white] text-[16px] rounded-md py-[9px] font-bold px-[18px]">
              View Comparison
            </button>
          </div>
        </Box>

        <Box className="lg:w-[75%] w-full">
          <Carousel
            withIndicators
            width="100%"
            slideSize="100%"
            height={450}
            loop
            slidesToScroll={1}
            className="aspect-video lg:aspect-auto lg:h-auto w-full " // Fixed height for lg, aspect ratio for smaller screens
            classNames={{
              indicator: classes.indicator,
              control: classes.control,
              controls: classes.controls,
            }}
          >
            <Carousel.Slide>
              <Image
                className="w-full h-full object-cover"
                src="https://allit.com.bd/_next/image?url=https%3A%2F%2Fallit.com.bd%3A81%2Fuploads%2Fall%2F4fhEaaXyfibETHENI8utifaQxoPLuQjxi05wN45q.jpg&w=1080&q=75"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                className="w-full h-full object-cover"
                src="https://allit.com.bd/_next/image?url=https%3A%2F%2Fallit.com.bd%3A81%2Fuploads%2Fall%2FNOL0uAVWlm6q7vPAt6NhRtQVtG1EbX1NBOjVpwfY.jpg&w=1080&q=75"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                className="w-full h-full object-cover"
                src="https://allit.com.bd/_next/image?url=https%3A%2F%2Fallit.com.bd%3A81%2Fuploads%2Fall%2FG0gQP2T5uzyoNSKKTuvjfRpyju2Khf3VcnyzWqJg.jpg&w=1080&q=75"
              />
            </Carousel.Slide>
          </Carousel>
        </Box>
      </Flex>

      <div className="py-4 border border-border mt-10 bg-[#fff] text-[15px] text-dark">
        <Marquee>
          <GoDotFill className="text-[11px] mr-3 text-[#5ea19d]" />
          Please call our support number after placing the order. Phone numbers:
          01810079260 & 01810079263
        </Marquee>
      </div>
    </div>
  );
};

export default Home;
