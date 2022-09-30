import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Nav";
import Profile from "./Components/Profile/Profile";

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
