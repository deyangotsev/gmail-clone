import React, { useEffect, useState } from "react";
import "../styles/EmailList.css";
import {
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  MoreVert,
  People,
  Redo,
  Settings,
} from "@mui/icons-material";
import { Checkbox, IconButton } from "@mui/material";
import Section from "./Section";
import EmailRow from "./EmailRow";
import { db } from "./firebase";
import {
  collection,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "emails"), orderBy("timestamp", "desc"));

    const updateEmailList = onSnapshot(q, (querySnapshot) => {
      setEmails(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="emailList">
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
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>

      <div className="emailList_list">
        {emails.map(({ id, data: { to, subject, message, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            title={to}
            subject={subject}
            description={message}
            time={new Date(timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
