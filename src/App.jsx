import Routers from "./routers/Routers";
import AuthProvider from "./Providers/Auth/AuthProvider";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import CartProvider from "./Providers/Cart/CartProdvicer";
const App = () => {
  return (
    <>
      <ScrollToTop />
      <AuthProvider>
        <Toaster />
        <CartProvider>
          <Routers />
        </CartProvider>
      </AuthProvider>
    </>
  );
};

export default App;