import React from 'react'
import { useAuthStore } from '../store/useAuthStore';

const ProfilePage = () => {
  const {authUser, isUpdatingProfile, updateProfile} = useAuthStore();
  return (
    <div>
      Profile PAge
    </div>
  )
};

export default ProfilePage;
