import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
