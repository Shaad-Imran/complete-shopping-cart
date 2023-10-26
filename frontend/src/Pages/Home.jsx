import { useGetAllProductsQuery } from "../store/slice/productsApi";
import Product from "../components/Product";

const Home = () => {
  const { data } = useGetAllProductsQuery();

  return (
    <section className="pt-28 pb-10  bg-gray-100">
      <div className="mx-auto grid max-w-6xl  grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {data &&
          data?.map((product) => (
            <Product key={product.id} productData={product} />
          ))}
      </div>
    </section>
  );
};

export default Home;
