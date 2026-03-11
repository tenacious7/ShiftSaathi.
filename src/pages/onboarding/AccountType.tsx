import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function AccountType() {
  const navigate = useNavigate();

  const handleSelect = (type: string) => {
    if (type === 'user') {
      navigate('/onboarding/user-type');
    } else if (type === 'roommate') {
      navigate('/onboarding/roommate-setup');
    } else {
      navigate('/onboarding/business-setup');
    }
  };

  const options = [
    {
      id: 'user',
      title: 'Find a Place',
      icon: 'search',
      description: 'Looking for a PG, room, or mess service?',
      color: 'bg-brand-blue-accent',
      textColor: 'text-white',
    },
    {
      id: 'roommate',
      title: 'Find a Roommate',
      icon: 'group_add',
      description: 'Have a room? Find someone to share it with.',
      color: 'bg-brand-purple',
      textColor: 'text-white',
    },
    {
      id: 'business',
      title: 'List Your Service',
      icon: 'storefront',
      description: 'Own a PG, hostel, or mess? List it here.',
      color: 'bg-brand-lime',
      textColor: 'text-brand-dark',
    },
  ];

  return (
    <div className="min-h-screen bg-bg-light p-6 flex flex-col justify-center font-sans">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold text-brand-dark mb-2">Welcome to ShiftSaathi</h1>
        <p className="text-gray-600 mb-8">Choose how you want to use the app.</p>

        <div className="space-y-4">
          {options.map((option, index) => (
            <motion.button
              key={option.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              onClick={() => handleSelect(option.id)}
              className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow text-left group"
            >
              <div className={`w-12 h-12 rounded-full ${option.color} flex items-center justify-center ${option.textColor} shrink-0`}>
                <span className="material-symbols-rounded">{option.icon}</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-brand-dark group-hover:text-brand-purple transition-colors">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-500">{option.description}</p>
              </div>
              <span className="material-symbols-rounded ml-auto text-gray-400 group-hover:text-brand-purple">
                chevron_right
              </span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
