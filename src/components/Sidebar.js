import React from 'react'
import "./Sidebar.css"

//MaterialUI
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded';
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* header */}
            <div className="sidebar__header">
                <Avatar src="https://abrahamcepedao.github.io/portfolio/img/Home/Landing/avatar.png"/>
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeRoundedIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatRoundedIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertRoundedIcon/>
                    </IconButton>
                </div>
            </div>

            {/* search bar */}
            <div className="sidebar__search">   
                <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input placeholder="Search or start chat" type="text"/>
                </div>
            </div>

            {/* Chat section */}
            <div className="sidebar_chats">
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
