import { useGetAllProductsQuery } from "../store/slice/productsApi";
import Product from "../components/Product";
import ShimmerProductCard from "../components/ShimmerProductCard";

const Home = () => {
  const { data, isLoading } = useGetAllProductsQuery();
  console.log(isLoading);

  return (
    <section className="pt-28 pb-10  bg-gray-100">
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {isLoading
          ? // Render four ShimmerProductCard components
            Array.from({ length: 4 }).map((_, index) => (
              <ShimmerProductCard key={index} />
            ))
          : data &&
            data?.map((product) => (
              <Product key={product.id} productData={product} />
            ))}
      </div>
    </section>
  );
};

export default Home;
