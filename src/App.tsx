import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NotFound';
import ScrollToTop from './components/ScrollToTop';
import Team from './pages/Team';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Solutions from './pages/Solutions';
import ChapterDetail from './pages/ChapterDetail';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/case-study" element={<Solutions />} />
            <Route path="/chapter/:id" element={<ChapterDetail />} /> {/* Route for dynamic chapters */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AnimatePresence>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
