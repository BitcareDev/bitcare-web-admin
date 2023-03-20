import React, { useContext } from "react";
import Input from "./Input";
import Messages from "./Messages";
import { ChatContext } from "../../Context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

    return (
        <div className="chat">
            <div className="chatInfo">
                <img src={data.user?.photoURL} alt=''/> 
                <span>{data.user?.displayName}</span>
            </div>
            <Messages/>
            <Input/>
        </div>
    )
}

export default Chat;