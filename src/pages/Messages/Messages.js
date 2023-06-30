import React from "react";
import { db } from "../../config/firebase";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

export const Messages = () => {
  const [messages, setMessages] = useState([]);
  const messageData = collection(db, "messages");

  useEffect(() => {
    const getMessages = async () => {
      try {
        const data = await getDocs(messageData);

        const filteredData = data.docs.map((doc) => ({ ...doc.data() }));
        console.log(filteredData);
        setMessages(filteredData);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, []);

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      {messages.map((msg) => (
        <>
          <small>{msg.name}</small>
          <h3 style={{ color: "red" }}>{msg.message}</h3>
          <p>{msg.message}</p>
        </>
      ))}
    </div>
  );
};
