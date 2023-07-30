import RootLayout from "@/components/Layouts/RootLayout";
import Card from "@/components/UI/Card";

const Monitor = ({ products }) => {
  console.log(products);
  return (
    <div className="px-14">
      <div className="flex gap-10 flex-wrap justify-center py-10">
        {products.data.length > 0 &&
          products?.data?.map((product) => (
            <Card key={product?._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Monitor;

Monitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/products?category=monitor");
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
