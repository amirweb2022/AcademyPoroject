import Routers from "./routers/Routers";
import AuthProvider from "./Providers/Auth/AuthProvider";
const App = () => {
  return (
    <AuthProvider>
      <Routers />
    </AuthProvider>
  );
};

export default App;