import RootLayout from "@/components/Layouts/RootLayout";

const PcBuilder = () => {
  return (
    <div>
      <h2>PC Builder</h2>
    </div>
  );
};

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
