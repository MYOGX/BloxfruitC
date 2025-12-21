import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomeScreen from './screens/HomeScreen';
import FruitDetailScreen from './screens/FruitDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import AboutScreen from './screens/AboutScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/fruit/:fruitId" element={<FruitDetailScreen />} />
          <Route path="/favorites" element={<FavoritesScreen />} />
          <Route path="/about" element={<AboutScreen />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
