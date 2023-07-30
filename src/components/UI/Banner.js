import bannerImg from "@/assets/images/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-gray-300 w-full h-auto md:h-[70vh]">
      <div className="px-14 w-full h-full flex flex-col md:flex-row gap-4 items-center">
        <div className="md:w-1/2 flex flex-col text-center md:text-start gap-4 py-10 md:py-0">
          <div>
            <h2 className="text-5xl md:text-6xl font-thin">New collection</h2>
            <h2 className="text-5xl md:text-6xl font-thin">Coming to town</h2>
          </div>

          <div>
            <button className="bg-blue-500 hover:bg-blue-400 text-xl text-white rounded-lg px-5 py-2 border-none outline-none cursor-pointer">
              Explore
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex items-center h-full w-full justify-center py-10 md:py-0">
          <Image src={bannerImg} width="" responsive alt="banner image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
