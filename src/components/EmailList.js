import React from 'react';
import '../styles/EmailList.css';
import { ArrowDropDown,  ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material';
import { Checkbox, IconButton } from '@mui/material';
import Section from './Section';
import EmailRow from './EmailRow';


function EmailList() {
  return (
    <div className='emailList'>
      <div className="emailList_settings">
        <div className="emailList_settingsLeft">
          <Checkbox />

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

        <div className="emailList_settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>

          <IconButton>
            <ChevronRight />
          </IconButton>

          <IconButton>
            <KeyboardHide />
          </IconButton>

          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList_sections">
        <Section Icon={Inbox} title='Primary' color='red' selected />
        <Section Icon={People} title='Social' color='#1A73E8' />
        <Section Icon={LocalOffer} title='Promotions' color='green' />
      </div>

      <div className="emailList_list">
        <EmailRow title='Deyan' subject='About the Rent' description='When are you going to pay ?' time='10pm'/>
        <EmailRow title='Elon Musk' subject='Need more memes' description='Hey, I need a funny meme for Twitter! Can you share me something funny.' />
        <EmailRow title='Eminem' subject="Lyrics for a new song" description="Hey, dude! i'm thinking about making a new song called 'Godzilla'. Can you write the lyrics for me?" />
        
      </div>
    </div>
  )
}

export default EmailList