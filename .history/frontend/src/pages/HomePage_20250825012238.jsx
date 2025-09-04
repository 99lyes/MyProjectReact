import React, { use } from 'react'
import { useChatStore } from '../store/useChatStore'


const HomePage = () => {
  const {selectedUser} = useChatStore();

  return (
    <div className='h-screen bg-base-200'>
      <div className='flex items-center justify-center pt-20 ox-4'>
        <div className='bg-base-200 rounded-lg shadow-xl w-full max-w-6xl h-[calc(100vh-8rem)]'>
          <div className='flex h-full rounded-lg overflow-hidden'>

          </div>

        </div>

      </div>
    </div>
  )
}

export default HomePage
