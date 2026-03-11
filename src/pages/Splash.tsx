import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding/user-type');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-brand-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 0 L100 0 L100 100 L0 100 Z" fill="url(#grid)" />
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
        </svg>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="z-10 flex flex-col items-center"
      >
        <div className="w-48 h-48 mb-6 relative">
            {/* 3D Illustration Placeholder */}
            <img 
                src="https://cdn3d.iconscout.com/3d/premium/thumb/house-location-5492652-4577889.png" 
                alt="3D House Location" 
                className="w-full h-full object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
            />
        </div>
        <h1 className="text-5xl font-extrabold mb-2 tracking-tight text-white">ShiftSaathi</h1>
        <p className="text-xl opacity-90 font-medium text-brand-lime">Feel at Home, Anywhere in India</p>
      </motion.div>

      <div className="absolute bottom-12 w-64">
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-brand-lime"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2.5, ease: "linear" }}
          />
        </div>
        <p className="text-center text-xs mt-4 opacity-50 font-mono uppercase tracking-widest">Loading Experience</p>
      </div>
    </div>
  );
}
