import { Box, Flex, Image, Text, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto pt-[32px] pb-[28px]">
      <Flex className="gap-10 lg:flex-row flex-col-reverse">
        {/* Adjust gutter size */}
        <Box className="w-full lg:w-[25%] border-border border-2 bg-cardbg py-[56px] px-[24px]">
          <h2 className="text-xl sm:text-2xl sm:text-start text-center leading-6  mb-1 font-bold text-dark">
            Compare Products
          </h2>
          <p className="text-bluegray text-sm sm:text-base">
            Choose Two Products to Compare
          </p>
        </Box>

        <Box className="lg:w-[75%] w-full">
          <Carousel
            withIndicators
            // height={{ md: 'auto', lg: 470 }}
            height={470}
            // width={'100%'}
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
    </div>
  );
};

export default Home;
