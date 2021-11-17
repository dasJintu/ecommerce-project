import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { addProducts } from "./features/shop/productSlice";

import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import ItemCategories from "./pages/ItemCategories";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {
  const dispatch = useDispatch();

  const fetchProducts = () => {
    return fetch("https://fakestoreapi.com/products").then((res) => res.json());
  };

  const { isLoading, isError, data, error } = useQuery(
    "products",
    fetchProducts
  );

  useEffect(() => {
    dispatch(addProducts(data));
  }, [data]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="font-roboto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="cart" element={<Cart />} />
        <Route path=":categoryId" element={<ItemCategories />} />
        <Route path=":categoryId/:productId" element={<ProductDetail />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
