import React from "react";
import "../styles/Login.css";
import loginIcon from "../assets/login_icon.png";
import { Button } from "@mui/material";
import { auth, db, provider } from "./firebase";
import { onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "../features/userSlice";
import { addDoc, collection, collectionGroup, doc, getDocs, query, where } from "firebase/firestore";

function Login() {
  const dispatch = useDispatch();




  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .finally(getData())

  };

  const user = useSelector(selectUser);

  async function getData() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(collection(db, "users"), where("email", "==", user.email));

        const querySnapshot = await getDocs(q).then(async (value) => {
          if (value.empty) {
            const docRef = await addDoc(collection(db, "users"), {
              email: `${user.email}`,
              important: {},

            });
          }
        })
      }
    })
  }

 

  return (
    <div className="login">
      <div className="login_container">
        <img src={loginIcon} alt="" />
        <Button onClick={signIn} variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
