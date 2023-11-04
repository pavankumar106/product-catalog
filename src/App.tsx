import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import TrendingProducts from "./components/TrendingProducts";
import { Toaster } from "react-hot-toast";
import Banner from "./components/Banner";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Hero />
        <Feature />
        <TrendingProducts />
        <Banner />
        <Toaster position="bottom-center" reverseOrder={false} />
      </Provider>
    </div>
  );
};

export default App;
