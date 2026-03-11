import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Trash2, Edit2, Check, Utensils, MessageSquare, BarChart2 } from 'lucide-react';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

export default function BusinessDashboard() {
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  const [showManageMenuModal, setShowManageMenuModal] = useState(false);
  
  // Menu State
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: 1, name: 'Veg Thali', price: 80, category: 'Lunch' },
    { id: 2, name: 'Chicken Biryani', price: 150, category: 'Dinner' },
    { id: 3, name: 'Aloo Paratha', price: 40, category: 'Breakfast' },
  ]);
  const [newItem, setNewItem] = useState({ name: '', price: '', category: 'Lunch' });
  const [editingId, setEditingId] = useState<number | null>(null);

  // Post State
  const [postType, setPostType] = useState<'text' | 'poll'>('text');
  const [postContent, setPostContent] = useState('');
  const [pollOptions, setPollOptions] = useState(['Yes', 'No']);

  const stats = [
    { label: 'Views', value: '1.2k', icon: 'visibility', color: 'bg-brand-blue-accent/20 text-brand-blue-accent' },
    { label: 'Contacts', value: '45', icon: 'call', color: 'bg-brand-lime/20 text-brand-dark' },
    { label: 'Rating', value: '4.5', icon: 'star', color: 'bg-brand-purple/20 text-brand-purple' },
  ];

  const leads = [
    { id: 1, name: 'Rahul Sharma', time: '2h ago', status: 'New', phone: '+91 98765 43210' },
    { id: 2, name: 'Priya Patel', time: '5h ago', status: 'Contacted', phone: '+91 98765 43211' },
    { id: 3, name: 'Amit Singh', time: '1d ago', status: 'Closed', phone: '+91 98765 43212' },
  ];

  // Menu Handlers
  const handleAddMenuItem = () => {
    if (!newItem.name || !newItem.price) return;
    
    if (editingId) {
      setMenuItems(prev => prev.map(item => 
        item.id === editingId 
          ? { ...item, name: newItem.name, price: Number(newItem.price), category: newItem.category }
          : item
      ));
      setEditingId(null);
    } else {
      setMenuItems(prev => [
        ...prev, 
        { id: Date.now(), name: newItem.name, price: Number(newItem.price), category: newItem.category }
      ]);
    }
    setNewItem({ name: '', price: '', category: 'Lunch' });
  };

  const handleEditMenuItem = (item: MenuItem) => {
    setNewItem({ name: item.name, price: item.price.toString(), category: item.category });
    setEditingId(item.id);
  };

  const handleDeleteMenuItem = (id: number) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  // Post Handlers
  const handleCreatePost = () => {
    // Logic to submit post would go here
    console.log({ type: postType, content: postContent, options: postType === 'poll' ? pollOptions : undefined });
    setShowCreatePostModal(false);
    setPostContent('');
    setPollOptions(['Yes', 'No']);
    alert('Community post created successfully!');
  };

  const handleAddOption = () => {
    setPollOptions([...pollOptions, '']);
  };

  const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-24 font-sans relative">
      {/* Header */}
      <div className="bg-brand-dark text-white p-6 rounded-b-3xl shadow-lg relative overflow-hidden">
        <div className="flex justify-between items-center mb-6 relative z-10">
          <Link to="/dashboard" className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors text-white">
            <span className="material-symbols-rounded">arrow_back</span>
          </Link>
          <h1 className="text-xl font-bold">Business Dashboard</h1>
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-inner">
            <span className="material-symbols-rounded text-white">settings</span>
          </div>
        </div>

        <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 shadow-inner flex items-center justify-between">
          <div>
            <h2 className="font-bold text-lg">Sai Residency</h2>
            <p className="text-xs text-white/70">Koramangala, Bangalore</p>
          </div>
          <span className="bg-brand-lime text-brand-dark px-2 py-1 rounded-lg text-xs font-bold shadow-sm">
            Active
          </span>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col items-center gap-2"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${stat.color}`}>
                <span className="material-symbols-rounded text-xl">{stat.icon}</span>
              </div>
              <span className="text-2xl font-bold text-gray-900">{stat.value}</span>
              <span className="text-xs text-gray-500">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setShowManageMenuModal(true)}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-3 hover:shadow-md transition-all active:scale-95 group"
            >
              <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                <Utensils size={24} />
              </div>
              <span className="text-sm font-bold text-gray-800">Manage Menu</span>
            </button>
            
            <button 
              onClick={() => setShowCreatePostModal(true)}
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-3 hover:shadow-md transition-all active:scale-95 group"
            >
              <div className="w-12 h-12 rounded-full bg-brand-purple/10 text-brand-purple flex items-center justify-center group-hover:bg-brand-purple/20 transition-colors">
                <MessageSquare size={24} />
              </div>
              <span className="text-sm font-bold text-gray-800">Community Post</span>
            </button>
          </div>
        </div>

        {/* Recent Leads */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-gray-900">Recent Leads</h3>
            <button className="text-brand-blue text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-brand-dark text-sm">{lead.name}</h4>
                  <p className="text-xs text-gray-500">{lead.time} • {lead.phone}</p>
                </div>
                <span className={`px-2 py-1 rounded-lg text-xs font-bold ${
                  lead.status === 'New' ? 'bg-brand-blue-accent/20 text-brand-blue-accent' :
                  lead.status === 'Contacted' ? 'bg-brand-purple/20 text-brand-purple' :
                  'bg-brand-lime/20 text-brand-dark'
                }`}>
                  {lead.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Post Modal */}
      <AnimatePresence>
        {showCreatePostModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Create Community Post</h2>
                <button onClick={() => setShowCreatePostModal(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <X size={20} className="text-gray-600" />
                </button>
              </div>

              <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
                <button 
                  onClick={() => setPostType('text')}
                  className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${postType === 'text' ? 'bg-white shadow-sm text-brand-purple' : 'text-gray-500'}`}
                >
                  Announcement
                </button>
                <button 
                  onClick={() => setPostType('poll')}
                  className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${postType === 'poll' ? 'bg-white shadow-sm text-brand-purple' : 'text-gray-500'}`}
                >
                  <BarChart2 size={16} /> Poll
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <textarea
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  placeholder={postType === 'poll' ? "Ask a question..." : "What's new in your mess/PG?"}
                  className="w-full p-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-purple/20 outline-none resize-none h-32"
                />

                {postType === 'poll' && (
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Poll Options</label>
                    {pollOptions.map((option, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={option}
                          onChange={(e) => handleOptionChange(index, e.target.value)}
                          className="flex-1 px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 focus:border-brand-purple outline-none text-sm"
                          placeholder={`Option ${index + 1}`}
                        />
                        {index > 1 && (
                          <button 
                            onClick={() => setPollOptions(pollOptions.filter((_, i) => i !== index))}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-lg"
                          >
                            <Trash2 size={18} />
                          </button>
                        )}
                      </div>
                    ))}
                    {pollOptions.length < 4 && (
                      <button 
                        onClick={handleAddOption}
                        className="text-sm text-brand-purple font-bold flex items-center gap-1 hover:underline"
                      >
                        <Plus size={16} /> Add Option
                      </button>
                    )}
                  </div>
                )}
              </div>

              <button 
                onClick={handleCreatePost}
                className="w-full py-3.5 bg-brand-dark text-white rounded-xl font-bold shadow-lg shadow-brand-dark/20 hover:bg-gray-800 transition-colors"
              >
                Post Update
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Manage Menu Modal */}
      <AnimatePresence>
        {showManageMenuModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl max-h-[90vh] flex flex-col"
            >
              <div className="flex justify-between items-center mb-6 shrink-0">
                <h2 className="text-xl font-bold text-gray-900">Manage Menu</h2>
                <button onClick={() => setShowManageMenuModal(false)} className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                  <X size={20} className="text-gray-600" />
                </button>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 mb-6 shrink-0">
                <h3 className="text-sm font-bold text-gray-700 mb-3">{editingId ? 'Edit Item' : 'Add New Item'}</h3>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    placeholder="Item Name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    className="col-span-2 px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-brand-purple"
                  />
                  <input
                    type="number"
                    placeholder="Price (₹)"
                    value={newItem.price}
                    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                    className="px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-brand-purple"
                  />
                  <select
                    value={newItem.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                    className="px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none focus:border-brand-purple bg-white"
                  >
                    <option value="Breakfast">Breakfast</option>
                    <option value="Lunch">Lunch</option>
                    <option value="Dinner">Dinner</option>
                    <option value="Snacks">Snacks</option>
                  </select>
                </div>
                <button 
                  onClick={handleAddMenuItem}
                  className="w-full py-2 bg-brand-purple text-white rounded-lg text-sm font-bold hover:bg-brand-purple/90 transition-colors flex items-center justify-center gap-2"
                >
                  {editingId ? <Check size={16} /> : <Plus size={16} />}
                  {editingId ? 'Update Item' : 'Add to Menu'}
                </button>
              </div>

              <div className="flex-1 overflow-y-auto pr-2 space-y-3">
                {menuItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.category} • ₹{item.price}</p>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleEditMenuItem(item)}
                        className="p-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button 
                        onClick={() => handleDeleteMenuItem(item.id)}
                        className="p-2 text-red-600 bg-red-50 rounded-lg hover:bg-red-100"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))}
                {menuItems.length === 0 && (
                  <p className="text-center text-gray-400 text-sm py-4">No items in menu yet.</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
