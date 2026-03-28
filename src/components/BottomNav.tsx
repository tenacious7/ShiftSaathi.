import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export default function BottomNav() {
  const location = useLocation();
  const path = location.pathname;

  const navItems = [
    { icon: 'home', label: 'Home', path: '/dashboard' },
    { icon: 'explore', label: 'Explore', path: '/explore' },
    { icon: 'add_circle', label: 'Add', path: '/add', isPrimary: true },
    { icon: 'groups', label: 'Social', path: '/community' },
    { icon: 'person', label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-between items-center shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 font-sans">
      {navItems.map((item) => {
        const isActive = path === item.path;
        
        if (item.isPrimary) {
          return (
            <Link
              key={item.path}
              to={item.path}
              className="relative -top-6 bg-brand-lime text-brand-dark p-4 rounded-full shadow-lg shadow-brand-lime/40 active:scale-95 transition-transform flex items-center justify-center"
            >
              <span className="material-symbols-rounded text-3xl">add</span>
            </Link>
          );
        }

        return (
          <Link
            key={item.path}
            to={item.path}
            className={clsx(
              'flex flex-col items-center gap-1 transition-colors',
              isActive ? 'text-brand-purple' : 'text-gray-400 hover:text-gray-600'
            )}
          >
            <span className={clsx("material-symbols-rounded text-2xl", isActive && "filled")}>
              {item.icon}
            </span>
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
