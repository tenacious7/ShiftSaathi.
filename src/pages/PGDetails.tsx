import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PGDetails() {
  const { id } = useParams();

  // In a real app, fetch data based on ID
  const pg = {
    id: id,
    name: 'Sai Residency',
    rating: 4.5,
    location: 'Koramangala, Bangalore',
    price: '₹8,500',
    images: [
      'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    ],
    amenities: ['WiFi', 'AC', 'Food', 'Laundry', 'Power Backup', 'CCTV'],
    description: 'A comfortable and secure PG for students and working professionals. Located in the heart of Koramangala, close to major tech parks and colleges.',
    rules: ['No Smoking', 'No Pets', 'Curfew 10 PM'],
    socialProof: '12 students from Odisha currently staying here',
  };

  return (
    <div className="min-h-screen bg-bg-light pb-24">
      {/* Header Image */}
      <div className="relative h-72">
        <img src={pg.images[0]} alt={pg.name} className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start bg-gradient-to-b from-black/50 to-transparent">
          <Link to="/dashboard" className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors text-white">
            <span className="material-symbols-rounded">arrow_back</span>
          </Link>
          <div className="flex gap-3">
            <button className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors text-white">
              <span className="material-symbols-rounded">share</span>
            </button>
            <button className="p-2 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-colors text-white">
              <span className="material-symbols-rounded">favorite_border</span>
            </button>
          </div>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-lg text-xs backdrop-blur-md">
          1/5 Photos
        </div>
      </div>

      <div className="bg-white rounded-t-3xl -mt-6 relative px-6 py-8 space-y-6 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {/* Title & Rating */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-brand-dark mb-1">{pg.name}</h1>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <span className="material-symbols-rounded text-base">location_on</span>
              {pg.location}
            </div>
          </div>
          <div className="bg-brand-lime text-brand-dark px-3 py-1.5 rounded-xl text-sm font-bold flex items-center gap-1 shadow-sm">
            {pg.rating}
            <span className="material-symbols-rounded text-base filled">star</span>
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-brand-purple/5 border border-brand-purple/10 rounded-xl p-4 flex items-center gap-3">
          <div className="flex -space-x-2 overflow-hidden shrink-0">
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?u=1" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?u=2" alt="" />
            <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/150?u=3" alt="" />
          </div>
          <p className="text-sm text-gray-700 font-medium leading-tight">
            <span className="text-brand-purple font-bold">12 students from Odisha</span> currently staying here.
          </p>
        </div>

        {/* Amenities */}
        <div>
          <h2 className="text-lg font-bold text-brand-dark mb-4">Amenities</h2>
          <div className="grid grid-cols-3 gap-4">
            {pg.amenities.map((amenity) => (
              <div key={amenity} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <span className="material-symbols-rounded text-brand-purple text-2xl">
                  {amenity === 'WiFi' ? 'wifi' : amenity === 'AC' ? 'ac_unit' : amenity === 'Food' ? 'restaurant' : amenity === 'Laundry' ? 'local_laundry_service' : amenity === 'Power Backup' ? 'bolt' : 'videocam'}
                </span>
                <span className="text-xs font-medium text-gray-600">{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-lg font-bold text-brand-dark mb-2">Description</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{pg.description}</p>
        </div>

        {/* Rules */}
        <div>
          <h2 className="text-lg font-bold text-brand-dark mb-3">House Rules</h2>
          <ul className="space-y-2">
            {pg.rules.map((rule) => (
              <li key={rule} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="material-symbols-rounded text-red-500 text-lg">block</span>
                {rule}
              </li>
            ))}
          </ul>
        </div>

        {/* Map Placeholder */}
        <div className="h-48 bg-gray-200 rounded-2xl relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
            Map View
          </div>
          {/* Add a real map component here if needed */}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-50 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500 mb-0.5">Monthly Rent</p>
          <p className="text-2xl font-bold text-brand-dark">{pg.price}</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-3 rounded-xl border border-brand-dark text-brand-dark font-semibold hover:bg-brand-dark/5 transition-colors">
            Call
          </button>
          <button className="px-6 py-3 rounded-xl bg-brand-lime text-brand-dark font-semibold shadow-lg shadow-brand-lime/30 hover:bg-brand-lime/90 transition-colors">
            Book Visit
          </button>
        </div>
      </div>
    </div>
  );
}
