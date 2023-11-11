import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import TV from "./pages/TV";
import Celebrity from "./pages/Celebrity";
import NotFound from "./pages/NotFound";
import Header from './Component/Header';
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/movies" element={<Movies/> } />
          <Route path="/movies/:title" element={<MovieDetail />} />
          <Route path="/tv" element={<TV />  } />
          <Route path="/person" element={<Celebrity/>  } />
          <Route path="/*" element={<NotFound/>  } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;