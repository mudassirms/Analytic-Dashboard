import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import LoginPage from "./components/auth/LoginPage";
import TeachersPage from "./pages/TeachersPage";
import StudentPage from "./pages/StudentPage";
import SettingsPage from "./pages/SettingsPage";
import SchoolsPage from "./pages/SchoolPage";
import FloatingChatbot from "./components/chatbot/floatingChatbot"; // 👈 Import the chatbot

const isAuthenticated = () => {
  return localStorage.getItem("loggedIn") === "true";
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" />;
};

function App() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <Routes>
      {/* 🔒 Protected Dashboard Layout */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden relative">
              {/* Background Blur */}
              <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
                <div className="absolute inset-0 backdrop-blur-sm" />
              </div>

              <Sidebar handleLogout={handleLogout} />

              <Routes>
                <Route path="/teachers" element={<TeachersPage />} />
                <Route path="/student" element={<StudentPage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/" element={<SchoolsPage />} />
              </Routes>

              {/* 🧠 Floating Chatbot */}
              <FloatingChatbot />
            </div>
          </ProtectedRoute>
        }
      />

      {/* 🔓 Public Login Route */}
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
