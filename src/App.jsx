import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductList from './pages/ProductList';
import TestPage from './pages/TestPage';

function App() {
  return (
    <Router>
      <Navbar />
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/collection/:category" element={<ProductList />} /> 
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/test" element={<TestPage />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
