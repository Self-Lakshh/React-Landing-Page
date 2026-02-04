import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ProductPage from './pages/Landing Page/Product';
import Story from './pages/Landing Page/Story/Story';
import Manufacturing from './pages/Landing Page/Manufacturing/Manufacturing';
import Packaging from './pages/Landing Page/Packaging/Packaging';
import Team from './pages/Landing Page/Team/Team';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<ProductPage />} />
          <Route path="story" element={<Story />} />
          <Route path="manufacturing" element={<Manufacturing />} />
          <Route path="packaging" element={<Packaging />} />
          <Route path="team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
