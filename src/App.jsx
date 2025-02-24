import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import Landing from './pages/Landing';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InfoPage from './pages/InfoPage';
import PredictionPage from './pages/PredictionPage';
import ChatPage from './pages/ChatPage';
import ContactPage from './pages/ContactPage';
import ProtectedRoute from './components/ProtectedRoute';
import ResourcePage from './pages/ResourcePage';

const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_KEY;
function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/InfoPage" element={<InfoPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/ResourcePage" element={<ResourcePage />} />
          <Route
            path="/HomePage"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ChatPage"
            element={
              <ProtectedRoute>
                <ChatPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/PredictionPage"
            element={
              <ProtectedRoute>
                <PredictionPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ClerkProvider>
  );
}

export default App;
