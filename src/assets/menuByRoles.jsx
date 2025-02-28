import {
  LayoutDashboard,
  Package,
  PlusCircle,
  Edit,
  FolderInput,
  BarChart3,
  Users,
  FileText,
  User,
  ShieldCheck,
  ClipboardList,
  Settings,
  Smartphone,
  Signal,
  Boxes,
  UserPlus,
} from "lucide-react";

// Super Admin Menu Items (full access)
export const superAdminMenuItems = [
  {
    name: "Dashboard",
    path: "/dashboard/super_admin",
    icon: <LayoutDashboard className="w-6 h-6" />,
  },
  {
    name: "Sim",
    path: "/sim",
    icon: <Signal className="w-6 h-6" />,
  },
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
    name: "Inventory",
    icon: <Boxes className="w-6 h-6" />,
    subItems: [
      {
        name: "Add Inventory",
        path: "/inventory/add-inventory",
        icon: <PlusCircle className="w-4 h-4" />,
      },
      {
        name: "Edit Inventory",
        path: "/inventory/edit-inventory",
        icon: <Edit className="w-4 h-4" />,
      },
      {
        name: "Import Inventory",
        path: "/inventory/import",
        icon: <FolderInput className="w-4 h-4" />,
      },
      {
        name: "Inventory Report",
        path: "/inventory/report",
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
    path: "/user",
    icon: <User className="w-6 h-6" />,
  },
  {
    name: "Add User",
    path: "/user/add",
    icon: <UserPlus className="w-6 h-6" />,
  },
  {
    name: "White-listing",
    path: "/white-listing",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    name: "Requests",
    path: "/requests",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings className="w-6 h-6" />,
  },
];

// Admin Menu Items (can't add users)
export const adminMenuItems = [
  {
    name: "Dashboard",
    path: "/dashboard/admin",
    icon: <LayoutDashboard className="w-6 h-6" />,
  },
  {
    name: "Sim",
    path: "/sim",
    icon: <Signal className="w-6 h-6" />,
  },
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
    name: "Inventory",
    icon: <Boxes className="w-6 h-6" />,
    subItems: [
      {
        name: "Add Inventory",
        path: "/inventory/add-inventory",
        icon: <PlusCircle className="w-4 h-4" />,
      },
      {
        name: "Edit Inventory",
        path: "/inventory/edit-inventory",
        icon: <Edit className="w-4 h-4" />,
      },
      {
        name: "Import Inventory",
        path: "/inventory/import",
        icon: <FolderInput className="w-4 h-4" />,
      },
      {
        name: "Inventory Report",
        path: "/inventory/report",
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
    path: "/user",
    icon: <User className="w-6 h-6" />,
  },
  {
    name: "White-listing",
    path: "/white-listing",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    name: "Requests",
    path: "/requests",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings className="w-6 h-6" />,
  },
];

// Retailer Menu Items (limited access)
export const retailerMenuItems = [
  {
    name: "Dashboard",
    path: "/dashboard/retailer",
    icon: <LayoutDashboard className="w-6 h-6" />,
  },
  {
    name: "Sim",
    path: "/sim",
    icon: <Signal className="w-6 h-6" />,
  },
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
      // Product Report removed for retailer
    ],
  },
  {
    name: "Inventory",
    icon: <Boxes className="w-6 h-6" />,
    subItems: [
      {
        name: "Add Inventory",
        path: "/inventory/add-inventory",
        icon: <PlusCircle className="w-4 h-4" />,
      },
      {
        name: "Edit Inventory",
        path: "/inventory/edit-inventory",
        icon: <Edit className="w-4 h-4" />,
      },
      {
        name: "Import Inventory",
        path: "/inventory/import",
        icon: <FolderInput className="w-4 h-4" />,
      },
      // Inventory Report removed for retailer
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
  // User management removed for retailer
  {
    name: "White-listing",
    path: "/white-listing",
    icon: <ShieldCheck className="w-6 h-6" />,
  },
  {
    name: "Requests",
    path: "/requests",
    icon: <ClipboardList className="w-6 h-6" />,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <Settings className="w-6 h-6" />,
  },
];

// Role-based menu selection function
export const getMenuByRole = (role) => {
  switch (role) {
    case "super_admin":
      return superAdminMenuItems;
    case "admin":
      return adminMenuItems;
    case "retailer":
      return retailerMenuItems;
    default:
      return [];
  }
};
