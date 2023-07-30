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
import PcComponents from "@/components/UI/PcComponents";

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
        {/**
         * component --> component name should be understandable that which component you want to add
         * functionBody --> functionBody will be the exact that function which created in redux to remove the product
         * functionName --> redux function name for the specific product. type in string only
         * endPoint --> provide the endpoint so that you can go to exact that category page.
         * placeHolderImage --> add a image url as placeholder.
         * product --> pass that product from redux which you already added.
         */}
        <PcComponents
          component="Processor"
          functionBody={removeProcessor}
          functionName="addProcessor"
          endPoint="processor"
          placeHolderImage="https://www.startech.com.bd/catalog/view/theme/starship/images/cpu.svg"
          product={processor}
        />
        <hr />
        <PcComponents
          component="Motherboard"
          functionBody={removeMotherboard}
          functionName="addMotherboard"
          endPoint="motherboard"
          placeHolderImage="https://www.startech.com.bd/catalog/view/theme/starship/images/motherboard.svg"
          product={motherboard}
        />
        <hr />
        <PcComponents
          component="Ram"
          functionBody={removeRam}
          functionName="addRam"
          endPoint="ram"
          placeHolderImage="https://www.startech.com.bd/catalog/view/theme/starship/images/ram.svg"
          product={ram}
        />
        <hr />
        <PcComponents
          component="Power Supply"
          functionBody={removePowerSupply}
          functionName="addPowerSupply"
          endPoint="powerSupply"
          placeHolderImage="https://www.startech.com.bd/catalog/view/theme/starship/images/psupply.svg"
          product={powerSupply}
        />
        <hr />
        <PcComponents
          component="Storage Device"
          functionBody={removeStorageDevice}
          functionName="addStorageDevice"
          endPoint="storageDevice"
          placeHolderImage="https://www.startech.com.bd/catalog/view/theme/starship/images/hdd.svg"
          product={storageDevice}
        />
        <hr />
        <PcComponents
          component="Monitor"
          functionBody={removeMonitor}
          functionName="addMonitor"
          endPoint="monitor"
          placeHolderImage="https://www.startech.com.bd/catalog/view/theme/starship/images/monitor.svg"
          product={monitor}
        />
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
