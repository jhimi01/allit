import { Box, Flex, Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import Marquee from "react-fast-marquee";
import { GoDotFill } from "react-icons/go";

import classes from "./Home.module.css";
import { IoSearch } from "react-icons/io5";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto pt-[32px] pb-[28px]">
      <Flex className="gap-10 lg:flex-row flex-col-reverse">
        {/* Adjust gutter size */}
        <Box className="w-full lg:w-[25%] border-border border-2 bg-cardbg lg:py-[56px] px-[24px]">
          <h2 className="text-xl sm:text-[25px] sm:text-start text-center leading-6  my-3 font-bold text-dark">
            Compare Products
          </h2>
          <p className="text-bluegray text-sm sm:text-lg mb-3 sm:mb-9 text-center sm:text-start ">
            Choose Two Products to Compare
          </p>
          <Box className="flex gap-2 items-center justify-center my-5 p-2 rounded-md bg-[#fff] w-full text-xl">
            <IoSearch className="text-[#c2c2c2] text-3xl lg:text-4xl" />
            <input
              type="text"
              placeholder="Search and Select Product"
              className="text-primary bg-transparent outline-none w-full placeholder:text-[#c2c2c2] border-none placeholder:text-[14px] lg:placeholder:text-[18px]"
            />
          </Box>
          <Box className="flex gap-2 items-center justify-center lg:my-7 p-2 rounded-md bg-[#fff] w-full text-xl">
            <IoSearch className="text-[#c2c2c2] text-3xl lg:text-4xl" />
            <input
              type="text"
              placeholder="Search and Select Product"
              className="text-primary bg-transparent outline-none w-full placeholder:text-[#c2c2c2] placeholder:text-[14px] lg:placeholder:text-[18px] border-none"
            />
          </Box>
          <div className="w-full flex md:my-0 my-3 items-center justify-center">
            <button className="lg:w-auto w-full bg-[#e52923] text-[white] text-[18px] rounded-md py-[9px] font-bold px-[17px]">
              View Comparison
            </button>
          </div>
        </Box>

        <Box className="lg:w-[75%] w-full">
          <Carousel
            withIndicators
            // height={{ md: 'auto', lg: 450 }}
            height={470}
            width={'100%'}
            slideSize="100%"
            // slideGap="md"
            loop
            // align="start"
            slidesToScroll={1}
            classNames={{
              indicator: classes.indicator,
              control: classes.control,
              controls: classes.controls,
            }}
          >
            <Carousel.Slide>
              <Image
                className="w-full object-fill object-bottom h-full"
                fit="cover"
                src="https://allit.com.bd/_next/image?url=https%3A%2F%2Fallit.com.bd%3A81%2Fuploads%2Fall%2F4fhEaaXyfibETHENI8utifaQxoPLuQjxi05wN45q.jpg&w=1080&q=75"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                className="w-full object-fill object-bottom h-full"
                src="https://allit.com.bd/_next/image?url=https%3A%2F%2Fallit.com.bd%3A81%2Fuploads%2Fall%2FNOL0uAVWlm6q7vPAt6NhRtQVtG1EbX1NBOjVpwfY.jpg&w=1080&q=75"
              />
            </Carousel.Slide>
            <Carousel.Slide>
              <Image
                className="w-full object-fill object-bottom h-full"
                src="https://allit.com.bd/_next/image?url=https%3A%2F%2Fallit.com.bd%3A81%2Fuploads%2Fall%2FG0gQP2T5uzyoNSKKTuvjfRpyju2Khf3VcnyzWqJg.jpg&w=1080&q=75"
              />
            </Carousel.Slide>
          </Carousel>
        </Box>
      </Flex>

      <div className="py-20 border border-border mt-10 bg-[#fff] text-lg text-dark">
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
