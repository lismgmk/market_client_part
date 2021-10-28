import Navbar from "./components/NavBar";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";

const App = observer(() => {
        return (
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        )
    }
)

export default App;
