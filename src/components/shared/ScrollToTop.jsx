import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {

  // Scroll to top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 z-50  left-6 px-2 rounded-md py-1 bg-white text-primary  hover:bg-blue-600 transition"
        >
          <IoIosArrowUp size={30} />
        </button>
      
    </div>
  );
};


export default ScrollToTop
