import React from "react";
import "../styles/EmailRow.css";
import { Checkbox, IconButton } from "@mui/material";
import {
  LabelImportant,
  LabelImportantOutlined,
  Star,
  StarBorderOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "../features/mailSlice";

function EmailRow({ id, title, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addToStarred = (e) => {
    e.stopPropagation();
  };
  const addToImportant = (e) => {
    e.stopPropagation();
  };

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
      })
    );

    navigate("/mail");
  };

  return (
    <div className="emailRow" onClick={openMail}>
      <div className="emailRow_options">
        <Checkbox />
        <IconButton>
          <Checkbox
            icon={<StarBorderOutlined />}
            checkedIcon={<Star />}
            onClick={addToStarred}
            color="default"
          />
        </IconButton>
        <IconButton>
          <Checkbox
            icon={<LabelImportantOutlined  />}
            checkedIcon={<LabelImportant className="labelImportant"/>}
            onClick={addToImportant}
          />
        </IconButton>
      </div>

      <h3 className="emailRow_title">{title}</h3>

      <div className="emailRow_message">
        <h4>
          {subject}{" "}
          <span className="emailRow_description">- {description}</span>
        </h4>
      </div>

      <p className="emailRow_time">{time}</p>
    </div>
  );
}

export default EmailRow;
