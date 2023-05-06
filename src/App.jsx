import Routers from "./routers/Routers";
import AuthProvider from "./Providers/Auth/AuthProvider";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <AuthProvider>
      <Toaster />
      <Routers />
    </AuthProvider>
  );
};

export default App;