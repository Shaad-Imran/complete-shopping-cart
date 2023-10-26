import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cartTotalQuantity } = useSelector((store) => store.cart);

  return (
    <nav className="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white py-2.5 px-6 sm:px-4">
      <div className=" flex  flex-wrap items-center justify-between ">
        <Link to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold">
            Eshop
          </span>
        </Link>

        <Link to="/cart">
          <button
            type="button"
            className="flex border hover:border-blue-600 py-1.5 text-center text-sm font-medium text-blue-700 focus:outline-none rounded-lg relative px-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-handbag-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
            </svg>
            <span className="bg-yellow-300 rounded-full grid place-items-center absolute top-1 right-1 text-black font-bold w-5 h-5 p-0">
              {cartTotalQuantity}
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
