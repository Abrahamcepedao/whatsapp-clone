import React from 'react'
import "./Chat.css"

//MaterialUI
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import AttachFileRoundedIcon from '@material-ui/icons/AttachFileRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Avatar, IconButton } from '@material-ui/core';

function Chat() {
    return (
        <div className="chat">
            {/* header */}
            <div className="chat__header">
                <Avatar/>
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchRoundedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileRoundedIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertRoundedIcon/>
                    </IconButton>
                </div>
            </div>

            {/* body */}
            <div className="chat__body">
                <p>
                    <span className="chat_name">Abraham</span>
                    This is message
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>
        </div>
    )
}

export default Chat
