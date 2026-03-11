import { motion, AnimatePresence } from 'framer-motion';
import { X, Bell, UserPlus, Store, MessageCircle } from 'lucide-react';

interface Notification {
  id: number;
  type: 'user_join' | 'new_mess' | 'request_accepted' | 'general';
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: any;
  color: string;
}

interface NotificationsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Notifications({ isOpen, onClose }: NotificationsProps) {
  const notifications: Notification[] = [
    {
      id: 1,
      type: 'user_join',
      title: 'New Neighbors',
      message: '3 people from Odisha joined near you',
      time: '2m ago',
      read: false,
      icon: UserPlus,
      color: 'bg-blue-100 text-blue-600'
    },
    {
      id: 2,
      type: 'new_mess',
      title: 'New Mess Alert',
      message: 'New mess opened near KIIT - "Annapurna Mess"',
      time: '1h ago',
      read: false,
      icon: Store,
      color: 'bg-orange-100 text-orange-600'
    },
    {
      id: 3,
      type: 'request_accepted',
      title: 'Request Accepted',
      message: 'Rohit accepted your roommate request',
      time: '3h ago',
      read: true,
      icon: CheckCircle,
      color: 'bg-green-100 text-green-600'
    }
  ];

  // Helper component for icon to avoid "CheckCircle is not defined" if I missed importing it
  function CheckCircle(props: any) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    );
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
          >
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white sticky top-0 z-10">
              <div className="flex items-center gap-2">
                <Bell className="w-5 h-5 text-brand-purple" />
                <h2 className="text-lg font-bold text-gray-900">Notifications</h2>
                <span className="bg-brand-purple text-white text-xs font-bold px-2 py-0.5 rounded-full">3</span>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {notifications.map((notification, index) => (
                <motion.div
                  key={notification.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-2xl border ${
                    notification.read ? 'bg-white border-gray-100' : 'bg-brand-purple/5 border-brand-purple/10'
                  } relative overflow-hidden group hover:shadow-md transition-all`}
                >
                  <div className="flex gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${notification.color}`}>
                      <notification.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className={`font-bold text-sm ${notification.read ? 'text-gray-700' : 'text-gray-900'}`}>
                          {notification.title}
                        </h3>
                        <span className="text-xs text-gray-400 whitespace-nowrap ml-2">{notification.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{notification.message}</p>
                    </div>
                  </div>
                  {!notification.read && (
                    <div className="absolute top-4 right-4 w-2 h-2 bg-brand-purple rounded-full" />
                  )}
                </motion.div>
              ))}

              <div className="text-center py-8">
                <p className="text-gray-400 text-sm">That's all for now!</p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
