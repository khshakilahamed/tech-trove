import RootLayout from "@/components/Layouts/RootLayout";
import Card from "@/components/UI/Card";

const Others = ({ products }) => {
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

export default Others;

Others.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://tech-trove-server.vercel.app/products?category=others"
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
