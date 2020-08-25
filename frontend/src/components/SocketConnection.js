import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:3000";



  
      
const SockerConnection = () => {
//   const [state, setState] = useState({ title: "", description: "" });
  const [loading, setLoading] = useState(false);
  const socket = socketIOClient(ENDPOINT);
  const handleButtonClick = (e) => {
    console.log('clicked');
    // const val = value;
    // setState({ ...state, [id]: val });
  };

//   useEffect(() => {
//     const socket = socketIOClient(ENDPOINT);
//     socket.on("FromAPI", data => {
//       setResponse(data);

  return (
    <div>
      Welcome
      <button onClick={handleButtonClick}>
          CLick me
      </button>
      </div>
  );
};

export default SockerConnection;
