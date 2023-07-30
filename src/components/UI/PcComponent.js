import Image from "next/image";
import { useRouter } from "next/router";
import { GrClose } from "react-icons/gr";
import { TfiReload } from "react-icons/tfi";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";

const PcComponent = ({
  component,
  functionBody,
  functionName,
  endPoint,
  placeHolderImage,
  product,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex justify-between py-3">
        <div className="flex gap-4">
          <div className="border p-2">
            <Image
              src={product ? product.image : placeHolderImage}
              width="120"
              height="120"
              alt={component}
            />
          </div>
          <div>
            <p>{component}</p>
            {product && (
              <>
                <h3>{product?.productName}</h3>
                <p>{product?.brand}</p>
                <p>{product?.model}</p>
                <p>{product?.status}</p>
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
              </>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <div>
            <p>Price</p>
            {product && (
              <>
                <h2>৳ {product.price}</h2>
              </>
            )}
          </div>

          <hr />

          <div className="w-[100px] flex justify-center">
            {!product ? (
              <div>
                <button
                  onClick={() =>
                    router.push({
                      pathname: `/pcBuilder/${endPoint}`,
                      query: {
                        prevRoute: "pcBuilder",
                        functionName: `${functionName}`,
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
                  onClick={() => dispatch(functionBody())}
                  className="cursor-pointer text-2xl"
                />
                <TfiReload
                  onClick={() =>
                    router.push({
                      pathname: `/pcBuilder/${endPoint}`,
                      query: {
                        prevRoute: "pcBuilder",
                        functionName: `${functionName}`,
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
  );
};

export default PcComponent;
