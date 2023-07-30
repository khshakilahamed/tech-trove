import Card from "./Card";

const RecentProducts = ({ products }) => {
  let randomProducts = [];
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      randomProducts.push(products[j]);
    }
  }

  shuffleArray(products);

  // console.log(randomProducts);
  const slicedRandomProducts = products.slice(0, 6);

  return (
    <div className="px-14 py-10">
      <h2 className="text-center text-3xl">Featured Products</h2>

      <div className="flex gap-10 flex-wrap justify-center my-10">
        {slicedRandomProducts.length > 0 &&
          slicedRandomProducts?.map((product) => (
            <Card key={product?._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default RecentProducts;
