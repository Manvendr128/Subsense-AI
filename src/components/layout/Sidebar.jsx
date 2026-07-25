import { Link, useLocation } from 'react-router-dom';
import {
  HiOutlineHome,
  HiOutlineCreditCard,
  HiOutlineCloudUpload,
  HiOutlineChatAlt2,
  HiOutlineBell,
  HiOutlineUser,
} from 'react-icons/hi';
import { ROUTES, APP_NAME } from '../../utils/constants';

/**
 * Sidebar — Vertical navigation for desktop views.
 * Shows icon + label for each route with active state highlighting.
 */
const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: ROUTES.DASHBOARD, icon: HiOutlineHome },
    { name: 'Subscriptions', path: ROUTES.SUBSCRIPTIONS, icon: HiOutlineCreditCard },
    { name: 'Upload Receipt', path: ROUTES.UPLOAD, icon: HiOutlineCloudUpload },
    { name: 'AI Chat', path: ROUTES.CHAT, icon: HiOutlineChatAlt2 },
    { name: 'Notifications', path: ROUTES.NOTIFICATIONS, icon: HiOutlineBell },
    { name: 'Profile', path: ROUTES.PROFILE, icon: HiOutlineUser },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="glass hidden lg:flex w-64 flex-col border-r border-border min-h-screen">
      {/* Logo Section */}
      <div className="flex h-16 items-center gap-2 border-b border-border px-6">
        <div className="gradient-primary flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white">
          S
        </div>
        <span className="text-lg font-bold text-text-primary">{APP_NAME}</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                isActive(item.path)
                  ? 'bg-primary/20 text-primary shadow-sm'
                  : 'text-text-secondary hover:bg-surface hover:text-text-primary'
              }`}
            >
              <Icon className="h-5 w-5 flex-shrink-0" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-4">
        <p className="text-xs text-text-muted text-center">
          &copy; 2026 {APP_NAME}
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
