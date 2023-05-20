import Routers from "./routers/Routers";
import AuthProvider from "./Providers/Auth/AuthProvider";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
const App = () => {
  return (
    <>
      <ScrollToTop />
      <AuthProvider>
        <Toaster />
        <Routers />
      </AuthProvider>
    </>
  );
};

export default App;