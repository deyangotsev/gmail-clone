import React from 'react';
import '../styles/EmailList.css';    
import { ArrowDropDown, CheckBoxOutlineBlank, MoreVert, Redo } from '@mui/icons-material';
import { IconButton } from '@mui/material';


function EmailList() {
  return (
    <div className='emailList'>
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <CheckBoxOutlineBlank />

          <IconButton>
            <ArrowDropDown />
          </IconButton>

          <IconButton>
            <Redo />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default EmailList