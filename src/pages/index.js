import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Banner";
import Categories from "@/components/UI/Categories";
import RecentProducts from "@/components/UI/RecentProducts";
import React from "react";

const HomePage = ({ products }) => {
  // console.log(products);
  return (
    <div>
      <Banner />
      <RecentProducts products={products.data} />
      <Categories />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  // console.log(data);

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};
