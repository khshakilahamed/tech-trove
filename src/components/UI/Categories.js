import processor from "@/assets/images/processor.webp";
import motherboard from "@/assets/images/motherboard.webp";
import ram from "./../../assets/images/ram.webp";
import powerSupply from "@/assets/images/powerSupply.jpg";
import storage from "@/assets/images/storage.jpg";
import monitor from "@/assets/images/monitor.jpg";
import others from "@/assets/images/others.webp";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/categories.module.css";

const Categories = () => {
  const categories = [
    {
      id: 1,
      label: "Processor",
      path: "/processor",
      image: processor,
    },
    {
      id: 2,
      label: "Motherboard",
      path: "/motherboard",
      image: motherboard,
    },
    {
      id: 3,
      label: "Ram",
      path: "/ram",
      image: ram,
    },
    {
      id: 4,
      label: "Power Supply",
      path: "/powerSupply",
      image: powerSupply,
    },
    {
      id: 5,
      label: "Storage Devices",
      path: "/storageDevice",
      image: storage,
    },
    {
      id: 6,
      label: "Monitors",
      path: "/monitor",
      image: monitor,
    },
    {
      id: 7,
      label: "Other products",
      path: "/others",
      image: others,
    },
  ];

  return (
    <div className="px-14 pb-10">
      <h2 className="text-center py-10 text-3xl">Product Categories</h2>

      <div className={`flex gap-10 flex-wrap justify-center `}>
        {categories.map((category) => (
          <Link key={category.id} href={category.path}>
            <div
              className={`relative w-[300px] h-[300px] rounded-xl overflow-hidden ${styles.category}`}
            >
              <div>
                <Image
                  className={`p-5 ${styles.productImage}`}
                  src={category.image}
                  width={300}
                  alt="processor"
                />
              </div>
              <div
                className="absolute top-0 h-full w-full"
                style={{ background: "rgba(43, 43, 49, 0.7)" }}
              >
                <div className="flex justify-center items-center h-full">
                  <h2 className="text-white text-3xl hover:underline">
                    {category.label}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
