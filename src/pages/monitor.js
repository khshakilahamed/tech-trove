import RootLayout from "@/components/Layouts/RootLayout";
import Card from "@/components/UI/Card";

const Monitor = ({ products }) => {
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

export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:3000/api/products?category=monitor"
  );
  const data = await res.json();

  // console.log(data);

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};
