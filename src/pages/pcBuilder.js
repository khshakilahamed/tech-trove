import RootLayout from "@/components/Layouts/RootLayout";
import {
  buildCompleted,
  removeMonitor,
  removeMotherboard,
  removePowerSupply,
  removeProcessor,
  removeRam,
  removeStorageDevice,
} from "@/redux/features/pcBuilder/pcBuilderSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { GrClose } from "react-icons/gr";
import { TfiReload } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from "react";

const PcBuilder = () => {
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    total,
    processor,
    motherboard,
    ram,
    powerSupply,
    storageDevice,
    monitor,
    other,
  } = useSelector((state) => state.pcBuild);

  useEffect(() => {
    if (
      processor &&
      motherboard &&
      ram &&
      powerSupply &&
      storageDevice &&
      monitor
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [processor, motherboard, ram, powerSupply, storageDevice, monitor]);

  return (
    <div className="px-14">
      <div className="flex justify-between items-center py-10">
        <h2>PC Builder - Tech Trove</h2>
        <div className="flex flex-col items-center justify-center text-white bg-blue-600 rounded-lg min-w-[120px] h-[70px]">
          <p>Total</p>
          <p className="text-2xl font-bold">৳ {total}</p>
        </div>
      </div>
      <div className="py-10">
        <div className="flex justify-between py-3">
          <div className="flex gap-4">
            <div className="border p-2">
              <Image
                src={
                  processor
                    ? processor.image
                    : "https://www.startech.com.bd/catalog/view/theme/starship/images/cpu.svg"
                }
                width="120"
                height="120"
                alt="CPU"
              />
            </div>
            <div>
              <p>Processor</p>
              {processor && (
                <>
                  <h3>{processor?.productName}</h3>
                  <p>{processor?.brand}</p>
                  <p>{processor?.model}</p>
                  <p>{processor?.status}</p>
                  <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={processor?.rating}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <p>Price</p>
              {processor && (
                <>
                  <h2>৳ {processor.price}</h2>
                </>
              )}
            </div>

            <hr />

            <div className="w-[100px] flex justify-center">
              {!processor ? (
                <div>
                  <button
                    onClick={() =>
                      router.push({
                        pathname: "/processor",
                        query: {
                          prevRoute: "pcBuilder",
                          functionName: "addProcessor",
                        },
                      })
                    }
                    type="button"
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer"
                  >
                    Choose
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <GrClose
                    onClick={() => dispatch(removeProcessor())}
                    className="cursor-pointer text-2xl"
                  />
                  <TfiReload
                    onClick={() =>
                      router.push({
                        pathname: "/processor",
                        query: {
                          prevRoute: "pcBuilder",
                          functionName: "addProcessor",
                        },
                      })
                    }
                    className="cursor-pointer text-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between py-3">
          <div className="flex gap-4">
            <div className="border p-2">
              <Image
                src={
                  motherboard
                    ? motherboard.image
                    : "https://www.startech.com.bd/catalog/view/theme/starship/images/motherboard.svg"
                }
                width="120"
                height="120"
                alt="CPU"
              />
            </div>
            <div>
              <p>Motherboard</p>
              {motherboard && (
                <>
                  <h3>{motherboard?.productName}</h3>
                  <p>{motherboard?.brand}</p>
                  <p>{motherboard?.model}</p>
                  <p>{motherboard?.status}</p>
                  <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={motherboard?.rating}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <p>Price</p>
              {motherboard && (
                <>
                  <h2>৳ {motherboard.price}</h2>
                </>
              )}
            </div>

            <hr />

            <div className="w-[100px] flex justify-center">
              {!motherboard ? (
                <div>
                  <button
                    onClick={() =>
                      router.push({
                        pathname: "/motherboard",
                        query: {
                          prevRoute: "pcBuilder",
                          functionName: "addMotherboard",
                        },
                      })
                    }
                    type="button"
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer"
                  >
                    Choose
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <GrClose
                    onClick={() => dispatch(removeMotherboard())}
                    className="cursor-pointer text-2xl"
                  />
                  <TfiReload
                    onClick={() =>
                      router.push({
                        pathname: "/motherboard",
                        query: {
                          prevRoute: "pcBuilder",
                          functionName: "addMotherboard",
                        },
                      })
                    }
                    className="cursor-pointer text-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between py-3">
          <div className="flex gap-4">
            <div className="border p-2">
              <Image
                src={
                  ram
                    ? ram.image
                    : "https://www.startech.com.bd/catalog/view/theme/starship/images/ram.svg"
                }
                width="120"
                height="120"
                alt="CPU"
              />
            </div>
            <div>
              <p>Ram</p>
              {ram && (
                <>
                  <h3>{ram?.productName}</h3>
                  <p>{ram?.brand}</p>
                  <p>{ram?.model}</p>
                  <p>{ram?.capacity}</p>
                  <p>{ram?.status}</p>
                  <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={ram?.rating}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <p>Price</p>
              {ram && (
                <>
                  <h2>৳ {ram.price}</h2>
                </>
              )}
            </div>

            <hr />

            <div className="w-[100px] flex justify-center">
              {!ram ? (
                <div>
                  <button
                    onClick={() =>
                      router.push({
                        pathname: "/ram",
                        query: {
                          prevRoute: "pcBuilder",
                          functionName: "addRam",
                        },
                      })
                    }
                    type="button"
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer"
                  >
                    Choose
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <GrClose
                    onClick={() => dispatch(removeRam())}
                    className="cursor-pointer text-2xl"
                  />
                  <TfiReload
                    onClick={() =>
                      router.push({
                        pathname: "/ram",
                        query: {
                          prevRoute: "pcBuilder",
                          functionName: "addRam",
                        },
                      })
                    }
                    className="cursor-pointer text-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between py-3">
          <div className="flex gap-4">
            <div className="border p-2">
              <Image
                src={
                  powerSupply
                    ? powerSupply.image
                    : "https://www.startech.com.bd/catalog/view/theme/starship/images/psupply.svg"
                }
                width="120"
                height="120"
                alt="CPU"
              />
            </div>
            <div>
              <p>Power Supply</p>
              {powerSupply && (
                <>
                  <h3>{powerSupply?.productName}</h3>
                  <p>{powerSupply?.brand}</p>
                  <p>{powerSupply?.model}</p>
                  <p>{powerSupply?.capacity}</p>
                  <p>{powerSupply?.status}</p>
                  <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={powerSupply?.rating}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <p>Price</p>
              {powerSupply && (
                <>
                  <h2>৳ {powerSupply.price}</h2>
                </>
              )}
            </div>

            <hr />

            <div className="w-[100px] flex justify-center">
              {!powerSupply ? (
                <div>
                  <button
                    onClick={() =>
                      router.push({
                        pathname: "/powerSupply",
                        query: {
                          prevRoute: "pcBuilder",
                          functionName: "addPowerSupply",
                        },
                      })
                    }
                    type="button"
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer"
                  >
                    Choose
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <GrClose
                    onClick={() => dispatch(removePowerSupply())}
                    className="cursor-pointer text-2xl"
                  />
                  <TfiReload
                    onClick={() =>
                      router.push({
                        pathname: "/powerSupply",
                        query: {
                          prevRoute: "pcBuilder",
                          functionName: "addPowerSupply",
                        },
                      })
                    }
                    className="cursor-pointer text-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between py-3">
          <div className="flex gap-4">
            <div className="border p-2">
              <Image
                src={
                  storageDevice
                    ? storageDevice.image
                    : "https://www.startech.com.bd/catalog/view/theme/starship/images/hdd.svg"
                }
                width="120"
                height="120"
                alt="CPU"
              />
            </div>
            <div>
              <p>Storage Device</p>
              {storageDevice && (
                <>
                  <h3>{storageDevice?.productName}</h3>
                  <p>{storageDevice?.brand}</p>
                  <p>{storageDevice?.model}</p>
                  <p>{storageDevice?.capacity}</p>
                  <p>{storageDevice?.status}</p>
                  <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={storageDevice?.rating}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <p>Price</p>
              {storageDevice && (
                <>
                  <h2>৳ {storageDevice.price}</h2>
                </>
              )}
            </div>

            <hr />

            <div className="w-[100px] flex justify-center">
              {!storageDevice ? (
                <div>
                  <button
                    onClick={() =>
                      router.push({
                        pathname: "/storageDevice",
                        query: {
                          prevRoute: "pcBuilder",
                          functionName: "addStorageDevice",
                        },
                      })
                    }
                    type="button"
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer"
                  >
                    Choose
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <GrClose
                    onClick={() => dispatch(removeStorageDevice())}
                    className="cursor-pointer text-2xl"
                  />
                  <TfiReload
                    onClick={() =>
                      router.push({
                        pathname: "/storageDevice",
                        query: {
                          prevRoute: "pcBuilder",
                          functionName: "addStorageDevice",
                        },
                      })
                    }
                    className="cursor-pointer text-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-between py-3">
          <div className="flex gap-4">
            <div className="border p-2">
              <Image
                src={
                  monitor
                    ? monitor.image
                    : "https://www.startech.com.bd/catalog/view/theme/starship/images/monitor.svg"
                }
                width="120"
                height="120"
                alt="CPU"
              />
            </div>
            <div>
              <p>Monitor</p>
              {monitor && (
                <>
                  <h3>{monitor?.productName}</h3>
                  <p>{monitor?.brand}</p>
                  <p>{monitor?.model}</p>
                  <p>{monitor?.capacity}</p>
                  <p>{monitor?.status}</p>
                  <ReactStars
                    count={5}
                    size={24}
                    edit={false}
                    value={monitor?.rating}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </>
              )}
            </div>
          </div>
          <div className="flex gap-3">
            <div>
              <p>Price</p>
              {monitor && (
                <>
                  <h2>৳ {monitor.price}</h2>
                </>
              )}
            </div>

            <hr />

            <div className="w-[100px] flex justify-center">
              {!monitor ? (
                <div>
                  <button
                    onClick={() =>
                      router.push({
                        pathname: "/monitor",
                        query: {
                          prevRoute: "pcBuilder",
                          functionName: "addMonitor",
                        },
                      })
                    }
                    type="button"
                    className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 cursor-pointer"
                  >
                    Choose
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <GrClose
                    onClick={() => dispatch(removeMonitor())}
                    className="cursor-pointer text-2xl"
                  />
                  <TfiReload
                    onClick={() =>
                      router.push({
                        pathname: "/monitor",
                        query: {
                          prevRoute: "pcBuilder",
                          functionName: "addMonitor",
                        },
                      })
                    }
                    className="cursor-pointer text-2xl"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="text-right pb-10">
        <button
          type="button"
          onClick={isDisabled ? null : () => dispatch(buildCompleted())}
          className={`px-8 border-none py-3 text-white rounded focus:outline-none ${
            isDisabled ? "bg-blue-300" : "bg-blue-600"
          }`}
          disabled={isDisabled}
        >
          Completed Build
        </button>
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
