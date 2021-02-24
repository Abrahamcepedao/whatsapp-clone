import React from 'react'
import "./Chat.css"

//MaterialUI
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded';
import AttachFileRoundedIcon from '@material-ui/icons/AttachFileRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import { Avatar, IconButton } from '@material-ui/core';
import { InsertEmoticon } from '@material-ui/icons';
import MicIcon from '@material-ui/icons/Mic';

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
                <p className="chat__message">
                    <span className="chat__name">Abraham</span>
                    This is message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message chat__reciever">
                    <span className="chat__name">Abraham</span>
                    This is message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>

                <p className="chat__message">
                    <span className="chat__name">Abraham</span>
                    This is message
                    <span className="chat__timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>

            {/* Footer */}
            <div className="chat__footer">
                <InsertEmoticon/>
                <form>
                    <input className="chat__input" placeholder="type message..." type="text"/>
                    <button type="submit">Send message</button>
                </form>
                <MicIcon/>
            </div>
        </div>
    )
}

export default Chat
