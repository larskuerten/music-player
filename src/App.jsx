import { AllSongs } from "./components/AllSongs";
import { MusicPlayer } from "./components/MusicPlayer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router";
import { Playlists } from "./components/Playlists";
import { MusicProvider } from "./contexts/MusicProvider";

function App() {
  return (
    <BrowserRouter>
      <MusicProvider>
        <div className="app">
          <Navbar />
          <main className="app-main">
            <div className="player-section">
              <MusicPlayer />
            </div>
            <div className="contect-section">
              <Routes>
                <Route path="/" element={<AllSongs />} />
                <Route path="/playlists" element={<Playlists />} />
              </Routes>
            </div>
          </main>
        </div>
      </MusicProvider>
    </BrowserRouter>
  );
}

export default App;
