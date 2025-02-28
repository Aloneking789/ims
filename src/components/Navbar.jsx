import { Link } from "react-router-dom";
import {
  Bell,
  Globe,
  Expand,
  Menu,
  PackageSearch,
  MoonIcon,
} from "lucide-react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-secondary p-4  text-white flex justify-between items-center shadow-md">
      {/* Left Side - Logo & Menu */}
      <div className="flex items-center space-x-4">
        <Menu
          className="text-white w-6 h-6 cursor-pointer"
          onClick={() => {
            toggleSidebar();
          }}
        />
        <h1>welcome SuperMarket</h1>
      </div>

      {/* Right Side - Navigation & Icons */}
      <div className="flex items-center space-x-6">
        <Expand className="text-white w-6 h-6 cursor-pointer" />
        <MoonIcon className="text-white w-6 h-6 cursor-pointer" />
        <Link to="/notifications">
          <div className="relative">
            <Bell className="text-white w-6 h-6 cursor-pointer" />
            <span className="absolute -top-1 -right-2 bg-white text-primary text-xs rounded-full px-1">
              99+
            </span>
          </div>
        </Link>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="MerchantMind"
          className="h-8"
        />
      </div>
    </nav>
  );
};

export default Navbar;
