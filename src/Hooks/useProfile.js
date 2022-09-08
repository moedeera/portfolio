import { useState } from "react";
import axios from "axios";
import { useMemo } from "react";
import { profiles } from "../assets/data/admin-data";

export const useProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loadingProfile, setLoadingProgile] = useState(false);

  const fetchProfile = async (token) => {
    console.log(token);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        token,
      });
      console.log(body);
      const res = await axios.post(
        "https://auction-website89.herokuapp.com/content/fetch",
        body,
        config
      );
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const LogIn = async (info) => {
    // console.log(message);

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(info);
      const res = await axios.post(
        "https://auction-website89.herokuapp.com/bids/message",
        body,
        config
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    profile,
    setProfile,
    fetchProfile,
  };
};
