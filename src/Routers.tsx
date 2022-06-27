import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import QuintoAndar from './pages/QuintoAndar';

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quintoandar" element={<QuintoAndar />} />
      </Routes>
    </BrowserRouter>
  );
}
