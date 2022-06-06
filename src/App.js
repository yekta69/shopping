import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages";
import { LoginPage } from "./pages/login";
import { CartPage } from "./pages";
import { ProfilePage } from "./pages";
import { Provider } from "react-redux";
import { CartStore } from "./component/productCard";
import { Product } from "./component/Product";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {
  return (
    <>
      <Provider store={CartStore}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/log" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
