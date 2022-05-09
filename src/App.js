import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages";
import { Login } from "./component/LogIn";
import { LoginPage } from "./pages/login";
import { CartPage } from "./pages";
import { Provider } from "react-redux";
import { cartstore } from "./component/productCard";
import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function App() {
  return (
    <>
      <Provider store={cartstore}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/log" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
