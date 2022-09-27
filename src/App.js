import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Nav";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
        <Header />
        <Navbar />
        <Profile />
      <footer></footer>
    </div>
  );
};

export default App;
