/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Splash from './pages/Splash';
import Auth from './pages/Auth';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import AccountType from './pages/onboarding/AccountType';
import UserSelection from './pages/onboarding/UserSelection';
import ProfileSetup from './pages/onboarding/ProfileSetup';
import BusinessSetup from './pages/onboarding/BusinessSetup';
import RoommateSetup from './pages/onboarding/RoommateSetup';
import Dashboard from './pages/Dashboard';
import Marketplace from './pages/Marketplace';
import SellItem from './pages/SellItem';
import Wishlist from './pages/Wishlist';
import FindRoommate from './pages/FindRoommate';
import PGDetails from './pages/PGDetails';
import Community from './pages/Community';
import CommunityHub from './pages/CommunityHub';
import Emergency from './pages/Emergency';
import BusinessDashboard from './pages/BusinessDashboard';
import Explore from './pages/Explore';
import Add from './pages/Add';
import Profile from './pages/Profile';
import MyListings from './pages/MyListings';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/onboarding/account-type" element={<AccountType />} />
        <Route path="/onboarding/user-type" element={<UserSelection />} />
        <Route path="/onboarding/profile" element={<ProfileSetup />} />
        <Route path="/onboarding/business-setup" element={<BusinessSetup />} />
        <Route path="/onboarding/roommate-setup" element={<RoommateSetup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/sell-item" element={<SellItem />} />
        <Route path="/my-listings" element={<MyListings />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/find-roommate" element={<FindRoommate />} />
        <Route path="/pg-details/:id" element={<PGDetails />} />
        <Route path="/community" element={<Community />} />
        <Route path="/community-hub" element={<CommunityHub />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/business" element={<BusinessDashboard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/add" element={<Add />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

