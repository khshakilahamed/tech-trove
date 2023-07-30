import RootLayout from "@/components/Layouts/RootLayout";
import Card from "@/components/UI/Card";

const PowerSupply = ({ products }) => {
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

export default PowerSupply;

PowerSupply.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async () => {
  const res = await fetch(
    "https://tech-trove-server.vercel.app/products?category=power supply"
  );
  const data = await res.json();
  return {
    props: {
      products: data,
    },
  };
};
