import React, { useEffect } from 'react'
import SidebarSkeleton from './skeletons/SidebarSkeletons';

const Sidebar = () => {
    const {getUsers, users, isUsersLoading, setSelectedUser, selectedUser} = useChatStore();
    
    const onlineUsers = []; // Placeholder for online users logic

    useEffect(() => {
        getUsers()
    }, [getUsers]);

    if(isUsersLoading) return <SidebarSkeleton/>;

    return (
        <aside className='h-full w-20 lg:w-72 border-r border-base-300 
        flex flex-col transition-all duration-200'>
            
        </aside>
    )
}

export default Sidebar;
