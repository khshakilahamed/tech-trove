/* eslint-disable @next/next/no-img-element */
import {
  addMonitor,
  addMotherboard,
  addPowerSupply,
  addProcessor,
  addRam,
  addStorageDevice,
} from "@/redux/features/pcBuilder/pcBuilderSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";

const Card = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { functionName } = router.query;

  const goBack = (data) => {
    if (functionName === "addProcessor") {
      dispatch(addProcessor(data));
    }
    if (functionName === "addMotherboard") {
      dispatch(addMotherboard(data));
    }
    if (functionName === "addRam") {
      dispatch(addRam(data));
    }
    if (functionName === "addPowerSupply") {
      dispatch(addPowerSupply(data));
    }
    if (functionName === "addStorageDevice") {
      dispatch(addStorageDevice(data));
    }
    if (functionName === "addMonitor") {
      dispatch(addMonitor(data));
    }
    router.back();
  };

  return (
    <>
      {product && (
        <div className="max-w-sm text-black border  rounded-lg shadow ">
          <div className="text-center py-5">
            <Image
              width="250"
              height="250"
              src={product?.image}
              alt="product-image"
            />
          </div>
          <div className="p-5">
            <div className="flex justify-between items-center">
              <p className="bg-red-500 px-2 rounded text-white">
                {product?.status}
              </p>
              <ReactStars
                count={5}
                size={24}
                edit={false}
                value={product?.rating}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
            <p className="capitalize">{product?.category}</p>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {product?.productName.length > 20
                ? Array.from(product?.productName)
                    .slice(0, 20)
                    .map((name, i) => <span key={i}>{name}</span>)
                    .concat("...")
                : product?.productName}
            </h5>
            <p className="text-xl  font-bold py-3 text-red-500">
              ৳ {product?.price}
            </p>
            <div>
              {router.query.prevRoute === "pcBuilder" ? (
                <button
                  onClick={() => goBack(product)}
                  className="text-white border-none cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
                >
                  Add
                </button>
              ) : (
                <button className="text-white border-none cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                  Details
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
