import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, Eye, EyeOff, User, ArrowRight } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          }
        }
      });

      if (error) throw error;
      
      if (data.user) {
        navigate('/onboarding/account-type');
      }
    } catch (err: any) {
      setError(err.message || 'Failed to register');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-brand-dark flex flex-col font-sans relative overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Students collaborating" 
          className="w-full h-[50vh] object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/40 via-brand-dark/80 to-brand-dark" />
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-16 pb-8 px-6 flex flex-col items-center text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 bg-brand-lime rounded-2xl flex items-center justify-center shadow-lg shadow-brand-lime/20 mb-6"
        >
          <div className="w-6 h-6 bg-brand-dark rounded-full" />
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-3xl font-extrabold text-white tracking-tight"
        >
          Create Account
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-2 text-brand-lime/80 font-medium"
        >
          Join ShiftSaathi today
        </motion.p>
      </div>

      {/* Bottom Sheet Form */}
      <motion.div 
        initial={{ opacity: 0, y: "100%" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200, delay: 0.3 }}
        className="relative z-10 flex-1 bg-white rounded-t-[40px] px-6 pt-10 pb-12 shadow-2xl flex flex-col"
      >
        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8" />
        
        <form className="space-y-5 flex-1" onSubmit={handleRegister}>
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm font-medium border border-red-100">
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm font-bold text-gray-900 mb-1.5 ml-1">Full Name</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all text-sm bg-gray-50 focus:bg-white"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-1.5 ml-1">Email address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all text-sm bg-gray-50 focus:bg-white"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-900 mb-1.5 ml-1">Password</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-11 pr-12 py-3.5 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-brand-purple/20 focus:border-brand-purple outline-none transition-all text-sm bg-gray-50 focus:bg-white"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center gap-2 py-4 px-4 rounded-2xl shadow-lg shadow-brand-dark/20 text-base font-bold text-white bg-brand-dark hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-dark transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
              {!loading && <ArrowRight className="w-5 h-5" />}
            </button>
          </div>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600 font-medium">
          Already have an account?{' '}
          <Link to="/auth/login" className="font-bold text-brand-purple hover:text-brand-dark transition-colors">
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
