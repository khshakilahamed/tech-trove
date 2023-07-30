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
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import PcComponent from "@/components/UI/PcComponent";
import { toast } from "react-hot-toast";

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

  const handleCompleteBuild = () => {
    dispatch(buildCompleted());
    toast.success("Successfully Completed");
  };

  return (
    <div className="px-14">
      <div className="flex justify-between items-center py-10">
        <h2 className="text-lg font-bold">PC Builder - Tech Trove</h2>
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
        <PcComponent
          component="Processor"
          functionBody={removeProcessor}
          functionName="addProcessor"
          endPoint="processor"
          placeHolderImage="https://www.startech.com.bd/catalog/view/theme/starship/images/cpu.svg"
          product={processor}
        />
        <hr />
        <PcComponent
          component="Motherboard"
          functionBody={removeMotherboard}
          functionName="addMotherboard"
          endPoint="motherboard"
          placeHolderImage="https://www.startech.com.bd/catalog/view/theme/starship/images/motherboard.svg"
          product={motherboard}
        />
        <hr />
        <PcComponent
          component="Ram"
          functionBody={removeRam}
          functionName="addRam"
          endPoint="ram"
          placeHolderImage="https://www.startech.com.bd/catalog/view/theme/starship/images/ram.svg"
          product={ram}
        />
        <hr />
        <PcComponent
          component="Power Supply"
          functionBody={removePowerSupply}
          functionName="addPowerSupply"
          endPoint="powerSupply"
          placeHolderImage="https://www.startech.com.bd/catalog/view/theme/starship/images/psupply.svg"
          product={powerSupply}
        />
        <hr />
        <PcComponent
          component="Storage Device"
          functionBody={removeStorageDevice}
          functionName="addStorageDevice"
          endPoint="storageDevice"
          placeHolderImage="https://www.startech.com.bd/catalog/view/theme/starship/images/hdd.svg"
          product={storageDevice}
        />
        <hr />
        <PcComponent
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
          onClick={isDisabled ? null : handleCompleteBuild}
          className={`px-8 border-none py-3 text-white rounded focus:outline-none ${
            isDisabled
              ? "bg-blue-300 cursor-not-allowed"
              : "bg-blue-600 cursor-pointer"
          }`}
          disabled={isDisabled}
        >
          Complete Build
        </button>
      </div>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
