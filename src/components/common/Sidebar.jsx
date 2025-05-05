import { LogOut, Presentation, UserCog } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const SIDEBAR_ITEMS = [
  {
    name: "Director View",
    icon: Presentation,
    color: "#38BDF8",
    href: "/director",
  },
  {
    name: "Manager View",
    icon: UserCog,
    color: "#38BDF8",
    href: "/manager",
  },
];

const Sidebar = ({ handleLogout }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <motion.div
      className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${
        isSidebarOpen ? "w-[180px]" : "w-[60px]"
      }`}
      animate={{ width: isSidebarOpen ? 180 : 60 }}
    >
      <div className="h-full bg-gray-800 bg-opacity-50 backdrop-blur-md p-3 flex flex-col border-r border-gray-700">
        {/* Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 rounded-full hover:bg-gray-700 transition-colors max-w-fit"
        >
          {/* Add an icon if needed */}
        </motion.button>

        {/* Sidebar Items */}
        <nav className="mt-6 flex-grow">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.href} to={item.href}>
              <motion.div className="flex items-center p-3 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mb-2">
                <item.icon size={20} style={{ color: item.color, minWidth: "20px" }} />
                <AnimatePresence>
                  {isSidebarOpen && (
                    <motion.span
                      className="ml-3 whitespace-nowrap"
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 }}
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* Logout */}
        <div className="mt-auto">
          <motion.button
            onClick={handleLogout}
            className="flex items-center w-full p-3 text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors mt-4"
          >
            <LogOut size={20} className="mr-3" />
            <AnimatePresence>
              {isSidebarOpen && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                >
                  Log Out
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
