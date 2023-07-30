import RootLayout from "@/components/Layouts/RootLayout";
import Image from "next/image";
import ReactStars from "react-rating-stars-component";

const Product = ({ product }) => {
  const {
    image,
    productName,
    category,
    brand,
    status,
    price,
    rating,
    description,
    capacity,
  } = product?.data || {};
  return (
    <div className="px-14">
      <div className="flex flex-col md:flex-row gap-10 justify-center py-10">
        <div className="md:w-1/2 flex justify-center items-center">
          <Image src={image} width={300} height={300} alt="product image" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold">{productName}</h2>
          <p>Category: {category}</p>
          <p>Brand: {brand}</p>
          <p>status: {status}</p>
          <p>
            price: <span className="font-bold">৳ {price}</span>
          </p>
          {capacity && <p>Capacity: {capacity}</p>}
          <ReactStars
            count={5}
            size={24}
            edit={false}
            value={rating}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </div>
      </div>
      <div className="py-10">
        <h2 className="text-2xl font-bold">Description</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Product;

Product.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://tech-trove-server.vercel.app/products");
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://tech-trove-server.vercel.app/product/${params.productId}`
  );
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
