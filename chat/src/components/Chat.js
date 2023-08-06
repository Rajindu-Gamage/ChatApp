import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "../styles/Chat.css";
import Cookies from "universal-cookie";
import Button from "@mui/material/Button";
import MuiMsgz from "./MuiMsgz";
import SendIcon from "@mui/icons-material/Send";
export const Chat = (props) => {
  const { room } = props;
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const queryMessages = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    const unsuscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsuscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;

    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });

    setNewMessage("");
  };

  return (
    <div className="chat-app">
      <div Chat classname="head">
        <MuiMsgz />
        <p className="RM">{room.toUpperCase()}</p>
      </div>
      <div className="message">
        {messages.map((message) => (
          <div classname="message" key={message.id}>
            <span className="user">{message.user}</span>
            <p> {message.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="new-message-form">
        <input
          className="new-message-input"
          placeholder="Text here..."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button variants="contained">{<SendIcon />}</button>
      </form>
    </div>
  );
};
