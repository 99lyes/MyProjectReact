import React, { useEffect } from 'react'

const Sidebar = () => {
    const {getUsers, users, isUsersLoading, setSelectedUser, selectedUser} = useChatStore();
    
    const onlineUsers = []; // Placeholder for online users logic

    useEffect(() => {
        getUsers()
    }, [getUsers]);

    return (
        <div>
            Sidebar 
        </div>
    )
}

export default Sidebar;
