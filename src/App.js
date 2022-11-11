import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Music from "./Components/Music/Music";
import Navbar from "./Components/Navbar/Nav";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";

const App = (props) => {
  return (
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*" element={<Dialogs dialogsState={props.state.DialogsPage} />} />
            <Route path="/profile" element={<Profile profileState={props.state.ProfilePage} addPost={props.addPost}/>} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />}/>
          </Routes>
        </div>
        <footer></footer>
      </div>
  );
};

export default App;
