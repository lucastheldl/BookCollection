import "./App.scss";
import { FavoriteContextProvider } from "./context/FavoriteContext";

//pages
import Home from "./pages/Home";

function App() {
  return (
    <FavoriteContextProvider>
      <div className="App">
        <Home />
      </div>
    </FavoriteContextProvider>
  );
}

export default App;
