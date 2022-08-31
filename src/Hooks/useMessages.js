import { useState } from "react";
import { messages } from "../assets/data/admin-data";

export const useMessages = () => {
  const [message, setMessage] = useState(messages);

  return {
    message,
    setMessage,
  };
};
