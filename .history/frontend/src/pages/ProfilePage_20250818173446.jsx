import React from 'react'
import { useAuthStore } from '../store/useAuthStore';

const ProfilePage = () => {
  const {authUser, isUpdatingProfile, updateProfile} = useAuthStore();
  return (
    <div className='h-screen pt-20'>
      
    </div>
  )
};

export default ProfilePage;
