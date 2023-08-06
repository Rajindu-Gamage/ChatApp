import React, { useState, useRef } from "react";
import "./App.css";
import { Auth } from "./components/Auth";

import Cookies from "universal-cookie";
import { Chat } from "./components/Chat";

import { MuiTypography } from "./components/MuiTypography";
import MuiButton from "./components/MuiButton";
import MuiResponsiveness from "./components/MuiResponsiveness";
import { MuiTextField } from "./components/MuiTextField";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"));
  const [room, setRoom] = useState("");
  const roomInputRef = useRef(null);

  const handleButtonClick = () => {
    setRoom(roomInputRef.current.value);
  };

  if (!isAuth) {
    return (
      <div>
        <Auth setIsAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div>
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room">
          <MuiTypography />
          <input type="text" ref={roomInputRef} size={20} />
          &nbsp;
          <MuiButton onClick={handleButtonClick} label="Submit" />
        </div>
      )}
    </div>
  );
  <MuiResponsiveness />;
}

export default App;
