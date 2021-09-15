import React, { useEffect } from "react";
import { AgoraEduSDK } from "agora-classroom-sdk";

import "./App.css";

const FlexibleClassroom = () => {
  useEffect(() => {
    AgoraEduSDK.launch({
      rtmToken: "",
      userUuid: "123456",
      userName: "teacher",
      roomUuid: "4321",
      roleType: 1,
      roomType: 0,
      roomName: "demo-class",
      pretest: false,
      language: "en",
      startTime: new Date().getTime(),
      duration: 60 * 30,
      courseWareList: [],
      recordUrl: null,
      listener: (evt) => {
        console.log("evt", evt);
      },
    });
  }, []);

  const setupClassRoom = () => {
    AgoraEduSDK.config({
      appId: "",
    });
  };

  return <div className="classroom">{setupClassRoom()}</div>;
};

export default FlexibleClassroom;
