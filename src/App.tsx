import { BrowserRouter } from "react-router-dom";
import "./i18n/config";
import { Navigation } from "./components/Navigation";
import { AppRouter } from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
