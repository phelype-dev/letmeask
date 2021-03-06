import { Home } from "./pages/Home";
import { NewRoom } from "./pages/newRoom";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
 

  return (
    <BrowserRouter>
        <AuthContextProvider>
        <Route path="/" exact component={Home}></Route>
        <Route path="/rooms/new" exact component={NewRoom}></Route>
        </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
