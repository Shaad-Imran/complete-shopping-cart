import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addToCart,
  decreaseCart,
  removeFromCart,
  getTotals,
  clearCart,
} from "../store/slice/cartSlice";
import { useEffect } from "react";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    // Calculate and update cart totals whenever the cart or its contents change
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    // Add a product to the cart
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    // Decrease the quantity of a product in the cart
    dispatch(decreaseCart(product));
  };

  const handleRemoveFromCart = (product) => {
    // Remove a product from the cart
    dispatch(removeFromCart(product));
  };

  const handleClearCart = () => {
    // Clear the entire cart
    dispatch(clearCart());
  };

  return (
    <section className="pt-28 pb-10 px-6 sm:px-4">
      {cart.cartItems.length === 0 ? (
        <div className=" text-xl mt-8 text-gray-600 flex flex-col items-center">
          <p>Your cart is currently empty</p>
          <div className=" mt-4">
            <Link
              to="/"
              className="text-gray-600 flex items-center  hover:text-blue-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span className="ml-2">Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-x-2 mt-4">
            <h3 className="flex-[3] text-sm font-normal uppercase">Product</h3>
            <h3 className=" flex-1 text-sm font-normal uppercase text-left">
              Price
            </h3>
            <h3 className=" flex-1 text-sm font-normal uppercase text-center">
              Quantity
            </h3>
            <h3 className=" flex-1 text-sm font-normal uppercase text-right">
              Total
            </h3>
          </div>
          <div className="">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <div
                  className="border-t border-gray-200 py-4 flex items-center"
                  key={cartItem.id}
                >
                  <div className=" flex max-sm:flex-col max-sm:items-start flex-[3] items-center ">
                    <img
                      src={cartItem.image}
                      alt={cartItem.name}
                      className="w-24 max-w-full mr-4 max-sm:mr-0"
                    />
                    <div>
                      <h3 className="font-normal">{cartItem.name}</h3>
                      <p className="text-gray-500">{cartItem.gender}</p>
                      <button
                        onClick={() => handleRemoveFromCart(cartItem)}
                        className=" mt-2 text-gray-500 hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 text-sm font-normal  ">
                    ${cartItem.price}
                  </div>
                  <div className=" flex flex-1 items-start justify-center  border border-gray-200 rounded ">
                    <button
                      onClick={() => handleDecreaseCart(cartItem)}
                      className="hover:text-red-400 p-2"
                    >
                      -
                    </button>
                    <div className="p-2">{cartItem.cartQuantity}</div>
                    <button
                      onClick={() => handleAddToCart(cartItem)}
                      className="hover:text-blue-500 p-2"
                    >
                      +
                    </button>
                  </div>
                  <div className=" text-sm font-bold text-right pr-2 flex-1 ">
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
          </div>
          <div className="flex max-sm:flex-col justify-between items-start border-t border-gray-200 pt-8">
            <button
              onClick={() => handleClearCart()}
              className="w-32 h-10 rounded border border-gray-200 font-normal tracking-wider text-gray-500 hover:text-red-400 hover:border-red-300 max-sm:order-last max-sm:mt-4 "
            >
              Clear Cart
            </button>
            <div className="w-64 max-w-full max-sm:w-full  ">
              <div className=" flex justify-between text-lg">
                <span>Subtotal</span>
                <span className=" font-bold">${cart.cartTotalAmount}</span>
              </div>
              <p className="text-sm font-light my-2">
                Taxes and shipping calculated at checkout
              </p>
              <button className="w-full h-10 rounded bg-blue-500 text-white hover:bg-blue-400">
                Check out
              </button>
              <div className=" mt-4">
                <Link
                  to="/"
                  className="text-gray-500 flex items-center hover:text-blue-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span className="ml-2">Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
