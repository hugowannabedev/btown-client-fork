import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import SpotPage from "./pages/SpotPage";
import CollectionListPage from "./pages/CollectionListPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/spot" element={<IsPrivate> <SpotPage /> </IsPrivate>} />
        <Route path="/collection" element={<CollectionListPage />} />
        {/* <Route path="/collection/edit/:collectionId" element={<IsPrivate> <CollectionPage /> </IsPrivate>} /> */}
        
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
      </Routes>
    </div>
  );
}

export default App;