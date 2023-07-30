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
  } = product?.data;
  return (
    <div className="px-14">
      <div className="flex flex-wrap gap-10 justify-center py-10">
        <div>
          <Image src={image} width={300} height={300} alt="product image" />
        </div>
        <div>
          <h2>{productName}</h2>
          <p>Category: {category}</p>
          <p>Brand: {brand}</p>
          <p>status: {status}</p>
          <p>price: {price}</p>
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
        <h2>Description</h2>
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
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

  const paths = products?.data?.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/product/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      product: data,
    },
  };
};
