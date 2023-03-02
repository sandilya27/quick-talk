import React, { useContext } from 'react'
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import Messages from './Messages';
import Input from './Input'
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const {data} =useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <button className='img'><VideocamRoundedIcon/></button>
          <button className='img'><PersonAddAltRoundedIcon/></button>
          <button className='img'><MoreHorizRoundedIcon/></button>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat