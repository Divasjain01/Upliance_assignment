
import { Link, Outlet, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Layout = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Counter" },
    { path: "/user-form", label: "User Form" },
    { path: "/editor", label: "Rich Text Editor" },
    { path: "/dashboard", label: "Dashboard" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-mint-500",
                    location.pathname === item.path
                      ? "text-mint-500"
                      : "text-gray-600"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-16 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};
