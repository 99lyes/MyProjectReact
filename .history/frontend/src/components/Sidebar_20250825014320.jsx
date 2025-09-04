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
        <aside>
             
        </aside>
    )
}

export default Sidebar;
