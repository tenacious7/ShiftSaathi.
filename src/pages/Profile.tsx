import { Link } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

export default function Profile() {
  return (
    <div className="min-h-screen bg-bg-light pb-24">
      {/* Header */}
      <div className="bg-brand-dark text-white p-6 rounded-b-3xl shadow-lg relative overflow-hidden">
        <div className="flex justify-between items-center mb-6 relative z-10">
          <h1 className="text-xl font-bold">My Profile</h1>
          <button className="p-2 -mr-2 rounded-full hover:bg-white/10 transition-colors text-white">
            <span className="material-symbols-rounded">settings</span>
          </button>
        </div>

        <div className="flex items-center gap-4 relative z-10">
          <div className="w-20 h-20 rounded-full border-4 border-white/20 shadow-lg overflow-hidden">
            <img src="https://i.pravatar.cc/150?u=brijesh" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Brijesh Ghadei</h2>
            <p className="text-white/80 text-sm">Software Engineer</p>
            <div className="flex items-center gap-1 text-white/60 text-xs mt-1">
              <span className="material-symbols-rounded text-sm">location_on</span>
              Bangalore, India
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="flex justify-around bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="text-center">
            <span className="block text-xl font-bold text-brand-dark">12</span>
            <span className="text-xs text-gray-500">Connections</span>
          </div>
          <div className="w-px bg-gray-100"></div>
          <div className="text-center">
            <span className="block text-xl font-bold text-brand-dark">5</span>
            <span className="text-xs text-gray-500">Reviews</span>
          </div>
          <div className="w-px bg-gray-100"></div>
          <div className="text-center">
            <span className="block text-xl font-bold text-brand-dark">4.8</span>
            <span className="text-xs text-gray-500">Rating</span>
          </div>
        </div>

        {/* Menu */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {[
            { icon: 'person', label: 'Personal Information', path: '/onboarding/profile' },
            { icon: 'storefront', label: 'My Ads & Listings', path: '/my-listings' },
            { icon: 'favorite', label: 'Saved PGs', path: '/saved' },
            { icon: 'history', label: 'Booking History', path: '/history' },
            { icon: 'support_agent', label: 'Help & Support', path: '/support' },
            { icon: 'logout', label: 'Logout', path: '/', color: 'text-red-500' },
          ].map((item, index) => (
            <Link
              key={item.label}
              to={item.path}
              className={`flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors ${
                index !== 5 ? 'border-b border-gray-50' : ''
              } ${item.color || 'text-gray-700'}`}
            >
              <div className={`w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center ${item.color ? 'bg-red-50 text-red-500' : 'text-gray-500'}`}>
                <span className="material-symbols-rounded">{item.icon}</span>
              </div>
              <span className="font-medium flex-1">{item.label}</span>
              <span className="material-symbols-rounded text-gray-400">chevron_right</span>
            </Link>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
