import bannerImg from "@/assets/images/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="bg-gray-300 w-full h-auto md:h-[70vh]">
      <div className="px-14 w-full h-full grid grid-cols-2 gap-4 items-center">
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="text-8xl font-thin">New collection</h2>
            <h2 className="text-8xl font-thin">Coming to town</h2>
          </div>

          <div>
            <button className="bg-blue-500 hover:bg-blue-400 text-xl text-white rounded-lg px-5 py-2 border-none outline-none cursor-pointer">
              Explore
            </button>
          </div>
        </div>
        <div className="flex items-center h-full w-full justify-center">
          <Image src={bannerImg} width="" responsive alt="banner image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
