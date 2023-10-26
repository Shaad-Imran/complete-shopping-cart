import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [], // An array to store the items in the shopping cart
  cartTotalQuantity: 0, // Total quantity of items in the cart
  cartTotalAmount: 0, // Total cost of items in the cart
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartItems.find((item) => item.id === id);

      if (existingItem) {
        existingItem.cartQuantity += 1; // Increase quantity if the item is already in the cart

        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 }); // Add a new item to the cart

        toast.success("Product added to cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    decreaseCart: (state, action) => {
      const { id } = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === id);

      if (itemIndex >= 0) {
        const item = state.cartItems[itemIndex];

        if (item.cartQuantity > 1) {
          item.cartQuantity -= 1; // Decrease quantity if more than 1

          toast.info("Decreased product quantity", {
            position: "bottom-left",
          });
        } else {
          state.cartItems.splice(itemIndex, 1); // Remove the item if the quantity is 1

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id); // Remove the item from the cart

      toast.error("Product removed from cart", {
        position: "bottom-left",
      });

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    getTotals: (state) => {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal; // Calculate the total cost
          cartTotal.quantity += cartQuantity; // Calculate the total quantity

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = parseFloat(total.toFixed(2));
    },

    clearCart: (state) => {
      state.cartItems = []; // Clear the cart
      toast.error("Cart cleared", { position: "bottom-left" });
      localStorage.removeItem("cartItems"); // Remove the "cartItems" from localStorage
    },
  },
});

export const { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
