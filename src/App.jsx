import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import LoginPage from "./components/auth/LoginPage";
import FloatingChatbot from "./components/chatbot/floatingChatbot";
import DirectorView from "./components/director/DirectorView";
import PODetailTable from "./components/director/PODetailTable"; // 👈 Import new detail table
import ManagerView from "./components/manager/ManagerView";
import RegionDetails from "./components/manager/Charts/RegionDetails";
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

              <div className="flex-1 overflow-auto p-4 z-10">
                <Routes>
                  <Route path="director" element={<DirectorView />} />
                  <Route path="director/po-details" element={<PODetailTable />} />
                  <Route path="manager" element={<ManagerView/>}/>
                  <Route path="/manager/region-details" element={<RegionDetails />} />
                   {/* 👈 New route */}
                </Routes>
              </div>

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
