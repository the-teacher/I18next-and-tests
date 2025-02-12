import { BrowserRouter } from "react-router-dom";
import "./i18n/config";
import { Navigation } from "./components/Navigation";
import { AppRouter } from "./router";

const App = () => {
  // https://reactrouter.com/6.29.0/upgrading/future#v7_starttransition
  // https://reactrouter.com/6.29.0/upgrading/future#v7_relativesplatpath
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Navigation />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
