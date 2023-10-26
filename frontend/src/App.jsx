import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Error from "./Pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import appStore from "./store/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <ToastContainer />

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </div>
    </Provider>
  );
};

export default App;
