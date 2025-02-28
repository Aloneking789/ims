import {
  Link,
  Navigate,
  NavLink,
  useNavigate,
  useParams,
} from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  FileText,
  Users,
  ShieldCheck,
  ClipboardList,
  Settings,
  LogOut,
  ChevronDown,
  PlusCircle,
  Edit,
  BarChart3,
  Boxes,
  PackageSearch,
  Search,
  FolderInput,
  IdCard,
  Phone,
  Smartphone,
  Signal,
  User,
  LogIn,
} from "lucide-react";
import { useEffect, useState } from "react";

// Role-based menu configuration
const menuByRole = {
  super_admin: [
    {
      name: "Dashboard",
      path: "/dashboard/super_admin",
      icon: <LayoutDashboard className="w-6 h-6" />,
    },
    { name: "Sim", path: "/sim", icon: <Signal className="w-6 h-6" /> },
    {
      name: "Devices",
      path: "/devices",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <Package className="w-6 h-6" />,
      subItems: [
        {
          name: "Add Product",
          path: "/product/add-product",
          icon: <PlusCircle className="w-4 h-4" />,
        },
        {
          name: "Edit Product",
          path: "/product/edit-product",
          icon: <Edit className="w-4 h-4" />,
        },
        {
          name: "Product Import",
          path: "/product/bulk-import",
          icon: <FolderInput className="w-4 h-4" />,
        },
        {
          name: "Product Report",
          path: "/product/report",
          icon: <BarChart3 className="w-4 h-4" />,
        },
      ],
    },
    {
      name: "Management",
      path: "/management",
      icon: <Users className="w-6 h-6" />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      name: "User",
      icon: <User className="w-6 h-6" />,
      subItems: [
        {
          name: "Add User",
          path: "/user/add",
          icon: <PlusCircle className="w-4 h-4" />,
        },
        {
          name: "Bulk User",
          path: "/user/bulk-import",
          icon: <FolderInput className="w-4 h-4" />,
        },
        {
          name: "User Report",
          path: "/user",
          icon: <User className="w-6 h-6" />,
        },
      ],
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings className="w-6 h-6" />,
    },
  ],
  admin: [
    {
      name: "Dashboard",
      path: "/dashboard/admin",
      icon: <LayoutDashboard className="w-6 h-6" />,
    },
    { name: "Sim", path: "/sim", icon: <Signal className="w-6 h-6" /> },
    {
      name: "Devices",
      path: "/devices",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <Package className="w-6 h-6" />,
      subItems: [
        {
          name: "Add Product",
          path: "/product/add-product",
          icon: <PlusCircle className="w-4 h-4" />,
        },
        {
          name: "Edit Product",
          path: "/product/edit-product",
          icon: <Edit className="w-4 h-4" />,
        },
        {
          name: "Product Import",
          path: "/product/bulk-import",
          icon: <FolderInput className="w-4 h-4" />,
        },
      ],
    },
    {
      name: "Management",
      path: "/management",
      icon: <Users className="w-6 h-6" />,
    },
    {
      name: "Reports",
      path: "/reports",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings className="w-6 h-6" />,
    },
  ],
  retailer: [
    {
      name: "Dashboard",
      path: "/dashboard/retailer",
      icon: <LayoutDashboard className="w-6 h-6" />,
    },
    { name: "Sim", path: "/sim", icon: <Signal className="w-6 h-6" /> },
    {
      name: "Devices",
      path: "/devices",
      icon: <Smartphone className="w-6 h-6" />,
    },
    {
      name: "Products",
      path: "/products",
      icon: <Package className="w-6 h-6" />,
      subItems: [
        {
          name: "Add Product",
          path: "/product/add-product",
          icon: <PlusCircle className="w-4 h-4" />,
        },
      ],
    },
    {
      name: "Settings",
      path: "/settings",
      icon: <Settings className="w-6 h-6" />,
    },
  ],
};

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();
  // const params = useParams();
  const userData = JSON.parse(localStorage.getItem("user")); // Getting data from localStorage
  const role = userData?.role; // Accessing role safely
  // console.log(userData, role);

  const userRole = role;
  // console.log(userRole);
  const menuItems = menuByRole[userRole] || menuByRole.retailer; // Fallback to 'retailer' menu if role is invalid

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div
      className={`bg-white text-black h-screen fixed left-0 top-0 p-4 shadow-lg transition-all duration-300 ${
        isExpanded ? "w-64" : "w-24"
      }`}
    >
      <span className="flex items-center justify-center mb-4">
        <span>
          <PackageSearch className="inline-block" />
        </span>
        {isExpanded && (
          <h1 className="text-2xl font-bold inline-block ml-2">
            Merchant Mind
          </h1>
        )}
      </span>

      {isExpanded && (
        <div className="relative mb-4 border border-[#d2d2d2] rounded-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 rounded-md text-primary outline-none"
          />
          <Search className="absolute right-3 top-2 w-6 h-6 text-[#4e4e4e]" />
        </div>
      )}

      <nav>
        <ul className="space-y-2">
          {menuItems.map((item) =>
            item.subItems ? (
              <li key={item.name}>
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center ${
                    isExpanded ? "justify-between" : "justify-center"
                  } w-full p-2 rounded-md hover:bg-[#F1F2F5] transition-all`}
                  title={item.name}
                >
                  <div className="flex items-center">
                    {item.icon}
                    {isExpanded && <span className="ml-2">{item.name}</span>}
                  </div>
                  {isExpanded && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {openDropdown === item.name && (
                  <ul className="ml-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.name}>
                        <NavLink
                          to={subItem.path}
                          className="block p-2 rounded-md hover:bg-[#F1F2F5] transition-all "
                          title={subItem.name}
                        >
                          <div
                            className={`flex items-center ${
                              isExpanded ? "justify-start" : "justify-center"
                            }`}
                          >
                            {subItem.icon}
                            {isExpanded && (
                              <span className="ml-2">{subItem.name}</span>
                            )}
                          </div>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
                {isExpanded ? "" : <hr className="text-[gray]" />}
              </li>
            ) : (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center ${
                      isExpanded ? "justify-start" : "justify-center"
                    } p-2 rounded-md transition-all ${
                      isActive
                        ? "bg-secondary text-white"
                        : "hover:bg-[#F1F2F5]"
                    }`
                  }
                  title={item.name}
                >
                  {item.icon}
                  {isExpanded && <span className="ml-2">{item.name}</span>}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="mt-8">
        <button
          className={`flex items-center p-2 rounded-lg hover:bg-secondary hover:text-white w-full transition-all ${
            isExpanded ? "justify-start" : "justify-center"
          }`}
          title="Logout"
          onClick={handleLogout}
        >
          <LogOut className="w-6 h-6" />
          {isExpanded && <span className="ml-2">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
